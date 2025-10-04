import { useNavigate, Link } from "react-router-dom"
import { GoogleIcon, LoadingCircle } from "@icons"
import { SignUpSchema } from "../schemas"
import { useAuth } from "../context/auth-context"
import { useState } from "react"

import { motion } from "motion/react"

export default function SignIn(){
  const { signUp } = useAuth()
  const navigate = useNavigate()
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getFieldError = (fieldName: string) => {
    return errors[fieldName] || ''
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    const form = e.currentTarget
    const formData = new FormData(form)

    const raw = {
      fullname: String(formData.get('full-name') || ''),
      email: String(formData.get('email') || ''),
      password: String(formData.get('password') || ''),
    }

    const parsed = SignUpSchema.safeParse(raw)
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {}
      parsed.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0] as string] = issue.message
        }
      })
      setErrors(fieldErrors)
      return
    }

    setErrors({})
    await signUp({
      fullName: parsed.data.fullname,
      email: parsed.data.email,
      password: parsed.data.password,
    })
    setIsLoading(false)
    navigate('/dashboard')
  }
  
  return (
    <main className="grid grid-cols-1 md:grid-cols-[765px,1fr] overflow-x-hidden">
      <motion.section 
        className="flex flex-col items-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-full px-5 sm:w-[404px] sm:px-0 p-10">
          <motion.div 
            className="mb-[105px]"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img src="/logo.svg" alt="Maglo." />
          </motion.div>
          <motion.div 
            className="flex flex-col gap-2 mb-[25px]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h1>Create new account</h1>
            <p>Welcome back! Please enter your details</p>
          </motion.div>
          <motion.form 
            onSubmit={handleSubmit} 
            className="w-full flex flex-col gap-4 [&>label]:flex [&>label]:flex-col [&>label]:gap-2 [&>label]:font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <label htmlFor="full-name">
              Full Name
              <input 
                type="text" 
                id="full-name" 
                name="full-name" 
                placeholder="Mahfuzul Nabil" 
                className={getFieldError('fullname') ? 'border-red-500' : 'border-gray-3'}
              />
              {getFieldError('fullname') && (
                <span className="text-red-500 text-sm">{getFieldError('fullname')}</span>
              )}
            </label>
            <label htmlFor="email">
              Email
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="example@gmail.com" 
                className={getFieldError('email') ? 'border-red-500' : 'border-gray-3'}
              />
              {getFieldError('email') && (
                <span className="text-red-500 text-sm">{getFieldError('email')}</span>
              )}
            </label>
            <label htmlFor="password">
              Password
              <input 
                type="password" 
                id="password" 
                name="password" 
                placeholder="••••••••••" 
                className={getFieldError('password') ? 'border-red-500' : 'border-gray-3'}
              />
              {getFieldError('password') && (
                <span className="text-red-500 text-sm">{getFieldError('password')}</span>
              )}
            </label>
            <div className="flex flex-col gap-4 mt-[11px] [&>button]:font-semibold">
              <button type="submit" className="button primary">
                {isLoading && Object.keys(errors).length === 0 ? (
                  <div className="flex items-center gap-4">
                    <div className="animate-spin">
                      <LoadingCircle />
                    </div>
                    Authenticating...
                  </div>
                  ) : 'Create Account'}
              </button>
              <button className="outlined">
                <GoogleIcon />
                Sign up with Google
              </button>
            </div>
          </motion.form>
          <motion.p 
            className="text-center mt-[25px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Already have an account? <Link to={"/sign-in"} className="sign-in-link font-medium">Sign in</Link>
          </motion.p>
        </div>
      </motion.section>
      <motion.section 
        className="hidden lg:block justify-self-end"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <img src="/signup-image.jpg" className="h-screen" />
      </motion.section>
    </main>
  )
}