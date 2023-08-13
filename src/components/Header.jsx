import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./atoms/Profile";

const Header = () => {
  const { isAuthenticated, logout } = useAuth0();
  return (
    <section className='w-auto h-[8.31%] mx-[2%] flex justify-between rounded-b-3xl border-t-0 items-center pl-4 pr-2 bg-[#fcf9f1] border-[#78786a] border-2'>
      {!isAuthenticated ? <p>hi please login</p> : <Profile innertext='welcome' />}
      <h1 className='text-3xl font-bold'>NAVIPU</h1>
      <button className=' bg-[#ddeb78] text-[#1a1e00] px-4 py-2 rounded-3xl' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        Log Out
      </button>
    </section>
  )
}

export default Header