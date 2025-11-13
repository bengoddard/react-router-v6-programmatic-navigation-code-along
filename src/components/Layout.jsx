import { Outlet } from "react-router-dom"
import { useState } from 'react'
import NavBar from "./NavBar"

function Layout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true)
  }

  const logout = () => {
    setIsLoggedIn(false)
  }

  return (
    <div className="layout">
      <NavBar logout={logout}/>
      <Outlet context={login}/>
    </div>
  )
}

export default Layout
