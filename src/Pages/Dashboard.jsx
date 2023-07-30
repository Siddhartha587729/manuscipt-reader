import React from 'react'
import Navigation from '../Components/Navigation'
import Model from '../Components/Model.jsx'
import Create from '../Components/Create.jsx'
import Footer from '../Components/Footer.jsx'
/* import { Outlet } from 'react-router-dom' */

export function dashboardLoader(){

}

export async function dashboardAction({request}){
  const data = await request.formData();
  const {...values} = Object.fromEntries(data);
  console.log(values.newImage);
  return data;
}

function Dashboard() {
  return (
    <div>
      <Navigation/>
      <Model/>
      <Create/>
      <Footer/>
    </div>
  )
}

export default Dashboard