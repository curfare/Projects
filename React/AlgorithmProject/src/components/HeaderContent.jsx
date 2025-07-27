import { Box, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

export default function HeaderContent() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          width: '20vw',
          margin: '0 auto',
          height: '80vh',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          '&::before': {
            content: '""',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundImage: 'url("/img/backgroundHeader.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -1,
          },
        }}
      >
        <Typography component='h6' variant='h6' sx={{ mb: 2, color: 'white' }}>
          Добро пожаловать на CodeAlgosphere! Здесь ты можешь изучить основные
          алгоритмы, а также порешать практические задачи на закрепление
          материала!
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <Link to='/pageInfo'>
            <Button variant='outlined' sx={{ mr: 5 }}>
              Узнать больше об алгоритмах
            </Button>
          </Link>
          <Link to='/pagePractice'>
            <Button variant='outlined' color='warning'>
              Порешать практические задания
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  )
}
