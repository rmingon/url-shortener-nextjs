import '../styles/globals.css'
import '../styles/magic.min.css'
import type { AppProps } from 'next/app'
import {createContext, useEffect, useRef, useState} from "react";
import jwt_decode from "jwt-decode";
import {useLocalStorage} from "../hooks/useSessionStorage";

export default function App({ Component, pageProps }: AppProps) {
  const [isUser, setIsUser] = useState(false);
  const [user, setUser] = useState({});

  const [token, setToken] = useLocalStorage('token', "")

  useEffect(() => {
    console.log(token)
    if (token) {
      const user : {} = jwt_decode(token);
      setUser(user);
      setIsUser(true);
    } else {
      setIsUser(false)
    }
  })

  const User = createContext({...user, isUser});

  return (
    <User.Provider value={user}>
      <Component {...pageProps}/>
    </User.Provider>
  );
}
