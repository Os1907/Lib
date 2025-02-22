import Nav from '../../Components/Navbar/Nav'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Nav/>
    <Outlet/>
    
    
    </>
  )
}

export default Layout