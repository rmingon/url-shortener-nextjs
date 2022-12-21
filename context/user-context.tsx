import {createContext, Dispatch, ReactNode, useContext, useState} from "react";
import jwtDecode from "jwt-decode";
import {User} from "../types/user.type";

export const UserContext = createContext<{user: User, setUser: Dispatch<User>}>({
  user: {name: "", roles: [], iat: 0},
  setUser: (user: User) => {},
})

export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children } : {children: ReactNode}) => {
  const [user, setUser] = useState<User>({name: "", roles: [], iat: 0})

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}