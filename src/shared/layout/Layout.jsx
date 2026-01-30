import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'

function Layout() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '68px' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
