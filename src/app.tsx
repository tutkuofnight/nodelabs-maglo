import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Dashboard from './pages/dashboard'
import SignUp from './pages/sign-up'
import { MobileMenuProvider } from './context/mobile-menu-context'

function App() {
  return (
    <MobileMenuProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </MobileMenuProvider>
  )
}

export default App
