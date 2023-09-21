"use client"
import { useUser } from '@auth0/nextjs-auth0/client';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import LandingPage from '../LandingPage';
import AdminMap from './AdminMap';
import Events from './Events';
const LoginButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (user) {
    console.log(user)
    return (


      <div className='relative'>
        <div className='w-100 bg-[#FCF9F1] p-4 m-4 rounded-b-xl'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center'>
              {/* Toggle the menu on button click */}

              <button
                onClick={toggleMenu}
                className='relative cursor-pointer'
              >
                &nbsp;Welcome, {user.name}
                {isMenuOpen && (
                  <div
                    className='absolute bg-[#DDEB78] rounded-lg mt-2 py-2 w-40 right-0 shadow-lg border hover:bg-[#DDEB10] border-gray-200'
                  >
                    {/* Menu items */}
                    <a
                      href='/api/auth/logout'
                      className=' font-normal text-sm p-2 '
                    >
                      Logout
                    </a>
                  </div>
                )}
              </button>

            </div>

            <span className='p-2'>
              <img
                style={{ maxHeight: '50px' }}
                className='rounded'
                src='https://yt3.googleusercontent.com/oEQpDQ-Mt5ICmTvrKelavxxPI1Pk2i3dt0JM1fypJvylX1SEvkVjAeqOhwXNOeQK9k3RSWY5ZQ=s176-c-k-c0x00ffffff-no-rj'
                alt=''
              />
            </span>
          </div>
        </div>
        <div className='flex flex-col'>
          <AdminMap/>
        </div>
      </div>

    );
  }
  return (
    <LandingPage/>    
  )
};

export default LoginButton;