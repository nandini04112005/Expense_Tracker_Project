import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Protected({ children }) {
  const navigate = useNavigate()
  
  // here we will write the logic to check if the user is authenticated
  // if not authenticated, we will redirect the user to the login page.
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      // redirect to login page.
      navigate("/login")
    }
  }, [])
  
  return <>
    {children}
  </>
}