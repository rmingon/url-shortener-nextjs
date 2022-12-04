import Image from "next/image";
import Modal from "./modal";
import SignIn from "./sign-in";
import SignUp from "./sign-up";
import {useState} from "react";

export default function TopBar () {

  const [showModalSignIn, setShowModalSignIn] = useState(false);
  const [showModalSignUp, setShowModalSignUp] = useState(false);

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
        <SignIn></SignIn>
      </Modal>
      <Modal
        onClose={() => setShowModalSignUp(false)}
        show={showModalSignUp}
        height="w-auto"
        width="h-auto"
      >
        <SignUp></SignUp>
      </Modal>
      <ul className="flex space-x-3 mr-2 items-center ">
        <li onClick={() => setShowModalSignIn(true)} className="cursor-pointer px-3 py-2 bg-purple-300 rounded-xl hover:bg-purple-500 active:bg-purple-200 transition duration-100">Sign in</li>
        <li onClick={() => setShowModalSignUp(true)} className="cursor-pointer px-3 py-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition duration-100">Sign up</li>
      </ul>
    </header>
  )
}