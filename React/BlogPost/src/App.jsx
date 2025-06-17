import { Route, Routes } from 'react-router-dom'
import './App.css'

import Form from './Form'
import Layout from './Layout'
import BlockPosts from './BlockPosts'
import Dialog from './Dialog'
import CreateForm from './CreateForm'
import Typography from '@mui/material/Typography'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BlockPosts />} />
          <Route path="form" element={<Form />} />
          <Route path="create" element={<CreateForm />} />
          <Route
            path="*"
            element={
              <Typography
                variant="h3"
                sx={{ textAlign: 'center', mt: 24.25, mb: 35 }}
              >
                Страница не найдена!
              </Typography>
            }
          />
        </Route>
      </Routes>
    </>
  )
}

export default App
