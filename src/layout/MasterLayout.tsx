import React, {useEffect} from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import AppMenu from './components/AppMenu/AppMenu'
import SideBar from './components/SideBar/SideBar'
import "../assets/styles/MasterLayout.scss"
import { useAppContext } from '../helpers/app-store'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'


const MasterLayout = () => {
  const { username } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!username) {
      navigate('/login');
      return;
    }

    const fetchData = async () => {
    const dataKey = 'my_posts'
    const storedPosts = localStorage.getItem(dataKey);
    if(!storedPosts){
      try{
        const response = await axios.get('https://mocki.io/v1/418eafe2-1002-4145-94f2-370a4eb34be8');
        const data = response.data;
        localStorage.setItem('my_posts', JSON.stringify(data));
      }catch(error){
        toast.error("An error occured in fetching data");
      }
    }
  };
  fetchData();
  }, [username, navigate]);
  return (
    <div>
        <Header/>
        <section className='row'>
            <div className='col-xs-12 col-md-2 d-none d-md-block'><AppMenu /></div>
            <section className='col-xs-12 col-md-7 main'>
              <Outlet/>
            </section>
            <div className='col-xs-12 col-md-3 d-none d-md-block'><SideBar /></div>
        </section>
        <Footer />
    </div>
  )
}

export default MasterLayout