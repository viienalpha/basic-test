
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import "./style.scss"
import Footer from '../components/Footer'


const LayoutIndex = () => {



  return (
    <div className='layout_index'>
      <Header />
      <Outlet />
      <Footer/>
    </div>
  )
}

export default LayoutIndex
