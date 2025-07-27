import { Box, List, ListItem, Typography } from '@mui/material'

const pseudocode = {
  code: `// Функция для вычисления n-го числа Фибоначчи с мемоизацией
function fibonacci(n, memo = {}) {
  if (n <= 1) return n; // базовые случаи: fib(0)=0, fib(1)=1

  if (memo[n]) return memo[n]; // если уже вычислено, возвращаем из кэша

  // рекурсивно вычисляем и сохраняем результат
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

// Пример использования:
console.log(fibonacci(10)); // 55
console.log(fibonacci(20)); // 6765`,
}

export default function PageInfo4() {
  return (
    <>
      <Box sx={{ ml: 2, fontSize: '1.3rem', width: '50vw', mt: 2 }}>
        <Typography
          variant='h2'
          component='h2'
          sx={{ mb: 3 }}
          className='pageinfo__heading'
        >
          Динамическое программирование
        </Typography>
        <Typography variant='p' component='p'>
          Это метод решения сложных задач путём разбиения их на более простые,
          часто повторяющиеся подзадачи, и сохранения результатов этих подзадач
          для повторного использования. Это позволяет значительно сократить
          время вычислений по сравнению с наивными рекурсивными методами.
        </Typography>
        <List>
          {' '}
          Основные идеи динамического программирования:
          <ListItem>
            Оптимальная подструктура: задача может быть разбита на подзадачи,
            решения которых можно комбинировать для получения решения исходной
            задачи.
          </ListItem>
          <ListItem>
            Перекрывающиеся подзадачи: многие подзадачи повторяются, и их
            решения можно сохранить (мемоизация), чтобы не вычислять повторно.
          </ListItem>
          <ListItem>
            Подход сверху вниз (мемоизация): рекурсивное решение с запоминанием
            результатов.
          </ListItem>
          <ListItem>
            Подход снизу вверх: последовательное вычисление решений подзадач,
            начиная с самых простых.
          </ListItem>
        </List>
        <Typography variant='section' component='section'>
          <Typography variant='h5' component='h5' sx={{ mb: 2 }}>
            Пример задачи и алгоритма:
          </Typography>
          <Typography
            component='div'
            variant='div'
            sx={{ mb: 2 }}
            className='pageinfo__text'
          >
            Задача о рюкзаке: выбрать предметы с максимальной суммарной
            стоимостью при ограничении по весу. Решается с помощью таблицы dp,
            где dp[i][w] — максимальная стоимость при рассмотрении первых i
            предметов и вместимости w
          </Typography>
          <Typography
            component='div'
            variant='div'
            sx={{ mb: 2 }}
            className='pageinfo__text'
          >
            Числа Фибоначчи: рекурсивное вычисление с мемоизацией или
            итеративное заполнение массива для избежания экспоненциального роста
            вычислений.
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
        </Typography>
        <Typography variant='section' component='section'>
          <Typography variant='h5' component='h5' sx={{ mb: 2 }}>
            Преимущества динамического программирования:
          </Typography>
          <Typography
            component='div'
            variant='div'
            sx={{ mb: 2 }}
            className='pageinfo__text'
          >
            Скорость: сокращает время решения задач с экспоненциальной
            сложностью до полиномиальной.
          </Typography>
          <Typography
            component='div'
            variant='div'
            sx={{ mb: 2 }}
            className='pageinfo__text'
          >
            Точность: гарантирует нахождение оптимального решения.
          </Typography>
          <Typography
            component='div'
            variant='div'
            sx={{ mb: 2 }}
            className='pageinfo__text'
          >
            Универсальность: подходит для широкого класса задач оптимизации и
            комбинаторики
          </Typography>
        </Typography>
        <Typography variant='section' component='section'>
          <Typography variant='h5' component='h5' sx={{ mb: 2 }}>
            Области применения:
          </Typography>
          <Typography
            component='div'
            variant='div'
            sx={{ mb: 2 }}
            className='pageinfo__text'
          >
            Оптимизация маршрутов (задача коммивояжера, маршруты в навигации).
          </Typography>
          <Typography
            component='div'
            variant='div'
            sx={{ mb: 2 }}
            className='pageinfo__text'
          >
            Поиск наибольшей общей последовательности
          </Typography>
          <Typography
            component='div'
            variant='div'
            sx={{ mb: 2 }}
            className='pageinfo__text'
          >
            Сжатие изображений.
          </Typography>
        </Typography>
      </Box>
    </>
  )
}
