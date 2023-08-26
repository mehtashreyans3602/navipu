import React from 'react'

const EventsCard = () => {
  return (
    <section className='select-none group active:bg-[#78786a] bg-[#e4e3d2] group-active:border-[#78786a] group-active:border-2  w-full h-auto flex flex-col md:p-4 gap-2 justify-between rounded-md md:rounded-2xl cursor-pointer'>
      {/* svg as a square image holder */}
      <img className='rounded-full w-full h-28 object-cover border-2 border-[#46492f]' src="https://maps.gstatic.com/tactile/pane/default_geocode-2x.png" alt="placeholder " />
      <div className='flex flex-col gap-y-1 items-start'>
        <p className='text-xl text-[#1c1c17] group-active:text-white w-full text-left'>latest event</p>
        <p className='text-base text-[#46492f] text-left group-active:text-white'>Quia esse adipisci officiis possimus pariatur? Officiis corrupti esse</p>
      </div>
    </section>
  )
}

export default EventsCard