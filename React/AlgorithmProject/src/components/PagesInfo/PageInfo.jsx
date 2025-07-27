import { Box, List, ListItem, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import './pageinfo.css'
export default function PageInfo() {
  return (
    <>
      <Box sx={{ ml: 2, fontSize: '1.3rem', width: '50vw', mt: 2 }}>
        <Typography
          variant='h2'
          component='h2'
          sx={{ mb: 3 }}
          className='pageinfo__heading'
        >
          Начнем с основ!
        </Typography>
        <Typography variant='p'>
          Алгоритм в программировании — это чётко определённая, последовательная
          и конечная последовательность инструкций или шагов, которые необходимо
          выполнить для решения конкретной задачи или достижения определённой
          цели
        </Typography>
        <List>
          Пример простого алгоритма (сложение двух чисел):
          <ListItem>Запросить у пользователя первое число.</ListItem>
          <ListItem>Запросить у пользователя второе число.</ListItem>
          <ListItem>Сложить два числа.</ListItem>
          <ListItem>Вывести результат.</ListItem>
        </List>
        <List>
          Основные алгоритмы, которые должен знать каждый программист, можно
          разделить на несколько ключевых категорий:
          <ListItem>1. Алгоритмы сортировки</ListItem>
          <ListItem>2. Алгоритмы поиска</ListItem>
          <ListItem>3. Алгоритмы работы с графами</ListItem>
          <ListItem>4. Динамическое программирование</ListItem>
          <ListItem>5. Жадные алгоритмы</ListItem>
          <ListItem>6. Разделяй и властвуй</ListItem>
          <ListItem>7. Отслеживание с возвратом</ListItem>
        </List>
      </Box>
      <Box sx={{ ml: 2, fontSize: '1.3rem' }}>
        <List>
          <Typography component='h4' variant='h4' sx={{ mb: 2 }}>
            Перейти к основным блокам:
          </Typography>
          <ListItem>
            <Link
              className='link'
              to='/pageInfo/page1'
              style={{ textDecorationLine: 'none' }}
            >
              Алгоритмы сортировки{' '}
            </Link>
          </ListItem>
          <ListItem>
            <Link
              className='link'
              to='/pageInfo/page2'
              style={{ textDecorationLine: 'none' }}
            >
              Алгоритмы поиска
            </Link>
          </ListItem>
          <ListItem>
            <Link
              className='link'
              to='/pageInfo/page3'
              style={{ textDecorationLine: 'none' }}
            >
              Алгоритмы работы с графами
            </Link>
          </ListItem>
          <ListItem>
            <Link
              className='link'
              to='/pageInfo/page3'
              style={{ textDecorationLine: 'none' }}
            >
              Динамическое программирование
            </Link>
          </ListItem>
          <ListItem>
            <Link
              className='link'
              to='/pageInfo/page3'
              style={{ textDecorationLine: 'none' }}
            >
              Жадные алгоритмы
            </Link>
          </ListItem>
          <ListItem>
            <Link
              className='link'
              to='/pageInfo/page3'
              style={{ textDecorationLine: 'none' }}
            >
              Разделяй и властвуй
            </Link>
          </ListItem>
          <ListItem>
            <Link
              className='link'
              to='/pageInfo/page3'
              style={{ textDecorationLine: 'none' }}
            >
              Отслеживание с возвратом
            </Link>
          </ListItem>
        </List>
      </Box>
    </>
  )
}
