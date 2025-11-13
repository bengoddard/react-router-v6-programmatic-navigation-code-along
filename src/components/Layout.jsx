import { Outlet, useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'
import NavBar from "./NavBar"

function Layout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    setIsLoggedIn(true)
  }

  const logout = () => {
    setIsLoggedIn(false)
  }

  useEffect(() => {
    if(isLoggedIn) {
      navigate("/")
    } else{
      navigate("/login")
    }
  }, [isLoggedIn])

  return (
    <div className="layout">
      <NavBar logout={logout}/>
      <Outlet context={login}/>
    </div>
  )
}

export default Layout
