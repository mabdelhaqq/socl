import React, {useEffect} from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import AppMenu from './components/AppMenu/AppMenu'
import SideBar from './components/SideBar/SideBar'
import "../assets/styles/MasterLayout.scss"
import { useAppContext } from '../helpers/app-store'
import { useNavigate } from 'react-router-dom'


const MasterLayout = () => {
  const { username } = useAppContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (!username) {
      navigate('/app/login');
    }
  }, [username, navigate]);
  return (
    <div>
        <Header/>
        <section className='row'>
            <div className='col-xs-12 col-md-2 d-none d-md-block'><AppMenu /></div>
            <section className='col-xs-12 col-md-7 main'>
                {/* <Outlet /> */}
            </section>
            <div className='col-xs-12 col-md-3 d-none d-md-block'><SideBar /></div>
        </section>
        <Footer />
    </div>
  )
}

export default MasterLayout