import React from "react"
import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
import Header from '../../Components/Headers/index'
import Footer from '../../Components/Footer/index'

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
export default Layout