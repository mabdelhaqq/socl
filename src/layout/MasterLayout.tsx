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