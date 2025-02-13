import { Outlet } from "react-router"
import { Navbar, Footer } from "src/components"

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