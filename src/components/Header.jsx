import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./atoms/Profile";

const Header = () => {
    const { isAuthenticated } = useAuth0();
  return (
    <section className='w-auto h-[8.31%] mx-[2%] flex items-center justify-center rounded-b-3xl bg-yellow-200'>
 {!isAuthenticated ? <p>hi please login</p> : <Profile innertext='welcome' />}
    </section>
  )
}

export default Header