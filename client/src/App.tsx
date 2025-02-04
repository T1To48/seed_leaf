import { Navbar } from "./components"
import { useCheckDeviceType } from "./customHooks"

function App() {
  useCheckDeviceType()
  
  return (
    <>
      <Navbar/>
    </>
  )
}

export default App
