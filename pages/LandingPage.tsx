import React from "react";
const LandingPage = () => {
    return (
        <section className='bg-gradient-radial from-[#DDEB78] via-[#FCF9F1] to-[#BEECDD] h-auto w-full flex flex-col gap-y-4 items-center justify-start px-4 pt-4 overflow-y-hidden text-center'>

            <div className='w-full flex flex-col gap-y-4 items-center'>
                <h1 className='text-5xl md:text-9xl font-semibold'>Welcome TO PUNav</h1>
                <p className='text-3xl md:text-5xl'>A Wayfarer's Guide to Parul University.</p>
                <p className='text-3xl md:text-5xl'>Come Explore the Campus Together!</p>
            </div>

            <div className='w-full flex flex-col gap-y-4 items-center'>
                <p className='text-xl md:text-2xl '>Click on The Login Button Below.</p>
                <button className='hover:bg-white bg-[#DDEB78] rounded-lg px-4 py-2 text-xl md:text-2xl border-black border-2'><a href="/api/auth/login">Login</a></button>
            </div>

            <div className='w-full flex flex-col gap-y-4 items-center'>
                <p className='text-xl md:text-2xl '>Not so Sure? Click on Explore to browse as a Guest.</p>
                <button className='hover:bg-white bg-[#DDEB78] rounded-lg px-4 py-2 text-xl md:text-2xl border-black border-2'><a href="./Components/Guestmap">Guest</a></button>
            </div>
            <img src="LandingPageImage.png" alt="Not Available" className='w-full ' />
        </section>
    )
};
export default LandingPage;