import React from 'react'
import EventsCard from './atoms/EventsCard'
import AboutEventItem from "./atoms/AboutEventItem";
const Events = () => {
  return (
    <div className=' w-[20%] rounded-tl-3xl overflow-y-auto bg-[#fcf9f1] border-[#78786a] flex flex-col items-center gap-y-6 border-2 border-r-0 border-b-0 p-[1.7%]'>
      <p className='font-mono font-medium uppercase text-2xl flex items-center gap-x-4'> <span className='material-symbols-outlined font-semibold text-2xl w-fit'>celebration</span> Events</p>

      <EventsCard />
      <AboutEventItem />
    </div>
  )
}

export default Events