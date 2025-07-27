import { Box, List, ListItem, Typography } from '@mui/material'

const pseudocode = {
  bellmanFord: `// Алгоритм Беллмана-Форда — ищем кратчайший путь, даже если есть отрицательные веса
function bellmanFord(graph, start) {
  const distances = {};
  // Ставим расстояния до всех вершин бесконечными
  for (let vertex in graph) {
    distances[vertex] = Infinity;
  }
  distances[start] = 0; // Расстояние до стартовой вершины — 0

  // Повторяем обновление расстояний (число вершин - 1) раз
  for (let i = 0; i < Object.keys(graph).length - 1; i++) {
    for (let u in graph) {
      for (let v in graph[u]) {
        let newDist = distances[u] + graph[u][v];
        if (newDist < distances[v]) {
          distances[v] = newDist; // Обновляем расстояние
        }
      }
    }
  }
  return distances; // Возвращаем кратчайшие расстояния
}`,

  floydWarshall: `// Алгоритм Флойда-Уоршалла — ищем кратчайшие пути между всеми парами вершин
function floydWarshall(graph) {
  const dist = {};
  const vertices = Object.keys(graph);

  // Инициализируем расстояния
  for (let i of vertices) {
    dist[i] = {};
    for (let j of vertices) {
      if (i === j) dist[i][j] = 0;
      else if (graph[i][j] !== undefined) dist[i][j] = graph[i][j];
      else dist[i][j] = Infinity;
    }
  }

  // Обновляем расстояния через каждую вершину k
  for (let k of vertices) {
    for (let i of vertices) {
      for (let j of vertices) {
        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }
  return dist; // Возвращаем матрицу кратчайших путей
}`,

  dfs: `// Поиск в глубину (DFS) — обходим граф, идём как можно глубже
function dfs(graph, node, visited = new Set()) {
  visited.add(node); // Отмечаем узел как посещённый
  console.log(node); // Выводим узел

  for (let neighbor of graph[node] || []) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited); // Рекурсивно идём дальше
    }
  }
  return visited; // Возвращаем посещённые узлы
}`,

  bfs: `// Поиск в ширину (BFS) — обходим граф слоями, используя очередь
function bfs(graph, start) {
  let visited = new Set([start]);
  let queue = [start];

  while (queue.length > 0) {
    let node = queue.shift(); // Берём первый элемент из очереди
    console.log(node); // Выводим узел

    for (let neighbor of graph[node] || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor); // Отмечаем как посещённый
        queue.push(neighbor);  // Добавляем в очередь
      }
    }
  }
  return visited; // Возвращаем посещённые узлы
}`,

  prim: `// Алгоритм Прима — строим минимальное остовное дерево
function prim(graph) {
  const vertices = Object.keys(graph);
  const selected = new Set();
  const edges = [];
  selected.add(vertices[0]); // Начинаем с первой вершины

  while (selected.size < vertices.length) {
    let minEdge = null;
    let minWeight = Infinity;

    for (let u of selected) {
      for (let v in graph[u]) {
        if (!selected.has(v) && graph[u][v] < minWeight) {
          minWeight = graph[u][v];
          minEdge = [u, v];
        }
      }
    }

    if (minEdge) {
      selected.add(minEdge[1]);
      edges.push(minEdge);
    } else {
      break; // Нет доступных рёбер, граф может быть несвязным
    }
  }
  return edges; // Возвращаем список рёбер остовного дерева
}`,

  dijkstra: `// Алгоритм Дейкстры — ищем кратчайший путь, если веса неотрицательные
function dijkstra(graph, start) {
  const distances = {};
  const visited = new Set();
  const queue = [];

  for (let vertex in graph) distances[vertex] = Infinity;
  distances[start] = 0;
  queue.push([start, 0]);

  while (queue.length > 0) {
    // Находим вершину с минимальным расстоянием
    queue.sort((a, b) => a[1] - b[1]);
    const [current, dist] = queue.shift();

    if (visited.has(current)) continue;
    visited.add(current);

    for (let neighbor in graph[current]) {
      let newDist = dist + graph[current][neighbor];
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        queue.push([neighbor, newDist]);
      }
    }
  }
  return distances; // Возвращаем кратчайшие расстояния
}`,
}

