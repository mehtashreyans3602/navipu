import React from 'react'

const AboutEventItem = () => {
    return (
        <section className=' overflow-y-auto bg-[#beecdd90] backdrop-blur-sm border-[#00201990] border-2 active:border-2 w-60 h-4/6 flex flex-col md:p-4 gap-y-4 justify-between rounded-md md:rounded-2xl cursor-pointer '>
            {/* svg as a square image holder */}
            <img className='rounded-full w-full h-28 object-cover border-2 border-[#46492f]' src="https://maps.gstatic.com/tactile/pane/default_geocode-2x.png" alt="placeholder " />
            <div className='flex flex-col gap-y-1 items-start'>
                <p className='text-xl text-[#002019] -active:text-white w-full capitalize'>event name</p>
                <button className='rounded-full w-full h-auto text-white text-sm items-center p-3 font-medium flex justify-center gap-x-4 capitalize bg-[#3b665b] '> <span className='material-symbols-outlined '>add_location</span> get directions</button>
                <p className='text-xl text-[#002019] -active:text-white w-full text-left capitalize'>event venue</p>
                <p className='text-base text-[#46492f] text-left -active:text-white'>Quia esse adipisci officiis possimus pariatur? Officiis corrupti esse</p>
            </div>
            <div className='flex flex-col gap-y-1 items-start'>
                <p className='text-xl text-[#002019] -active:text-white w-full capitalize'>entry point 1</p>
                <button className='rounded-full w-full h-auto text-white text-sm items-center p-3 font-medium flex justify-center gap-x-4 capitalize bg-[#3b665b] '> <span className='material-symbols-outlined '>add_location</span> get directions</button>
                <p className='text-base text-[#46492f] text-left -active:text-white'>Quia esse adipisci officiis possimus pariatur? Officiis corrupti esse</p>
            </div>
            <button className='rounded-full w-full h-auto  text-sm items-center p-3 font-medium flex justify-center gap-x-4 capitalize bg-[#ddeb78] border-2 border-[#1a1e00] text-[#1a1e00]'> <span className="material-symbols-outlined">
                captive_portal
            </span>check event page</button>
        </section>
    )
}

export default AboutEventItem