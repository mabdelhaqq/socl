import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import AppMenu from './components/AppMenu/AppMenu'
import SideBar from './components/SideBar/SideBar'

const MasterLayout = () => {
  return (
    <div>
        <Header />
        <section>
            <AppMenu />
            {/* <section>
                <Outlet />
            </section> */}
            <SideBar />
        </section>
        <Footer />
    </div>
  )
}

export default MasterLayout