import { Box, List, ListItem, Typography } from '@mui/material'

const pseudocode = {
  linear: `// Линейный поиск — перебираем элементы по порядку
function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i; // нашли — возвращаем индекс
  }
  return -1; // не нашли
}`,

  binary: `// Двоичный поиск — для отсортированного массива
function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (array[mid] === target) return mid; // нашли
    else if (array[mid] < target) left = mid + 1; // ищем справа
    else right = mid - 1; // ищем слева
  }
  return -1; // не нашли
}`,

  dfs: `// Поиск в глубину (DFS) — рекурсивный обход графа
function dfs(graph, node, visited = new Set()) {
  visited.add(node); // отметили посещение
  console.log(node); // обработали узел

  for (let neighbor of graph[node] || []) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited); // идём глубже
    }
  }
  return visited;
}`,

  bfs: `// Поиск в ширину (BFS) — обход графа с помощью очереди
function bfs(graph, start) {
  let visited = new Set([start]);
  let queue = [start];

  while (queue.length) {
    let node = queue.shift();
    console.log(node); // обработали узел

    for (let neighbor of graph[node] || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
  return visited;
}`,

  hash: `// Простая хеш-таблица на массиве с цепочками
class HashTable {
  constructor(size = 50) {
    this.buckets = Array(size).fill(null).map(() => []);
    this.size = size;
  }

  hash(key) {
    let sum = 0;
    for (let char of key) sum += char.charCodeAt(0);
    return sum % this.size;
  }

  set(key, value) {
    let index = this.hash(key);
    let bucket = this.buckets[index];
    for (let pair of bucket) {
      if (pair[0] === key) {
        pair[1] = value; // обновляем
        return;
      }
    }
    bucket.push([key, value]); // добавляем
  }

  get(key) {
    let index = this.hash(key);
    for (let pair of this.buckets[index]) {
      if (pair[0] === key) return pair[1];
    }
    return undefined;
  }

  remove(key) {
    let index = this.hash(key);
    this.buckets[index] = this.buckets[index].filter(pair => pair[0] !== key);
  }
}`,

  deikstra: `// Алгоритм Дейкстры — кратчайший путь в графе
function dijkstra(graph, start) {
  let distances = {};
  let visited = new Set();
  let queue = new PriorityQueue();

  for (let node in graph) distances[node] = Infinity;
  distances[start] = 0;
  queue.enqueue(start, 0);

  while (!queue.isEmpty()) {
    let { element: current } = queue.dequeue();
    if (visited.has(current)) continue;
    visited.add(current);

    for (let neighbor in graph[current]) {
      let dist = distances[current] + graph[current][neighbor];
      if (dist < distances[neighbor]) {
        distances[neighbor] = dist;
        queue.enqueue(neighbor, dist);
      }
    }
  }
  return distances;
}

// Простая приоритетная очередь
class PriorityQueue {
  constructor() {
    this.items = [];
  }
  enqueue(element, priority) {
    this.items.push({ element, priority });
    this.items.sort((a, b) => a.priority - b.priority);
  }
  dequeue() {
    return this.items.shift();
  }
  isEmpty() {
    return this.items.length === 0;
  }
}`,
}

