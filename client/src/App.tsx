import { Navbar } from "./components"
function App() {
  return (
    <>
      <Navbar/>
    </>
  )
}

export default App

// useEffect(() => {
//   window.addEventListener("resize",()=>{
//     console.log(window.innerWidth)
//   })

//   return () => {
//     window.removeEventListener("resize",()=>{})
//   }
// }, [])