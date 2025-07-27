import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'

import Layout from './components/Layout'
import HeaderContent from './components/HeaderContent'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import PageInfo from './components/PagesInfo/PageInfo'
import PageInfoOutlet from './components/PageInfoOutlet'
import PageInfo1 from './components/PagesInfo/PageInfo1'
import PageInfo2 from './components/PagesInfo/PageInfo2'
import PageInfo3 from './components/PagesInfo/PageInfo3'
import PageInfo4 from './components/PagesInfo/PageInfo4'
import PageInfo5 from './components/PagesInfo/PageInfo5'
import PageInfo6 from './components/PagesInfo/PageInfo6'
import PageInfo7 from './components/PagesInfo/PageInfo7'
import { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material'
import PracticeMain from './components/PracticeProblems/PracticeMain'
const theme = createTheme({
  typography: {
    fontFamily: '"Nunito", Arial, sans-serif',
  },
})

function App() {
  const location = useLocation()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    document.body.style.overflow = 'hidden'
    const timer = setTimeout(() => {
      setLoading(false)
      document.body.style.overflow = ''
    }, 750)
    return () => clearTimeout(timer)
  }, [location])
  return (
    <>
      {loading && (
        <div className='progress'>
          <CircularProgress color='info' />
        </div>
      )}
      <ThemeProvider theme={theme}>
        <Routes location={location}>
          <Route path='/' element={<Layout />}>
            <Route index element={<HeaderContent />} />
            <Route path='pageInfo' element={<PageInfoOutlet />}>
              <Route index element={<PageInfo />} />
              <Route path='page1' element={<PageInfo1 />} />
              <Route path='page2' element={<PageInfo2 />} />
              <Route path='page3' element={<PageInfo3 />} />
              <Route path='page4' element={<PageInfo4 />} />
              <Route path='page5' element={<PageInfo5 />} />
              <Route path='page6' element={<PageInfo6 />} />
              <Route path='page7' element={<PageInfo7 />} />
            </Route>
            <Route path='pagePractice' element={<PracticeMain />} />
            <Route
              path='*'
              element={
                <div
                  style={{
                    textAlign: 'center',
                    marginTop: '40vh',
                    fontSize: '2rem',
                    fontWeight: 600,
                  }}
                >
                  Ничего не найдено!
                </div>
              }
            />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
