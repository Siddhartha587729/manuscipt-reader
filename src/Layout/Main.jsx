import Navigation from "../Components/Navigation"
import Footer from "../Components/Footer"
import { Outlet } from "react-router-dom"


function Main() {
  return (
    <div>
        <Navigation/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Main