export default function PageInfo3() {
  return (
    <>
      <Box sx={{ ml: 2, fontSize: '1.3rem', width: '50vw', mt: 2 }}>
        <Typography
          variant='h2'
          component='h2'
          sx={{ mb: 3 }}
          className='pageinfo__heading'
        >
          Алгоритмы работы с графами
        </Typography>
        <Typography variant='p' component='p'>
          Это методы нахождения нужного элемента или значения в наборе данных.
          Они используются для эффективного поиска информации в массивах,
          списках, графах и других структурах данных.
        </Typography>
        <List>
          <ListItem>1 - Алгоритм Беллмана-Форда</ListItem>
          <ListItem>2 - Алгоритм Флойда-Уоршалла</ListItem>
          <ListItem>3 - Поиск в глубину (DFS)</ListItem>
          <ListItem>4 - Поиск в ширину (BFS)</ListItem>
          <ListItem>5 - Алгоритм Прима</ListItem>
          <ListItem>6 - Алгоритм Дейкстры</ListItem>
        </List>
        <Typography variant='section' component='section'>
          <Typography
            component='div'
            variant='div'
            sx={{ mb: 2 }}
            className='pageinfo__text'
          >
            1. Находит кратчайшие пути от одной вершины во взвешенном графе,
            допускает отрицательные веса рёбер. Обработка графов с
            отрицательными весами, обнаружение отрицательных циклов. Временная
            сложность: O(V×E)
          </Typography>
          <Typography variant='div' component='div' className='code__block'>
            <Typography
              component='h5'
              variant='h5'
              sx={{ fontFamily: 'sans-serif', ml: 5, mb: 2, color: 'white' }}
            >
              Пример кода{' '}
            </Typography>
            <pre>{pseudocode.bellmanFord}</pre>
          </Typography>
          <Typography
            component='div'
            variant='div'
            sx={{ mb: 2 }}
            className='pageinfo__text'
          >
            2. Поиск кратчайших путей между всеми парами вершин во взвешенном
            графе. Анализ всех пар вершин, динамическое программирование.
            Временная сложность: O(V<sup>3</sup>)
          </Typography>
          <Typography variant='div' component='div' className='code__block'>
            <Typography
              component='h5'
              variant='h5'
              sx={{ fontFamily: 'sans-serif', ml: 5, mb: 2, color: 'white' }}
            >
              Пример кода{' '}
            </Typography>
            <pre>{pseudocode.floydWarshall}</pre>
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
            5. Жадный алгоритм для поиска минимального остовного дерева графа.
            Построение минимального остовного дерева, оптимизация сетей.
            Временная сложность: O((V+E)logV) при использовании куч и списков
            смежности
          </Typography>
          <Typography variant='div' component='div' className='code__block'>
            <Typography
              component='h5'
              variant='h5'
              sx={{ fontFamily: 'sans-serif', ml: 5, mb: 2, color: 'white' }}
            >
              Пример кода{' '}
            </Typography>
            <pre>{pseudocode.prim}</pre>
          </Typography>
          <Typography
            component='div'
            variant='div'
            sx={{ mb: 2 }}
            className='pageinfo__text'
          >
            6. Находит кратчайший путь между узлами в графе с неотрицательными
            весами рёбер. Используется в навигации, сетевых протоколах, для
            оптимизации маршрутов. Временная сложность: O((V+E)logV) при
            использовании приоритетной очереди и списков смежности
          </Typography>
          <Typography variant='div' component='div' className='code__block'>
            <Typography
              component='h5'
              variant='h5'
              sx={{ fontFamily: 'sans-serif', ml: 5, mb: 2, color: 'white' }}
            >
              Пример кода{' '}
            </Typography>
            <pre>{pseudocode.dijkstra}</pre>
          </Typography>
        </Typography>
      </Box>
    </>
  )
}
