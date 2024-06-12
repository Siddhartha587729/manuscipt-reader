import Navigation from "../Components/Navigation"
import Footer from "../Components/Footer"
import { Outlet, useLocation } from "react-router-dom"


function Main() {
  const location = useLocation();
  const hideNavOnPaths = ['/login','/signup'];
  return (
    <div>
      {!hideNavOnPaths.includes(location.pathname) && <Navigation />}
      <Outlet />
      {!hideNavOnPaths.includes(location.pathname) && <Footer />}
      {/* <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <div className="w-full md:w-4/5 p-4 bg-white shadow-xl border-2">
            <Navigation />
            <Outlet />
            <Footer />
          </div>
          </div> */}
    </div>
  )
}

export default Main