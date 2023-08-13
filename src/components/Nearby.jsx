import React from 'react'
import NearbyCard from "./atoms/NearbyCard";
import { LocationProvider } from '../context/Locationcontext';
const Nearby = () => {
  return (
    <div className='overflow-hidden flex flex-col items-center gap-2 w-[15%] md:w-[10%] h-full rounded-tr-3xl border-l-0 border-b-0  bg-[#fcf9f1] border-[#78786a] border-2 gap-y-6 p-[1.7%] max-h-[800px]'>
      <p className='font-mono font-medium uppercase text-2xl flex items-center'> Nearby</p>
      <section className='h-[100%]  scroll-smooth rounded-md md:rounded-xl w-full flex flex-col gap-2 md:gap-4 overflow-y-scroll'>

        <LocationProvider>
          <NearbyCard placename='PIT' lat={22.286993880495107} lng={73.36407050556579} />
          {/* Add more NearbyCard components here */}
        </LocationProvider>



        {/* <NearbyCard placename='PIET' lat="22.28878772337861" lng="73.36346800799352" />
        <NearbyCard  lat="22.28878772337861" lng="73.36346800799352" />
        <NearbyCard placename='PIT' />
        <NearbyCard placename='PIA' />
        <NearbyCard placename='PIBA' />
        <NearbyCard placename='PIAS' />


        <NearbyCard placename='JNHMC' /> */}



      </section>
    </div>
  )
}

export default Nearby