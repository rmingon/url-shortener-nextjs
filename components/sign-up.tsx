import Image from "next/image";
import {useState} from "react";

export default function SignUp () {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [retypePassword, serRetypePassword] = useState("")

  const submit = (e: any) => {
    e.preventDefault()
    fetch('/api/registration', {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(email, password, retypePassword)
  }

  return (
    <div className="flex min-h-full items-center justify-center pb-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center">
          <Image src={'/vercel.svg'} alt={'Logo'} height={'100'} width={'100'}/>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign up a new account</h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autoComplete="email" required
                     className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                     placeholder="Email address" onInput={e => setEmail(e.target.value)} value={email}/>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" autoComplete="current-password" required
                     className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                     placeholder="Password" onInput={e => setPassword(e.target.value)} value={password}/>
            </div>
            <div>
              <label htmlFor="retype-password" className="sr-only">Retype password</label>
              <input id="retype-password" name="password" type="password" autoComplete="current-password" required
                     className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                     placeholder="Retype Password" onInput={e => serRetypePassword(e.target.value)} value={retypePassword}/>
            </div>
          </div>

          <div>
            <button type="submit" onClick={(e) => submit(e)}
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-purple-600 py-2 px-4 text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg className="h-5 w-5 text-purple-500 group-hover:text-purple-400" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd"
                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                    clip-rule="evenodd"/>
            </svg>
          </span>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}