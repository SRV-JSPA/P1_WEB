import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Layout () {
  return (
    <>
        <Header/>
        <Suspense fallback={<div className="loading">Loading...</div>} >
          <Outlet/>
        </Suspense>
        <Footer/>
    </>
  )
}

export default Layout