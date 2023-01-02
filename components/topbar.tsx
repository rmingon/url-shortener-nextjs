import Image from "next/image";
import Modal from "./modal";
import SignIn from "./sign-in";
import SignUp from "./sign-up";
import {useState} from "react";
import Link from 'next/link'
import {useUser} from "../context/user-context";

export default function TopBar () {

  const [showModalSignIn, setShowModalSignIn] = useState(false);
  const [showModalSignUp, setShowModalSignUp] = useState(false);
  const { user, setUser } = useUser();

  return (
    <header className='flex space-x-3 items-center mt-5 justify-between px-5'>
      <Image src={'/vercel.svg'} width={'100'} height={'100'} alt={''} className={'mr-10'} />
      <ul className="flex space-x-3">
        <li className="cursor-pointer">Features</li>
        <li className="cursor-pointer">Developers</li>
        <li className="cursor-pointer">Pricing</li>
        <li className="cursor-pointer">About</li>
      </ul>
      <Modal
        onClose={() => setShowModalSignIn(false)}
        show={showModalSignIn}
        height="w-auto"
        width="h-auto"
      >
        <SignIn setShowModal={setShowModalSignIn}></SignIn>
      </Modal>
      <Modal
        onClose={() => setShowModalSignUp(false)}
        show={showModalSignUp}
        height="w-auto"
        width="h-auto"
      >
        <SignUp></SignUp>
      </Modal>
      {user.name ? (
        <Link className="flex space-x-3 mr-2 items-center" href={"/profile"}>
          <div>{user.name}</div>
          <svg width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5Zm0 8a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3Z"/><path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2Zm-6 24.377V25a3.003 3.003 0 0 1 3-3h6a3.003 3.003 0 0 1 3 3v1.377a11.899 11.899 0 0 1-12 0Zm13.992-1.451A5.002 5.002 0 0 0 19 20h-6a5.002 5.002 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0Z"/></svg>
        </Link>
      ): (
        <ul className="flex space-x-3 mr-2 items-center">
          <li onClick={() => setShowModalSignUp(true)} className="cursor-pointer px-3 py-2 bg-purple-300 rounded-xl hover:bg-purple-500 active:bg-purple-200 transition duration-100">Sign Up</li>
          <svg onClick={() => setShowModalSignIn(true)} width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5Zm0 8a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3Z"/><path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2Zm-6 24.377V25a3.003 3.003 0 0 1 3-3h6a3.003 3.003 0 0 1 3 3v1.377a11.899 11.899 0 0 1-12 0Zm13.992-1.451A5.002 5.002 0 0 0 19 20h-6a5.002 5.002 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0Z"/></svg>
        </ul>
        )}
    </header>
  )
}