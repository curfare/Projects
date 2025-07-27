import { Box, List, ListItem, Typography } from '@mui/material'

const pseudocode = {
  code: `// Пример простого алгоритма поиска с возвратом (backtracking)
// Задача: найти все подмножества массива, сумма элементов которых равна заданному числу

function findSubsets(arr, targetSum) {
  const results = [];

  function backtrack(start, currentSubset, currentSum) {
    // Если сумма равна целевой — сохраняем копию текущего подмножества
    if (currentSum === targetSum) {
      results.push([...currentSubset]);
      return;
    }
    // Если сумма превысила цель — прекращаем текущий путь
    if (currentSum > targetSum) return;

    // Перебираем элементы, начиная с позиции start
    for (let i = start; i < arr.length; i++) {
      currentSubset.push(arr[i]);            // Выбираем элемент
      backtrack(i + 1, currentSubset, currentSum + arr[i]); // Рекурсивно идём дальше
      currentSubset.pop();                   // Откат (возврат) — убираем элемент и пробуем следующий
    }
  }

  backtrack(0, [], 0);
  return results;
}

// Пример использования:
const numbers = [2, 3, 5, 7];
const target = 10;
const subsets = findSubsets(numbers, target);
console.log(subsets);
// Вывод: [ [3, 7], [2, 3, 5] ]`,
}

export default function PageInfo7() {
  return (
    <>
      <Box sx={{ ml: 2, fontSize: '1.3rem', width: '50vw', mt: 2 }}>
        <Typography
          variant='h2'
          component='h2'
          sx={{ mb: 3 }}
          className='pageinfo__heading'
        >
          Отслеживание с возвратом
        </Typography>
        <Typography variant='p' component='p'>
          Это метод решения задач, основанный на полном переборе всех возможных
          вариантов с последовательным расширением частичного решения и
          возвратом назад при обнаружении невозможности продолжения по текущему
          пути.
        </Typography>
        <List>
          {' '}
          Как работает поиск с возвратом:
          <ListItem>
            Начинается с выбора начального частичного решения.
          </ListItem>
          <ListItem>
            На каждом шаге алгоритм пытается расширить текущее частичное
            решение.
          </ListItem>
          <ListItem>
            Если расширение невозможно (нарушаются условия задачи), алгоритм
            возвращается назад (откатывается) к предыдущему шагу и пробует
            другой вариант.
          </ListItem>
          <ListItem>
            Процесс повторяется, пока не будут найдены все решения или не будет
            доказано, что решений нет.
          </ListItem>
        </List>
        <Typography variant='section' component='section'>
          <Typography variant='h5' component='h5' sx={{ mb: 2 }}>
            Ключевые моменты:
          </Typography>
          <Typography
            component='div'
            variant='div'
            sx={{ mb: 2 }}
            className='pageinfo__text'
          >
            Используется рекурсия для перебора вариантов.
          </Typography>
          <Typography
            component='div'
            variant='div'
            sx={{ mb: 2 }}
            className='pageinfo__text'
          >
            Позволяет решать задачи с большим количеством вариантов, где нужно
            найти все или оптимальные решения.
          </Typography>
          <Typography
            component='div'
            variant='div'
            sx={{ mb: 2 }}
            className='pageinfo__text'
          >
            Для ускорения часто применяют отсев заведомо неподходящих вариантов
            (принцип отсечения).
          </Typography>
          <Typography
            component='div'
            variant='div'
            sx={{ mb: 2 }}
            className='pageinfo__text'
          >
            Пример классической задачи — задача о восьми ферзях: расстановка
            восьми ферзей на шахматной доске так, чтобы они не били друг друга.
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
            Где применяется:
          </Typography>
          <Typography
            component='div'
            variant='div'
            sx={{ mb: 2 }}
            className='pageinfo__text'
          >
            Решение комбинаторных задач (перестановки, сочетания, подмножества).
          </Typography>
          <Typography
            component='div'
            variant='div'
            sx={{ mb: 2 }}
            className='pageinfo__text'
          >
            Бинарный поиск.
          </Typography>
          <Typography
            component='div'
            variant='div'
            sx={{ mb: 2 }}
            className='pageinfo__text'
          >
            Задачи на поиск путей в лабиринтах и графах.
          </Typography>
          <Typography
            component='div'
            variant='div'
            sx={{ mb: 2 }}
            className='pageinfo__text'
          >
            Синтаксический анализ и парсинг.
          </Typography>
          <Typography
            component='div'
            variant='div'
            sx={{ mb: 2 }}
            className='pageinfo__text'
          >
            Логические головоломки и пазлы.
          </Typography>
        </Typography>
      </Box>
    </>
  )
}