export default function PageInfo2() {
  return (
    <>
      <Box sx={{ ml: 2, fontSize: '1.3rem', width: '50vw', mt: 2 }}>
        <Typography
          variant='h2'
          component='h2'
          sx={{ mb: 3 }}
          className='pageinfo__heading'
        >
          Алгоритмы поиска
        </Typography>
        <Typography variant='p' component='p'>
          Это методы нахождения нужного элемента или значения в наборе данных.
          Они используются для эффективного поиска информации в массивах,
          списках, графах и других структурах данных.
        </Typography>
        <List>
          <ListItem>1 - Линейный поиск</ListItem>
          <ListItem>2 - Двоичный поиск</ListItem>
          <ListItem>3 - Поиск в глубину (DFS)</ListItem>
          <ListItem>4 - Поиск в ширину (BFS)</ListItem>
          <ListItem>5 - Хеш-таблицы</ListItem>
          <ListItem>6 - Алгоритм Дейкстры</ListItem>
        </List>
        <Typography variant='section' component='section'>
          <Typography
            component='div'
            variant='div'
            sx={{ mb: 2 }}
            className='pageinfo__text'
          >
            1. Последовательно проверяет каждый элемент массива до нахождения
            искомого значения. Работает с неотсортированными данными, прост в
            реализации, но медленный при больших объёмах. Временная сложность
            O(n)
          </Typography>
          <Typography variant='div' component='div' className='code__block'>
            <Typography
              component='h5'
              variant='h5'
              sx={{ fontFamily: 'sans-serif', ml: 5, mb: 2, color: 'white' }}
            >
              Пример кода{' '}
            </Typography>
            <pre>{pseudocode.linear}</pre>
          </Typography>
          <Typography
            component='div'
            variant='div'
            sx={{ mb: 2 }}
            className='pageinfo__text'
          >
            2. Делит отсортированный массив пополам, сравнивает средний элемент
            с искомым и сужает область поиска. Требует предварительной
            сортировки, очень эффективен для больших отсортированных массивов.
            Временная сложность: O(logn)
          </Typography>
          <Typography variant='div' component='div' className='code__block'>
            <Typography
              component='h5'
              variant='h5'
              sx={{ fontFamily: 'sans-serif', ml: 5, mb: 2, color: 'white' }}
            >
              Пример кода{' '}
            </Typography>
            <pre>{pseudocode.binary}</pre>
          </Typography>
          <Typography
            component='div'
            variant='div'
            sx={{ mb: 2 }}
            className='pageinfo__text'
          >
            3. Обход графа или дерева, исследует ветви максимально глубоко перед
            возвратом назад. Используется для поиска путей и обхода в графах и
            деревьях. Временная сложность: O(V+E) (при использовании списков
            смежности), до O(V<sup>2</sup>) при матрице смежности
          </Typography>
          <Typography variant='div' component='div' className='code__block'>
            <Typography
              component='h5'
              variant='h5'
              sx={{ fontFamily: 'sans-serif', ml: 5, mb: 2, color: 'white' }}
            >
              Пример кода{' '}
            </Typography>
            <pre>{pseudocode.dfs}</pre>
          </Typography>
          <Typography
            component='div'
            variant='div'
            sx={{ mb: 2 }}
            className='pageinfo__text'
          >
            4. Обход графа или дерева по уровням, сначала исследует все соседние
            узлы. Эффективен для поиска кратчайшего пути в невзвешенных графах.
            Временная сложность: O(V+E), где V V — вершины, E E — рёбра
          </Typography>
          <Typography variant='div' component='div' className='code__block'>
            <Typography
              component='h5'
              variant='h5'
              sx={{ fontFamily: 'sans-serif', ml: 5, mb: 2, color: 'white' }}
            >
              Пример кода{' '}
            </Typography>
            <pre>{pseudocode.bfs}</pre>
          </Typography>
          <Typography
            component='div'
            variant='div'
            sx={{ mb: 2 }}
            className='pageinfo__text'
          >
            5. Используют хеш-функции для быстрого доступа к элементам по ключу.
            Позволяют находить элементы за амортизированное время, широко
            применяются в базах данных и кэшах. Временная сложность: O(1)
          </Typography>
          <Typography variant='div' component='div' className='code__block'>
            <Typography
              component='h5'
              variant='h5'
              sx={{ fontFamily: 'sans-serif', ml: 5, mb: 2, color: 'white' }}
            >
              Пример кода{' '}
            </Typography>
            <pre>{pseudocode.hash}</pre>
          </Typography>
          <Typography
            component='div'
            variant='div'
            sx={{ mb: 2 }}
            className='pageinfo__text'
          >
            6. Находит кратчайший путь между узлами в графе с неотрицательными
            весами рёбер. Используется в навигации, сетевых протоколах, для
            оптимизации маршрутов. Временная сложность: O((V+E)logV)
          </Typography>
          <Typography variant='div' component='div' className='code__block'>
            <Typography
              component='h5'
              variant='h5'
              sx={{ fontFamily: 'sans-serif', ml: 5, mb: 2, color: 'white' }}
            >
              Пример кода{' '}
            </Typography>
            <pre>{pseudocode.deikstra}</pre>
          </Typography>
        </Typography>
      </Box>
    </>
  )
}
