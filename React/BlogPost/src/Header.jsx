import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import BoyIcon from '@mui/icons-material/Boy'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useAuth } from './BlockPosts.jsx'
import Form from './Form'
import { useState } from 'react'
import Dialog from './Dialog'
export default function Header() {
  const location = useLocation()
  // const formSubmit = location?.state?.formSubmit
  const { loggedIn, logout } = useAuth()
  return (
    <>
      <Box component="section" sx={{ flexGrow: 1 }}>
        <AppBar color="default" position="sticky">
          <Toolbar>
            <BoyIcon fontSize="large" sx={{ padding: 2 }} />

            <Typography variant="h5" component="h3" sx={{ flexGrow: 1 }}>
              BEAUTY SHOW
            </Typography>
            {loggedIn && (
              <>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={logout}
                  sx={{ mr: 2 }}
                >
                  Выйти из аккаунта
                </Button>
                <Link to="/create">
                  <Button variant="contained" color="success">
                    Создать пост
                  </Button>
                </Link>
              </>
            )}

            {!loggedIn && (
              <NavLink to="/form">
                <Button variant="contained" color="primary">
                  Зарегистрироваться
                </Button>
              </NavLink>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}
