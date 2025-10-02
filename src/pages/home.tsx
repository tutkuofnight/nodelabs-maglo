import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export default function Home() {
  const navigate = useNavigate()
  const session = localStorage.getItem("session-id")
  
  useEffect(() => {
    if (!session) {
      navigate('/sign-up')
    } else {
      navigate("/dashboard")
    }
  }, [navigate, session])
  
  return null
}