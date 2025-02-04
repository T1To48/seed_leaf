import { Outlet } from "react-router"
import { Navbar } from "src/components"

const SharedLayouts = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default SharedLayouts