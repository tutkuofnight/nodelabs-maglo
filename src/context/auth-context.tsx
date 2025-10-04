import { createContext, useContext, useCallback, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"

export type AuthUser = {
  id: string
  fullName: string
  email: string
}

type AuthContextValue = {
  user: AuthUser | null
  isAuthenticated: boolean,
  totals: Record<string, number>
  signUp: (payload: { fullName: string; email: string; password: string }) => Promise<AuthUser>
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used within AuthProvider")
  return ctx
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(() => {
    // Başlangıçta localStorage'dan oku
    try {
      const savedUser = localStorage.getItem('auth_user')
      return savedUser ? JSON.parse(savedUser) : null
    } catch (error) {
      console.error('Failed to load user from localStorage:', error)
      return null
    }
  })
  const navigate = useNavigate()
  
  const signUp = useCallback<AuthContextValue["signUp"]>(async ({ fullName, email }) => {
    await new Promise((r) => setTimeout(r, 1000))
    const newUser: AuthUser = {
      id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2),
      fullName,
      email,
    }
    setUser(newUser)
    localStorage.setItem('auth_user', JSON.stringify(newUser))
    return newUser
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    localStorage.removeItem('auth_user')
    navigate("/sign-up")
  }, [navigate])

  const value = useMemo<AuthContextValue>(() => ({
    user,
    totals: {
      totalBalance: 5240.2142,
      totalSpending: 240.2142,
      totalSaved: 550.2142,
    },
    isAuthenticated: Boolean(user),
    signUp,
    logout,
  }), [logout, signUp, user])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}