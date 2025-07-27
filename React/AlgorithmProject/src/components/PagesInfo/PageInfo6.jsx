import { Box, List, ListItem, Typography } from '@mui/material'

const pseudocode = {
  code: `// Функция сортировки слиянием
function mergeSort(array) {
  if (array.length <= 1) return array; // Базовый случай — массив из 1 элемента

  const mid = Math.floor(array.length / 2); // Находим середину массива
  const left = mergeSort(array.slice(0, mid));  // Рекурсивно сортируем левую часть
  const right = mergeSort(array.slice(mid));    // Рекурсивно сортируем правую часть

  return merge(left, right); // Сливаем две отсортированные части
}

// Функция слияния двух отсортированных массивов
function merge(left, right) {
  const result = [];
  let i = 0, j = 0;

  // Пока есть элементы в обоих массивах
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Добавляем оставшиеся элементы (если есть)
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Пример использования:
const arr = [38, 27, 43, 3, 9, 82, 10];
const sorted = mergeSort(arr);
console.log(sorted); // [3, 9, 10, 27, 38, 43, 82]`,
}

export default function PageInfo6() {
  return (
    <>
      <Box sx={{ ml: 2, fontSize: '1.3rem', width: '50vw', mt: 2 }}>
        <Typography
          variant='h2'
          component='h2'
          sx={{ mb: 3 }}
          className='pageinfo__heading'
        >
          Разделяй и властвуй
        </Typography>
        <Typography variant='p' component='p'>
          Это фундаментальный подход в программировании и алгоритмах, который
          заключается в Разделении, Решении, Объединении.
        </Typography>
        <List>
          {' '}
          Основные характеристики:
          <ListItem>
            Разделение (Divide): исходная задача разбивается на несколько более
            мелких подзадач того же типа, но меньшего размера.
          </ListItem>
          <ListItem>
            Решение (Conquer): каждая подзадача решается рекурсивно. Если
            подзадача достаточно мала, решается напрямую.
          </ListItem>
          <ListItem>
            Объединение (Combine): решения подзадач объединяются для получения
            решения исходной задачи.
          </ListItem>
        </List>

        <Typography variant='section' component='section'>
          <Typography variant='h5' component='h5' sx={{ mb: 2 }}>
            Ключевые особенности:
          </Typography>
          <Typography
            component='div'
            variant='div'
            sx={{ mb: 2 }}
            className='pageinfo__text'
          >
            Задачи разбиваются до тех пор, пока не станут элементарными и легко
            решаемыми.
          </Typography>

          <Typography
            component='div'
            variant='div'
            sx={{ mb: 2 }}
            className='pageinfo__text'
          >
            Рекурсивное решение подзадач без сохранения промежуточных
            результатов (в отличие от динамического программирования).
          </Typography>
          <Typography
            component='div'
            variant='div'
            sx={{ mb: 2 }}
            className='pageinfo__text'
          >
            Объединение результатов — важный этап, который зависит от конкретной
            задачи.
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
            Преимущества метода «Разделяй и властвуй»:
          </Typography>
          <Typography
            component='div'
            variant='div'
            sx={{ mb: 2 }}
            className='pageinfo__text'
          >
            Позволяет эффективно решать сложные задачи, разбивая их на простые.
          </Typography>
          <Typography
            component='div'
            variant='div'
            sx={{ mb: 2 }}
            className='pageinfo__text'
          >
            Хорошо подходит для распараллеливания на многоядерных системах.
          </Typography>
          <Typography
            component='div'
            variant='div'
            sx={{ mb: 2 }}
            className='pageinfo__text'
          >
            Эффективно использует кэш-память процессора.
          </Typography>
          <Typography
            component='div'
            variant='div'
            sx={{ mb: 2 }}
            className='pageinfo__text'
          >
            Применяется в алгоритмах сортировки (слияние, быстрая сортировка),
            бинарном поиске, умножении матриц (метод Штрассена) и других.
          </Typography>
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
            Сортировка слиянием и быстрая сортировка.
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
            Умножение матриц (метод Штрассена, Карацубы).
          </Typography>
          <Typography
            component='div'
            variant='div'
            sx={{ mb: 2 }}
            className='pageinfo__text'
          >
            Вычисление чисел Фибоначчи (рекурсивный подход).
          </Typography>
        </Typography>
      </Box>
    </>
  )
}
