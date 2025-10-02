import { useNavigate, Link } from "react-router-dom"

export default function SignIn(){
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // const formData = new FormData(e.target)
    
    // const fullName = formData.get('full-name')
    // const emaill = formData.get('email')
    // const password = formData.get('password')

    navigate('/dashboard')
  }
  
  return (
    <main className="grid grid-cols-[765px,1fr]">
      <section className="flex flex-col items-center">
        <div className="w-full px-2 sm:w-[404px] sm:px-0 p-10">
          <div className="mb-[105px]">
            <img src="/logo.svg" alt="Maglo." />
          </div>
          <div className="flex flex-col gap-2 mb-[25px]">
            <h1>Create new account</h1>
            <p>Welcome back! Please enter your details</p>
          </div>
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 [&>label]:flex [&>label]:flex-col [&>label]:gap-2">
            <label htmlFor="full-name">
              Full Name
              <input type="text" id="full-name" name="full-name" placeholder="Mahfuzul Nabil" />
            </label>
            <label htmlFor="email">
              Email
              <input type="email" id="email" name="email" placeholder="example@gmail.com" />
            </label>
            <label htmlFor="password">
              Password
              <input type="password" id="password" name="password" placeholder="••••••••••" />
            </label>
            <div className="flex flex-col gap-4 mt-[11px] [&>button]:font-semibold">
              <button type="submit">Create Account</button>
              <button variant="outline">
                <img src="../assets/icons/google.svg" alt="" />
                Sign up with Google
              </button>
            </div>
          </form>
          <p className="text-center mt-[25px]">Already have an account? <Link to={"/sign-in"}>Sign in</Link></p>
        </div>
      </section>
      <section className="justify-self-end">
        <img src="/signup-image.jpg" className="none md:block h-screen" />
      </section>
    </main>
  )
}