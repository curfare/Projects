import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import Stack from '@mui/material/Stack'


export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        textAlign: 'center',
        height: '20vh',
        mt: 10,

        bgcolor: '#242424',
      }}
    >
      <Stack
        direction="row"
        spacing={0}
        color="gray"
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '20vh',
        }}
      >
        <Button variant="text" color="inherit">
          Контакты
        </Button>
        <Button variant="text" color="inherit">
          О нас
        </Button>
        <Button variant="text" color="inherit">
          Поддержать
        </Button>
      </Stack>
    </Box>
  )
}
