import { Outlet } from "react-router"
import { Navbar } from "src/components"

const SharedLayouts = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default SharedLayouts