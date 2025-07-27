import { Box, List, ListItem, Typography } from '@mui/material'

const pseudocode = {
  code: `// Функция для вычисления минимального количества монет для суммы amount
// coins — массив доступных номиналов монет, отсортированных по убыванию
function coinChangeGreedy(coins, amount) {
  let count = 0;         // Общее количество монет
  let remaining = amount; // Остаток суммы, которую нужно разменять

  for (let coin of coins) {
    while (remaining >= coin) {
      remaining -= coin; // Используем монету
      count++;           // Увеличиваем счётчик
    }
  }

  if (remaining !== 0) {
    return -1; // Невозможно разменять сумму заданными монетами
  }
  return count; // Минимальное количество монет
}

// Пример использования:
const coins = [25, 10, 5, 1]; // Номиналы монет (центов)
const amount = 63;             // Сумма в центах

console.log(coinChangeGreedy(coins, amount)); // Выведет: 6 (25+25+10+1+1+1)`,
}

export default function PageInfo5() {
  return (
    <>
      <Box sx={{ ml: 2, fontSize: '1.3rem', width: '50vw', mt: 2 }}>
        <Typography
          variant='h2'
          component='h2'
          sx={{ mb: 3 }}
          className='pageinfo__heading'
        >
          Жадные алгоритмы
        </Typography>
        <Typography variant='p' component='p'>
          Это класс алгоритмов, которые на каждом шаге делают локально
          оптимальный выбор, надеясь, что в итоге получится глобально
          оптимальное решение.
        </Typography>
        <List>
          {' '}
          Основные характеристики жадных алгоритмов:
          <ListItem>
            Локальная оптимальность: на каждом шаге выбирается лучший вариант,
            доступный в текущий момент.
          </ListItem>
          <ListItem>
            Необратимость: сделанный выбор не пересматривается.
          </ListItem>
          <ListItem>
            Постепенное построение решения: решение строится шаг за шагом,
            добавляя новые элементы.
          </ListItem>
        </List>
        <Typography variant='section' component='section'>
          <Typography variant='h5' component='h5' sx={{ mb: 2 }}>
            Пример применения:
          </Typography>
          <Typography
            component='div'
            variant='div'
            sx={{ mb: 2 }}
            className='pageinfo__text'
          >
            Алгоритм Дейкстры для поиска кратчайшего пути в графе — жадный
            алгоритм, который на каждом шаге выбирает вершину с минимальным
            весом, ещё не посещённую, и обновляет расстояния до соседей.
          </Typography>
          <Typography
            component='div'
            variant='div'
            sx={{ mb: 2 }}
            className='pageinfo__text'
          >
            Задача о размене монет в американской системе — жадный алгоритм
            всегда выбирает монету наибольшего номинала, что приводит к
            оптимальному решению.
          </Typography>
        </Typography>
        <Typography variant='div' component='div' className='code__block'>
          <Typography
            component='h5'
            variant='h5'
            sx={{ fontFamily: 'sans-serif', ml: 5, mb: 2, color: 'white' }}
          >
            Пример кода{' '}
          </Typography>
          <pre>{pseudocode.code}</pre>
        </Typography>

        <Typography variant='section' component='section'>
          <Typography variant='h5' component='h5'>
            Ограничения:
          </Typography>
          <Typography
            component='div'
            variant='div'
            sx={{ mb: 2 }}
            className='pageinfo__text'
          >
            Жадные алгоритмы не всегда дают оптимальное решение. Например, в
            классической задаче 0-1 рюкзака или в некоторых вариантах задачи о
            размене монет с произвольными номиналами жадный выбор может привести
            к неоптимальному результату.
          </Typography>
          <Typography
            component='div'
            variant='div'
            sx={{ mb: 2 }}
            className='pageinfo__text'
          >
            Пример: если выбирать предметы только по удельной стоимости, можно
            упустить более выгодные комбинации.
          </Typography>
        </Typography>
        <Typography variant='section' component='section'>
          <Typography variant='h5' component='h5'>
            Временная сложность:
          </Typography>
          <Typography
            component='div'
            variant='div'
            sx={{ mb: 2 }}
            className='pageinfo__text'
          >
            Обычно жадные алгоритмы имеют временную сложность от O(n) до O(n
            <sup>2</sup>), в зависимости от задачи и способа реализации.
          </Typography>
        </Typography>
      </Box>
    </>
  )
}
