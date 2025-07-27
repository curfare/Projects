import { Box, List, ListItem, Typography } from '@mui/material'

const pseudocode = {
  bubble: `function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Меняем местами
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}`,

  selection: `function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) minIdx = j;
    }
    // Меняем местами
    let temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }
  return arr;
}
`,

  insertion: `function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}`,

  quick: `function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let pivot = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return quickSort(left).concat(pivot, quickSort(right));
}`,

  merge: `function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) result.push(left.shift());
    else result.push(right.shift());
  }
  return result.concat(left).concat(right);
}`,

  heap: `function heapSort(arr) {
  buildMaxHeap(arr);
  for (let i = arr.length - 1; i > 0; i--) {
    // Меняем корень с последним элементом
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    maxHeapify(arr, 0, i);
  }
  return arr;
}

function buildMaxHeap(arr) {
  let length = arr.length;
  for (let i = Math.floor(length / 2); i >= 0; i--) {
    maxHeapify(arr, i, length);
  }
}

function maxHeapify(arr, i, heapSize) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let largest = i;

  if (left < heapSize && arr[left] > arr[largest]) largest = left;
  if (right < heapSize && arr[right] > arr[largest]) largest = right;

  if (largest !== i) {
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;
    maxHeapify(arr, largest, heapSize);
  }
}`,
}

export default function PageInfo1() {
  return (
    <>
      <Box sx={{ ml: 2, fontSize: '1.3rem', width: '50vw', mt: 2 }}>
        <Typography
          variant='h2'
          component='h2'
          sx={{ mb: 3 }}
          className='pageinfo__heading'
        >
          Алгоритмы сортировки
        </Typography>
        <Typography variant='p' component='p'>
          Это методы упорядочивания элементов в массиве или списке по
          определённому критерию (например, по возрастанию или убыванию). В
          программировании существует множество алгоритмов сортировки,
          различающихся по эффективности и способу реализации.
        </Typography>
        <List>
          <ListItem>1 - Пузырьковая сортировка (Bubble Sort)</ListItem>
          <ListItem>2 - Сортировка выбором (Selection Sort)</ListItem>
          <ListItem>3 - Сортировка вставками (Insertion Sort)</ListItem>
          <ListItem>4 - Быстрая сортировка (Quick Sort)</ListItem>
          <ListItem>5 - Сортировка слиянием (Merge Sort)</ListItem>
          <ListItem>6 - Пирамидальная сортировка (Heap Sort)</ListItem>
        </List>
        <Typography variant='section' component='section'>
          <Typography
            component='div'
            variant='div'
            sx={{ mb: 2, mt: 2 }}
            className='pageinfo__text'
          >
            1. Последовательно сравнивает пары соседних элементов и меняет их
            местами, "всплывая" максимальному элементу в конец. Простая, но
            медленная, редко используется на практике. Временная сложность: O( n
            <sup>2</sup> )
          </Typography>
          <Typography variant='div' component='div' className='code__block'>
            <Typography
              component='h5'
              variant='h5'
              sx={{ fontFamily: 'sans-serif', ml: 5, mb: 2, color: 'white' }}
            >
              Пример кода{' '}
            </Typography>
            <pre>{pseudocode.bubble}</pre>
          </Typography>
          <Typography
            component='div'
            variant='div'
            sx={{ mb: 2, mt: 2 }}
            className='pageinfo__text'
          >
            2. На каждом шаге выбирает минимальный элемент из неотсортированной
            части и ставит его в начало. Меньше обменов, чем у пузырьковой, но
            всё равно медленная. Временная сложность: O( n<sup>2</sup> )
          </Typography>
          <Typography variant='div' component='div' className='code__block'>
            <Typography
              component='h5'
              variant='h5'
              sx={{ fontFamily: 'sans-serif', ml: 5, mb: 2, color: 'white' }}
            >
              Пример кода{' '}
            </Typography>
            <pre>{pseudocode.selection}</pre>
          </Typography>
          <Typography
            component='div'
            variant='div'
            sx={{ mb: 2, mt: 2 }}
            className='pageinfo__text'
          >
            3. Вставляет каждый новый элемент в уже отсортированную часть
            массива. Эффективна для почти отсортированных массивов и небольших
            данных. Временная сложность: O( n<sup>2</sup> )
          </Typography>
          <Typography variant='div' component='div' className='code__block'>
            <Typography
              component='h5'
              variant='h5'
              sx={{ fontFamily: 'sans-serif', ml: 5, mb: 2, color: 'white' }}
            >
              Пример кода{' '}
            </Typography>
            <pre>{pseudocode.insertion}</pre>
          </Typography>
          <Typography
            component='div'
            variant='div'
            sx={{ mb: 2, mt: 2 }}
            className='pageinfo__text'
          >
            4. Разделяет массив на подмассивы по опорному элементу и рекурсивно
            сортирует их. Очень эффективна, широко используется, но в худшем
            случае O ( n<sup>2</sup> ). Временна сложность: В среднем O(n log n)
          </Typography>
          <Typography variant='div' component='div' className='code__block'>
            <Typography
              component='h5'
              variant='h5'
              sx={{ fontFamily: 'sans-serif', ml: 5, mb: 2, color: 'white' }}
            >
              Пример кода{' '}
            </Typography>
            <pre>{pseudocode.quick}</pre>
          </Typography>
          <Typography
            component='div'
            variant='div'
            sx={{ mb: 2, mt: 2 }}
            className='pageinfo__text'
          >
            5. Делит массив на две части, сортирует их и сливает обратно.
            Стабильна, гарантированная производительность, требует
            дополнительной памяти. Временна сложность: O(n log n)
          </Typography>
          <Typography variant='div' component='div' className='code__block'>
            <Typography
              component='h5'
              variant='h5'
              sx={{ fontFamily: 'sans-serif', ml: 5, mb: 2, color: 'white' }}
            >
              Пример кода{' '}
            </Typography>
            <pre>{pseudocode.merge}</pre>
          </Typography>
          <Typography
            component='div'
            variant='div'
            sx={{ mb: 2, mt: 2 }}
            className='pageinfo__text'
          >
            6. Использует структуру данных "куча" для сортировки. Предсказуемая
            производительность, не требует дополнительной памяти. Временна
            сложность: O(n log n)
          </Typography>
          <Typography variant='div' component='div' className='code__block'>
            <Typography
              component='h5'
              variant='h5'
              sx={{ fontFamily: 'sans-serif', ml: 5, mb: 2, color: 'white' }}
            >
              Пример кода{' '}
            </Typography>
            <pre>{pseudocode.heap}</pre>
          </Typography>
        </Typography>
      </Box>
    </>
  )
}
