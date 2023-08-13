import React from 'react'

const Events = () => {
  return (
    <div className=' w-[20%] rounded-tl-3xl  bg-[#fcf9f1] border-[#78786a] flex flex-col items-center gap-y-6 border-2 border-r-0 border-b-0 p-[1.7%]'>
      <p className='font-mono font-medium uppercase text-2xl flex items-center gap-x-4'> <span className='material-symbols-outlined font-semibold text-4xl w-fit'>celebration</span> Events</p>

      <section className='select-none group active:bg-[#78786a] bg-[#e4e3d2] group-active:border-[#78786a] group-active:border-2  w-full h-auto flex flex-col md:p-4 gap-2 justify-between rounded-md md:rounded-2xl cursor-pointer'>
        {/* svg as a square image holder */}
        <img className='rounded-full w-full h-28 object-cover border-2 border-[#46492f]' src="https://maps.gstatic.com/tactile/pane/default_geocode-2x.png" alt="placeholder " />
        <div className='flex flex-col gap-y-1 items-start'>
          <p className='text-xl text-[#1c1c17] group-active:text-white w-full text-left'>latest event</p>
          <p className='text-base text-[#46492f] text-left group-active:text-white'>Quia esse adipisci officiis possimus pariatur? Officiis corrupti esse</p>
        </div>
      </section>

    </div>
  )
}

export default Events