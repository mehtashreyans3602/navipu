import React from 'react';

const NearbyCard = ({PlaceName }) => {




  return (
    <section className='select-none group active:bg-[#78786a] border-[#78766a] border-2  bg-[#fcf9f1] group-active:border-[#78786a] group-active:border-2  w-full h-auto flex flex-col md:p-2 gap-2 justify-between rounded-md md:rounded-2xl cursor-pointer'>
      {/* svg as a square image holder */}
      <img className='rounded-md md:rounded-2xl w-full h-16 object-cover' src="https://maps.gstatic.com/tactile/pane/default_geocode-2x.png" alt="placeholder " />
      <p className='text-sm group-active:text-white'>{PlaceName}</p>
    </section>
  );
};

export default NearbyCard;
