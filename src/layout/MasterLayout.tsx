import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import AppMenu from './components/AppMenu/AppMenu'
import SideBar from './components/SideBar/SideBar'
import "../assets/styles/MasterLayout.scss"

const MasterLayout = () => {
  return (
    <div>
        <Header/>
        <section className='row'>
            <div className='col-2'><AppMenu /></div>
            <section className='col-7 main'>
                {/* <Outlet /> */}
            </section>
            <div className='col-3'><SideBar /></div>
        </section>
        <Footer />
    </div>
  )
}

export default MasterLayout