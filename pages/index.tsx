"use client"
import { useUser } from '@auth0/nextjs-auth0/client';
import dynamic from 'next/dynamic';
import { useState } from 'react';



const IndexPage = () => {
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
      </div>

    );
  }
  return (
    <div className='bg-gradient-radial from-[#DDEB78] via-[#FCF9F1] to-[#BEECDD] min-h-screen flex flex-col justify-center items-center'>

  <div className='text-center mt-10'>
    <h1 className='text-5xl md:text-9xl font-semibold'>Welcome TO PU Nav</h1>
    <p className='text-3xl md:text-5xl'>A Wayfarer's Guide to Parul University.</p>
    <p className='text-3xl md:text-5xl'>Come Explore the Campus Together!</p>
  </div>

  <div className='space-y-4 mt-8'>
    <p className='text-xl md:text-2xl text-center'>Click on The Login Button Below.</p>
    <p className='text-center'>
      <button className='hover:bg-white bg-[#DDEB78] rounded-lg px-4 py-2 text-xl md:text-2xl border-black border-2'><a href="/api/auth/login">Login</a></button>
    </p>
  </div>

  <div className='space-y-4 mt-8'>
    <p className='text-xl md:text-2xl text-center'>Not so Sure? Click on Explore to browse as a Guest.</p>
    <p className='text-center'>
      <button className='hover:bg-white bg-[#DDEB78] rounded-lg px-4 py-2 text-xl md:text-2xl border-black border-2'><a href="">Guest</a></button>
    </p>
  </div>

  <div className='mt-10'>
    <img src="Example.svg" alt="Not Available" className='w-96 md:w-auto' />
  </div>
</div>

  )
}
export default IndexPage;