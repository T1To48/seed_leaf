import { Outlet } from "react-router"
import Navbar from "./navbar/Navbar.component"
import Footer  from "./footer/Footer.component"

const SharedLayouts = () => {
  return (
    <div>
      <Navbar />
        <Outlet />
        <Footer/>
    </div>
  )
}

export default SharedLayouts