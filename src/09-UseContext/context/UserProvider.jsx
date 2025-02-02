import React, { useState } from 'react'
import { UserContext } from './USerContext'


export const UserProvider = ({ children }) => {

  const [user, setUser] = useState()
  return (
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
  )
}
