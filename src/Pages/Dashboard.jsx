import React from 'react'
import Navigation from '../Components/Navigation'
import Model from '../Components/Model.jsx'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
      <Navigation/>
      <Model/>
    </div>
  )
}

export default Dashboard