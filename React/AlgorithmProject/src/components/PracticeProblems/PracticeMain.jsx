import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material'
import BuildIcon from '@mui/icons-material/Build'
import { create } from 'zustand'
import { useState } from 'react'
import PracticeSolution from './PracticeSolution'

const useStore = create((set) => ({
  text: null,
  activeMethod: (method) =>
    set((state) => ({
      text: method,
    })),
}))

export default function PracticeMain() {
  const { text, activeMethod } = useStore()
  const [open, setOpen] = useState(true)
  const texts = {
    m1: `function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    // Флаг для остановки, если массив уже отсортирован
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Меняем местами элементы
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break; // Если не было перестановок, массив отсортирован
  }
  return arr;
}

// Пример:
const array1 = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(array1)); // [11, 12, 22, 25, 34, 64, 90]`,
    m2: `function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

// Пример:
const array2 = [64, 25, 12, 22, 11];
console.log(selectionSort(array2)); // [11, 12, 22, 25, 64]`,
    m3: `function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

// Пример:
const array3 = [12, 11, 13, 5, 6];
console.log(insertionSort(array3)); // [5, 6, 11, 12, 13]`,
    m4: `function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1; // Элемент не найден
}

// Пример:
const array1 = [4, 2, 7, 1, 9, 3];
console.log(linearSearch(array1, 7)); // Выведет: 2
console.log(linearSearch(array1, 5)); // Выведет: -1`,
    m5: `function findMax(arr) {
  if (arr.length === 0) {
    return null; // или можно выбросить ошибку
  }
  let maxVal = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxVal) {
      maxVal = arr[i];
    }
  }
  return maxVal;
}

// Пример:
const array2 = [10, 23, 5, 99, 17];
console.log(findMax(array2)); // Выведет: 99`,
    m6: `function findAllOccurrences(arr, target) {
  const indices = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      indices.push(i);
    }
  }
  return indices;
}

// Пример:
const array3 = [4, 2, 7, 2, 9, 2, 3];
console.log(findAllOccurrences(array3, 2)); // Выведет: [1, 3, 5]
console.log(findAllOccurrences(array3, 8)); // Выведет: []`,
    m7: `function bfs(graph, start) {
  const visited = new Set();
  const queue = [start];
  const order = [];

  visited.add(start);

  while (queue.length > 0) {
    const vertex = queue.shift();
    order.push(vertex);

    for (const neighbor of graph[vertex] || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return order;
}

// Пример:
const graph1 = {
  A: ['B', 'D'],
  B: ['A', 'C', 'E'],
  C: ['B'],
  D: ['A', 'E'],
  E: ['B', 'D', 'F'],
  F: ['E']
};

console.log('BFS порядок обхода:', bfs(graph1, 'A'));
// Например: ['A', 'B', 'D', 'C', 'E', 'F']`,
    m8: `function dfs(graph, vertex, visited = new Set(), order = []) {
  visited.add(vertex);
  order.push(vertex);

  for (const neighbor of graph[vertex] || []) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited, order);
    }
  }

  return order;
}

// Пример:
console.log('DFS порядок обхода:', dfs(graph1, 'A'));
// Например: ['A', 'B', 'C', 'E', 'D', 'F']`,
    m9: `function bfsShortestPath(graph, start, goal) {
  const queue = [[start]];
  const visited = new Set([start]);

  while (queue.length > 0) {
    const path = queue.shift();
    const vertex = path[path.length - 1];

    if (vertex === goal) {
      return path;
    }

    for (const neighbor of graph[vertex] || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([...path, neighbor]);
      }
    }
  }

  return null; // Путь не найден
}

// Пример:
console.log('Кратчайший путь от A до F:', bfsShortestPath(graph1, 'A', 'F'));
// Например: ['A', 'B', 'E', 'F']`,
    m10: `function minOperationsSequence(n) {
  const dp = Array(n + 1).fill(0);
  const prev = Array(n + 1).fill(0);

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + 1;
    prev[i] = i - 1;

    if (i % 2 === 0 && dp[i / 2] + 1 < dp[i]) {
      dp[i] = dp[i / 2] + 1;
      prev[i] = i / 2;
    }
    if (i % 3 === 0 && dp[i / 3] + 1 < dp[i]) {
      dp[i] = dp[i / 3] + 1;
      prev[i] = i / 3;
    }
  }

  // Восстановление пути
  const sequence = [];
  let cur = n;
  while (cur > 0) {
    sequence.push(cur);
    cur = prev[cur];
  }
  sequence.reverse();

  return { operationsCount: dp[n], sequence };
}

// Пример:
const n = 10;
const result1 = minOperationsSequence(n);
console.log('Минимальное количество операций:', result1.operationsCount);
console.log('Последовательность:', result1.sequence);`,
    m11: `function countPaths(n, m) {
  const dp = Array.from({ length: n }, () => Array(m).fill(0));

  for (let i = 0; i < n; i++) dp[i][0] = 1;
  for (let j = 0; j < m; j++) dp[0][j] = 1;

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[n - 1][m - 1];
}

// Пример:
const n2 = 3, m2 = 3;
console.log('Число уникальных путей:', countPaths(n2, m2));`,
    m12: `function countBinarySequences(n) {
  if (n === 0) return 0;
  if (n === 1) return 2; // "0", "1"
  const dp = Array(n + 1).fill(0);
  dp[1] = 2; // "0", "1"
  dp[2] = 3; // "00", "01", "10"

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

// Пример:
const n3 = 5;
console.log('Количество последовательностей без двух единиц подряд:', countBinarySequences(n3));`,
    m13: `function coinChange(coins, amount) {
  // Сортируем монеты по убыванию номинала
  coins.sort((a, b) => b - a);

  let count = 0;
  let remaining = amount;

  for (let coin of coins) {
    if (coin <= remaining) {
      // Сколько монет coin можно взять
      let num = Math.floor(remaining / coin);
      count += num;
      remaining -= coin * num;
    }
    if (remaining === 0) break;
  }

  // Если остаток не равен нулю, размен невозможен заданными монетами
  return remaining === 0 ? count : -1;
}

// Пример использования:
const coins = [25, 10, 5, 1];
const amount = 63;
console.log(coinChange(coins, amount)); // Выведет: 6 (25+25+10+1+1+1)`,
    m14: `function activitySelection(activities) {
  // Сортируем занятия по времени окончания
  activities.sort((a, b) => a.end - b.end);

  const selected = [];
  let lastEnd = 0;

  for (const activity of activities) {
    if (activity.start >= lastEnd) {
      selected.push(activity);
      lastEnd = activity.end;
    }
  }
  return selected;
}

// Пример:
const activities = [
  { start: 1, end: 4 },
  { start: 3, end: 5 },
  { start: 0, end: 6 },
  { start: 5, end: 7 },
  { start: 8, end: 9 },
  { start: 5, end: 9 }
];
console.log(activitySelection(activities));
// Выведет занятия без перекрытий, например:
// [ {start:1, end:4}, {start:5, end:7}, {start:8, end:9} ]`,
    m15: `function fractionalKnapsack(items, capacity) {
  // items: массив объектов {value, weight}
  // Сортируем по убыванию стоимости единицы веса
  items.sort((a, b) => (b.value / b.weight) - (a.value / a.weight));

  let totalValue = 0;
  const taken = [];

  for (const item of items) {
    if (capacity === 0) break;

    if (item.weight <= capacity) {
      // Берем весь предмет
      taken.push({ ...item, fraction: 1 });
      totalValue += item.value;
      capacity -= item.weight;
    } else {
      // Берем часть предмета
      const fraction = capacity / item.weight;
      taken.push({ ...item, fraction });
      totalValue += item.value * fraction;
      capacity = 0;
    }
  }

  return { totalValue, taken };
}

// Пример:
const items = [
  { value: 60, weight: 10 },
  { value: 100, weight: 20 },
  { value: 120, weight: 30 }
];
const capacity = 50;

const result = fractionalKnapsack(items, capacity);
console.log("Максимальная стоимость:", result.totalValue.toFixed(2));
console.log("Взятые предметы с долями:", result.taken);`,
    m16: `function merge(left, right) {
  const result = [];
  let i = 0, j = 0;

  while(i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Добавляем оставшиеся элементы
  return result.concat(left.slice(i)).concat(right.slice(j));
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

// Пример:
const array = [38, 27, 43, 3, 9, 82, 10];
console.log('Отсортированный массив:', mergeSort(array));`,
    m17: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;  // Элемент не найден
}

// Пример:
const sortedArray = [3, 9, 10, 27, 38, 43, 82];
const target = 27;
console.log('Индекс элемента {target}:', binarySearch(sortedArray, target));`,
    m18: `function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Пример:
const n = 10;
console.log('{n}-е число Фибоначчи:', fibonacci(n));`,
    m19: `function solveNQueens(n = 8) {
  const solutions = [];
  const board = Array(n).fill(-1); // board[col] = row, где стоит ферзь в столбце col

  function isSafe(col, row) {
    for (let c = 0; c < col; c++) {
      const r = board[c];
      if (
        r === row || // та же строка
        Math.abs(r - row) === Math.abs(c - col) // диагонали
      ) return false;
    }
    return true;
  }

  function backtrack(col = 0) {
    if (col === n) {
      solutions.push(board.slice());
      return;
    }

    for (let row = 0; row < n; row++) {
      if (isSafe(col, row)) {
        board[col] = row;
        backtrack(col + 1);
        board[col] = -1; // возврат
      }
    }
  }

  backtrack();
  return solutions;
}

// Пример вывода количества решений и первый вариант
const queensSolutions = solveNQueens();
console.log("Количество решений для 8 ферзей:", queensSolutions.length);
console.log("Пример одного решения (индексы строк по столбцам):", queensSolutions[0]);`,
    m20: `function findSubsets(nums) {
  const result = [];

  function backtrack(index = 0, subset = []) {
    if (index === nums.length) {
      result.push(subset.slice());
      return;
    }

    // Не включать текущий элемент
    backtrack(index + 1, subset);

    // Включить текущий элемент
    subset.push(nums[index]);
    backtrack(index + 1, subset);
    subset.pop(); // возврат
  }

  backtrack();
  return result;
}

// Пример:
const subsets = findSubsets([1, 2, 3]);
console.log("Все подмножества:", subsets);`,
    m21: `function solveSudoku(board) {
  const n = 9;

  function isValid(row, col, num) {
    for (let i = 0; i < n; i++) {
      if (board[row][i] === num) return false; // проверка строки
      if (board[i][col] === num) return false; // проверка столбца
    }

    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(col / 3) * 3;
    for (let r = boxRow; r < boxRow + 3; r++) {
      for (let c = boxCol; c < boxCol + 3; c++) {
        if (board[r][c] === num) return false; // проверка подблока 3x3
      }
    }

    return true;
  }

  function backtrack() {
    for (let row = 0; row < n; row++) {
      for (let col = 0; col < n; col++) {
        if (board[row][col] === 0) {
          for (let num = 1; num <= 9; num++) {
            if (isValid(row, col, num)) {
              board[row][col] = num;
              if (backtrack()) return true;
              board[row][col] = 0; // возврат
            }
          }
          return false; // если ни одна цифра не подходит
        }
      }
    }
    return true; // если доска полностью заполнена
  }

  return backtrack();
}

// Пример частично заполненного судоку, 0 — пустые клетки
const sudokuBoard = [
  [5,3,0,0,7,0,0,0,0],
  [6,0,0,1,9,5,0,0,0],
  [0,9,8,0,0,0,0,6,0],
  [8,0,0,0,6,0,0,0,3],
  [4,0,0,8,0,3,0,0,1],
  [7,0,0,0,2,0,0,0,6],
  [0,6,0,0,0,0,2,8,0],
  [0,0,0,4,1,9,0,0,5],
  [0,0,0,0,8,0,0,7,9]
];

if (solveSudoku(sudokuBoard)) {
  console.log("Решение судоку:");
  sudokuBoard.forEach(row => console.log(row));
} else {
  console.log("Решения нет.");
}`,
  }

  const handleShowSolution = (method) => {
    activeMethod(method)
    setOpen(true)
  }

  return (
    <>
      <Box
        sx={{
          width: '100%',
          color: 'white',
          '&::before': {
            content: '""',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundImage: 'url("/img/algo1.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -1,
          },
        }}
      >
        <Typography
          component='h4'
          variant='h5'
          sx={{
            mt: 5,
            textAlign: 'center',
            fontWeight: '600',
            fontSize: '1.75rem',
          }}
        >
          Добро пожаловать на страницу с практическими заданиями!
        </Typography>
        <Typography
          component='p'
          variant='p'
          sx={{ textAlign: 'center', mt: 2, mb: 50 }}
        >
          Здесь вы можете попрактиковаться, используя различные алгоритмы и
          повышать свои умения.
        </Typography>
        <Container
          maxWidth={false}
          sx={{
            bgcolor: '#242424',
            color: 'whitesmoke',
            mt: 10,
            height: '100%',
            padding: '8px 16px',
          }}
        >
          <Typography
            component='h3'
            variant='h3'
            sx={{
              border: '2px solid yellow',
              borderRadius: '8px',
              boxShadow: '0 0 8px black',
              width: '300px',
              margin: '0 auto',
              textAlign: 'center',
              mb: 5,
              userSelect: 'none',
            }}
          >
            Блок с заданиями
          </Typography>
          <Typography component='section' variant='section'>
            <Typography component='h6' variant='h6' sx={{ mt: 2, mb: 2 }}>
              Алгоритмы сортировки:
            </Typography>
            <Accordion sx={{ width: 500 }}>
              <AccordionSummary expandIcon={<BuildIcon />}>
                <Typography component='h6'>Задача 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Дан массив чисел. Реализуйте алгоритм пузырьковой сортировки,
                который поочерёдно сравнивает пары соседних элементов и меняет
                их местами, если они идут в неправильном порядке. Выведите
                отсортированный массив.
              </AccordionDetails>
              <AccordionActions>
                <Button
                  variant='contained'
                  className='accordion__button'
                  onClick={() => handleShowSolution('m1')}
                >
                  Показать ответ
                </Button>
                {text === 'm1' && (
                  <PracticeSolution
                    open={open}
                    onClose={() => setOpen(false)}
                    number={1}
                  >
                    {texts.m1}
                  </PracticeSolution>
                )}
              </AccordionActions>
            </Accordion>
            <Accordion sx={{ width: 500 }}>
              <AccordionSummary expandIcon={<BuildIcon />}>
                <Typography component='h6'>Задача 2</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Дан неотсортированный массив. Напишите программу, которая на
                каждом шаге находит минимальный элемент из неотсортированной
                части массива и меняет его с первым элементом этой части,
                постепенно сортируя весь массив. Выведите результат после полной
                сортировки.
              </AccordionDetails>
              <AccordionActions>
                <Button
                  variant='contained'
                  className='accordion__button'
                  onClick={() => handleShowSolution('m2')}
                >
                  Показать ответ
                </Button>
                {text === 'm2' && (
                  <PracticeSolution
                    open={open}
                    onClose={() => setOpen(false)}
                    number={2}
                  >
                    {texts.m2}
                  </PracticeSolution>
                )}
              </AccordionActions>
            </Accordion>
            <Accordion sx={{ width: 500 }}>
              <AccordionSummary expandIcon={<BuildIcon />}>
                <Typography component='h6'>Задача 3</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Дан массив чисел. Реализуйте алгоритм, который берёт элементы по
                одному и вставляет каждый на правильное место среди уже
                отсортированных элементов слева. В итоге получите
                отсортированный массив.
              </AccordionDetails>
              <AccordionActions>
                <Button
                  variant='contained'
                  className='accordion__button'
                  onClick={() => handleShowSolution('m3')}
                >
                  Показать ответ
                </Button>
                {text === 'm3' && (
                  <PracticeSolution
                    open={open}
                    onClose={() => setOpen(false)}
                    number={3}
                  >
                    {texts.m3}
                  </PracticeSolution>
                )}
              </AccordionActions>
            </Accordion>
          </Typography>
          <Typography component='section' variant='section'>
            <Typography component='h6' variant='h6' sx={{ mt: 2, mb: 2 }}>
              Алгоритмы поиска:
            </Typography>
            <Accordion sx={{ width: 500 }}>
              <AccordionSummary expandIcon={<BuildIcon />}>
                <Typography component='h6'>Задача 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Дан массив чисел и значение для поиска. Напишите программу,
                которая перебирает элементы массива по порядку и возвращает
                индекс первого вхождения заданного значения или -1, если элемент
                не найден.
              </AccordionDetails>
              <AccordionActions>
                <Button
                  variant='contained'
                  className='accordion__button'
                  onClick={() => handleShowSolution('m4')}
                >
                  Показать ответ
                </Button>
                {text === 'm4' && (
                  <PracticeSolution
                    open={open}
                    onClose={() => setOpen(false)}
                    number={1}
                  >
                    {texts.m4}
                  </PracticeSolution>
                )}
              </AccordionActions>
            </Accordion>
            <Accordion sx={{ width: 500 }}>
              <AccordionSummary expandIcon={<BuildIcon />}>
                <Typography component='h6'>Задача 2</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Дан массив чисел. Напишите программу, которая находит и
                возвращает максимальное число в массиве.
              </AccordionDetails>
              <AccordionActions>
                <Button
                  variant='contained'
                  className='accordion__button'
                  onClick={() => handleShowSolution('m5')}
                >
                  Показать ответ
                </Button>
                {text === 'm5' && (
                  <PracticeSolution
                    open={open}
                    onClose={() => setOpen(false)}
                    number={2}
                  >
                    {texts.m5}
                  </PracticeSolution>
                )}
              </AccordionActions>
            </Accordion>
            <Accordion sx={{ width: 500 }}>
              <AccordionSummary expandIcon={<BuildIcon />}>
                <Typography component='h6'>Задача 3</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Дан массив и число для поиска. Напишите программу, которая
                вернёт список всех индексов, на которых встречается это число.
                Если число не найдено, вернуть пустой список.
              </AccordionDetails>
              <AccordionActions>
                <Button
                  variant='contained'
                  className='accordion__button'
                  onClick={() => handleShowSolution('m6')}
                >
                  Показать ответ
                </Button>
                {text === 'm6' && (
                  <PracticeSolution
                    open={open}
                    onClose={() => setOpen(false)}
                    number={3}
                  >
                    {texts.m6}
                  </PracticeSolution>
                )}
              </AccordionActions>
            </Accordion>
          </Typography>
          <Typography component='section' variant='section'>
            <Typography component='h6' variant='h6' sx={{ mt: 2, mb: 2 }}>
              Алгоритмы работы с графами:
            </Typography>
            <Accordion sx={{ width: 500 }}>
              <AccordionSummary expandIcon={<BuildIcon />}>
                <Typography component='h6'>Задача 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Дан неориентированный граф и начальная вершина. Реализуйте
                алгоритм обхода в ширину (Breadth-First Search), который
                посещает все достижимые вершины, начиная с заданной, и выводит
                порядок обхода.
              </AccordionDetails>
              <AccordionActions>
                <Button
                  variant='contained'
                  className='accordion__button'
                  onClick={() => handleShowSolution('m7')}
                >
                  Показать ответ
                </Button>
                {text === 'm7' && (
                  <PracticeSolution
                    open={open}
                    onClose={() => setOpen(false)}
                    number={1}
                  >
                    {texts.m7}
                  </PracticeSolution>
                )}
              </AccordionActions>
            </Accordion>
            <Accordion sx={{ width: 500 }}>
              <AccordionSummary expandIcon={<BuildIcon />}>
                <Typography component='h6'>Задача 2</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Дан ориентированный или неориентированный граф и стартовая
                вершина. Напишите программу для обхода в глубину (Depth-First
                Search), которая рекурсивно или с помощью стека посещает вершины
                в глубину, выводя порядок обхода.
              </AccordionDetails>
              <AccordionActions>
                <Button
                  variant='contained'
                  className='accordion__button'
                  onClick={() => handleShowSolution('m8')}
                >
                  Показать ответ
                </Button>
                {text === 'm8' && (
                  <PracticeSolution
                    open={open}
                    onClose={() => setOpen(false)}
                    number={2}
                  >
                    {texts.m8}
                  </PracticeSolution>
                )}
              </AccordionActions>
            </Accordion>
            <Accordion sx={{ width: 500 }}>
              <AccordionSummary expandIcon={<BuildIcon />}>
                <Typography component='h6'>Задача 3</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Дан неориентированный граф и две вершины — источник и цель.
                Используя алгоритм BFS, найдите кратчайший путь между этими
                вершинами и выведите его (список вершин пути).
              </AccordionDetails>
              <AccordionActions>
                <Button
                  variant='contained'
                  className='accordion__button'
                  onClick={() => handleShowSolution('m9')}
                >
                  Показать ответ
                </Button>
                {text === 'm9' && (
                  <PracticeSolution
                    open={open}
                    onClose={() => setOpen(false)}
                    number={3}
                  >
                    {texts.m9}
                  </PracticeSolution>
                )}
              </AccordionActions>
            </Accordion>
          </Typography>
          <Typography component='section' variant='section'>
            <Typography component='h6' variant='h6' sx={{ mt: 2, mb: 2 }}>
              Динамическое программирование:
            </Typography>
            <Accordion sx={{ width: 500 }}>
              <AccordionSummary expandIcon={<BuildIcon />}>
                <Typography component='h6'>Задача 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Дано число N. Можно выполнять операции: прибавить 1, умножить на
                2, или умножить на 3. Задача — найти минимальное количество
                операций, чтобы из числа 1 получить N, и вывести сами операции.
              </AccordionDetails>
              <AccordionActions>
                <Button
                  variant='contained'
                  className='accordion__button'
                  onClick={() => handleShowSolution('m10')}
                >
                  Показать ответ
                </Button>
                {text === 'm10' && (
                  <PracticeSolution
                    open={open}
                    onClose={() => setOpen(false)}
                    number={1}
                  >
                    {texts.m10}
                  </PracticeSolution>
                )}
              </AccordionActions>
            </Accordion>
            <Accordion sx={{ width: 500 }}>
              <AccordionSummary expandIcon={<BuildIcon />}>
                <Typography component='h6'>Задача 2</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Дано поле размером n×m. Можно идти только вправо или вниз на
                одну клетку. Нужно посчитать число уникальных путей из левого
                верхнего в правый нижний угол.
              </AccordionDetails>
              <AccordionActions>
                <Button
                  variant='contained'
                  className='accordion__button'
                  onClick={() => handleShowSolution('m11')}
                >
                  Показать ответ
                </Button>
                {text === 'm11' && (
                  <PracticeSolution
                    open={open}
                    onClose={() => setOpen(false)}
                    number={2}
                  >
                    {texts.m11}
                  </PracticeSolution>
                )}
              </AccordionActions>
            </Accordion>
            <Accordion sx={{ width: 500 }}>
              <AccordionSummary expandIcon={<BuildIcon />}>
                <Typography component='h6'>Задача 3</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Для числа n найти количество бинарных последовательностей длины
                n, в которых нет двух единиц подряд.
              </AccordionDetails>
              <AccordionActions>
                <Button
                  variant='contained'
                  className='accordion__button'
                  onClick={() => handleShowSolution('m12')}
                >
                  Показать ответ
                </Button>
                {text === 'm12' && (
                  <PracticeSolution
                    open={open}
                    onClose={() => setOpen(false)}
                    number={3}
                  >
                    {texts.m12}
                  </PracticeSolution>
                )}
              </AccordionActions>
            </Accordion>
          </Typography>
          <Typography component='section' variant='section'>
            <Typography component='h6' variant='h6' sx={{ mt: 2, mb: 2 }}>
              Жадные алгоритмы:
            </Typography>
            <Accordion sx={{ width: 500 }}>
              <AccordionSummary expandIcon={<BuildIcon />}>
                <Typography component='h6'>Задача 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Дана сумма и набор монет с фиксированными номиналами (например,
                1, 5, 10, 25). Нужно выдать сумму минимальным количеством монет.
                Жадный алгоритм берёт сначала монету самого большого номинала,
                которая не превышает остаток суммы, затем продолжает с
                оставшимся числом.
              </AccordionDetails>
              <AccordionActions>
                <Button
                  variant='contained'
                  className='accordion__button'
                  onClick={() => handleShowSolution('m13')}
                >
                  Показать ответ
                </Button>
                {text === 'm13' && (
                  <PracticeSolution
                    open={open}
                    onClose={() => setOpen(false)}
                    number={1}
                  >
                    {texts.m13}
                  </PracticeSolution>
                )}
              </AccordionActions>
            </Accordion>
            <Accordion sx={{ width: 500 }}>
              <AccordionSummary expandIcon={<BuildIcon />}>
                <Typography component='h6'>Задача 2</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Даны заявки с началом и концом занятия. Нужно выбрать
                максимальное количество заявок, не пересекающихся во времени.
                Жадный алгоритм — сортировать заявки по времени окончания и
                последовательно брать совместимые.
              </AccordionDetails>
              <AccordionActions>
                <Button
                  variant='contained'
                  className='accordion__button'
                  onClick={() => handleShowSolution('m14')}
                >
                  Показать ответ
                </Button>
                {text === 'm14' && (
                  <PracticeSolution
                    open={open}
                    onClose={() => setOpen(false)}
                    number={2}
                  >
                    {texts.m14}
                  </PracticeSolution>
                )}
              </AccordionActions>
            </Accordion>
            <Accordion sx={{ width: 500 }}>
              <AccordionSummary expandIcon={<BuildIcon />}>
                <Typography component='h6'>Задача 3</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Даны предметы с весом и стоимостью. Нужно набрать в рюкзак с
                максимальной суммарной стоимостью при ограничении по весу, если
                предметы можно делить (например, взять половину). Жадный
                алгоритм — выбирать предметы по убыванию стоимости за единицу
                веса до заполнения рюкзака.
              </AccordionDetails>
              <AccordionActions>
                <Button
                  variant='contained'
                  className='accordion__button'
                  onClick={() => handleShowSolution('m15')}
                >
                  Показать ответ
                </Button>
                {text === 'm15' && (
                  <PracticeSolution
                    open={open}
                    onClose={() => setOpen(false)}
                    number={3}
                  >
                    {texts.m15}
                  </PracticeSolution>
                )}
              </AccordionActions>
            </Accordion>
          </Typography>
          <Typography component='section' variant='section'>
            <Typography component='h6' variant='h6' sx={{ mt: 2, mb: 2 }}>
              Разделяй и властвуй:
            </Typography>
            <Accordion sx={{ width: 500 }}>
              <AccordionSummary expandIcon={<BuildIcon />}>
                <Typography component='h6'>Задача 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Дан неотсортированный массив чисел. Реализуйте алгоритм
                сортировки слиянием, который: Разделяет массив на две половины,
                Рекурсивно сортирует каждую половину, Объединяет (сливает) две
                отсортированные половины в один отсортированный массив. Эта
                задача хорошо демонстрирует базовые шаги метода — разделение,
                решение и объединение
              </AccordionDetails>
              <AccordionActions>
                <Button
                  variant='contained'
                  className='accordion__button'
                  onClick={() => handleShowSolution('m16')}
                >
                  Показать ответ
                </Button>
                {text === 'm16' && (
                  <PracticeSolution
                    open={open}
                    onClose={() => setOpen(false)}
                    number={1}
                  >
                    {texts.m16}
                  </PracticeSolution>
                )}
              </AccordionActions>
            </Accordion>
            <Accordion sx={{ width: 500 }}>
              <AccordionSummary expandIcon={<BuildIcon />}>
                <Typography component='h6'>Задача 2</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Дан отсортированный массив и число для поиска. Реализуйте
                бинарный поиск: На каждом шаге сравнивайте искомое число с
                элементом посередине текущего диапазона, Сужайте область поиска
                на левую или правую половину, Останавливайтесь, когда элемент
                найден или область пуста. Это классический пример применения
                «разделяй и властвуй» в задаче поиска
              </AccordionDetails>
              <AccordionActions>
                <Button
                  variant='contained'
                  className='accordion__button'
                  onClick={() => handleShowSolution('m17')}
                >
                  Показать ответ
                </Button>
                {text === 'm17' && (
                  <PracticeSolution
                    open={open}
                    onClose={() => setOpen(false)}
                    number={2}
                  >
                    {texts.m17}
                  </PracticeSolution>
                )}
              </AccordionActions>
            </Accordion>
            <Accordion sx={{ width: 500 }}>
              <AccordionSummary expandIcon={<BuildIcon />}>
                <Typography component='h6'>Задача 3</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Напишите рекурсивную функцию для вычисления числа Фибоначчи
                числа n, которая: Делит задачу на вычисления двух чисел
                Фибоначчи с меньшими индексами (n-1 и n-2), Рекурсивно вычисляет
                их, Складывает результаты для получения F(n). Это простой
                пример, показывающий использование рекурсии с разделением задачи
                на подзадачи.
              </AccordionDetails>
              <AccordionActions>
                <Button
                  variant='contained'
                  className='accordion__button'
                  onClick={() => handleShowSolution('m18')}
                >
                  Показать ответ
                </Button>
                {text === 'm18' && (
                  <PracticeSolution
                    open={open}
                    onClose={() => setOpen(false)}
                    number={3}
                  >
                    {texts.m18}
                  </PracticeSolution>
                )}
              </AccordionActions>
            </Accordion>
          </Typography>
          <Typography component='section' variant='section'>
            <Typography component='h6' variant='h6' sx={{ mt: 2, mb: 2 }}>
              Отслеживание с возвратом:
            </Typography>
            <Accordion sx={{ width: 500 }}>
              <AccordionSummary expandIcon={<BuildIcon />}>
                <Typography component='h6'>Задача 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Нужно расставить 8 ферзей на шахматной доске 8×8 так, чтобы они
                не били друг друга. Решение строится путём последовательного
                размещения ферзей по строкам, при этом если на очередном шаге
                нельзя поставить ферзя без угрозы, возвратиться на предыдущий
                шаг и попробовать другую позицию.
              </AccordionDetails>
              <AccordionActions>
                <Button
                  variant='contained'
                  className='accordion__button'
                  onClick={() => handleShowSolution('m19')}
                >
                  Показать ответ
                </Button>
                {text === 'm19' && (
                  <PracticeSolution
                    open={open}
                    onClose={() => setOpen(false)}
                    number={1}
                  >
                    {texts.m19}
                  </PracticeSolution>
                )}
              </AccordionActions>
            </Accordion>
            <Accordion sx={{ width: 500 }}>
              <AccordionSummary expandIcon={<BuildIcon />}>
                <Typography component='h6'>Задача 2</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Дан набор элементов (например, числа). Требуется вывести все
                возможные подмножества (включая пустое). Реализация —
                рекурсивный перебор с выбором: включить текущий элемент или нет;
                при невозможности — возврат к предыдущему шагу для выбора другой
                ветви.
              </AccordionDetails>
              <AccordionActions>
                <Button
                  variant='contained'
                  className='accordion__button'
                  onClick={() => handleShowSolution('m20')}
                >
                  Показать ответ
                </Button>
                {text === 'm20' && (
                  <PracticeSolution
                    open={open}
                    onClose={() => setOpen(false)}
                    number={2}
                  >
                    {texts.m20}
                  </PracticeSolution>
                )}
              </AccordionActions>
            </Accordion>
            <Accordion sx={{ width: 500 }}>
              <AccordionSummary expandIcon={<BuildIcon />}>
                <Typography component='h6'>Задача 3</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Дана частично заполненная поле 9×9 судоку. Нужно заполнить
                пустые клетки так, чтобы в каждой строке, столбце и каждом блоке
                3×3 не было повторяющихся цифр от 1 до 9. Алгоритм: на каждой
                пустой клетке подобрать возможные цифры, если нет подходящей —
                возврат к предыдущей клетке с перебором других вариантов.
              </AccordionDetails>
              <AccordionActions>
                <Button
                  variant='contained'
                  className='accordion__button'
                  onClick={() => handleShowSolution('m21')}
                >
                  Показать ответ
                </Button>
                {text === 'm21' && (
                  <PracticeSolution
                    open={open}
                    onClose={() => setOpen(false)}
                    number={3}
                  >
                    {texts.m21}
                  </PracticeSolution>
                )}
              </AccordionActions>
            </Accordion>
          </Typography>
        </Container>
      </Box>
    </>
  )
}
