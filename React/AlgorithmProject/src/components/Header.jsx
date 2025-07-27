import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import BookIcon from '@mui/icons-material/Book'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import DialogWindow from './DialogWindow/DialogWindow'
import DialogWindow2 from './DialogWindow/DialogWindow2'
export default function Header() {
  const [open, isOpen] = useState(false)
  const [openSecond, isOpenSecond] = useState(false)
  return (
    <>
      <AppBar
        position='static'
        sx={{
          bgcolor: '#242424',
          padding: 1,

          '&:hover': { bgcolor: 'white', color: '#242424' },
          '&:hover svg': {
            transition: 'color 0.5s linear',
            color: '#242424',
          },

          transition: 'background-color 0.5s linear, color 0.5s linear',
        }}
      >
        <Toolbar>
          <Link to='/'>
            <IconButton size='large' edge='start' sx={{ mr: 2 }}>
              <BookIcon sx={{ color: 'white' }} />
            </IconButton>
          </Link>
          <Typography component='h5' variant='h5' sx={{ flexGrow: 1 }}>
            CodeAlgosphere
          </Typography>
          <Button
            variant='outlined'
            sx={{ mr: 1 }}
            color='secondary'
            onClick={() => isOpen(true)}
          >
            Описание сайта
          </Button>
          <Button variant='outlined' onClick={() => isOpenSecond(true)}>
            Что дальше?
          </Button>
        </Toolbar>
      </AppBar>
      {open && <DialogWindow open={open} onClose={() => isOpen(false)} />}
      {openSecond && (
        <DialogWindow2 open={openSecond} onClose={() => isOpenSecond(false)} />
      )}
    </>
  )
}
