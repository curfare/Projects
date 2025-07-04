import Footer from './Footer'
import Header from './Header'
import BlockPosts from './BlockPosts'
import { Outlet } from 'react-router-dom'
export default function Layout() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}
