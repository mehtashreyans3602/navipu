import React from 'react'
// import React, { useContext, useEffect } from 'react'


// const Nearby = ({ onMarkerClick, setMarkerPosition }) => {
const Nearby = ({ setSelectedLocation, map, google }) => {




  // add locations here
  const locations = [
    { name: 'PIET', lat: 22.288552903578147, lng: 73.36402505636215 },
    { name: 'PIT', lat: 22.286450795431087, lng: 73.36505234241486 },
    { name: 'PIA', lat: 22.294923562447774, lng: 73.36426377296448 },
    { name: 'PPI', lat: 22.29100739126652, lng: 73.36597502231598 },
    { name: 'PIP', lat: 22.288054059050943, lng: 73.36498260498047 },
    // Add more locations as needed
  ];
  const handleCardClick = (location) => {
    setSelectedLocation('clicked from nearby');
    console.log('clicked');
    if (map && location) {
      const { lat, lng } = location;
      const newCenter = new google.maps.LatLng(lat, lng);
      map.panTo(newCenter);
    }
  };

  return (
    <div className='overflow-hidden flex flex-col gap-2 w-[15%] md:w-[10%] h-full rounded-tr-3xl bg-blue-200 p-[1.7%] max-h-[800px]'>
      <p className='font-sans font-semibold uppercase text-xs flex items-center'> Nearby</p>
      {/* card container */}
      <section className='h-[100%]  scroll-smooth rounded-md md:rounded-xl w-full flex flex-col gap-2 md:gap-4 overflow-y-scroll'>
        {/* card items */}
        {locations.map((location, index) => (
          <section key={index} onClick={() => handleCardClick(location)} className='card select-none group active:bg-blue-700  w-full  h-auto border-2 p-1 md:p-2 gap-2 border-blue-700 rounded-md md:rounded-2xl cursor-pointer '>
            {/* svg as asquare image holder */}
            <img className='rounded-md md:rounded-2xl h-auto  object-cover' src="https://maps.gstatic.com/tactile/pane/default_geocode-2x.png" alt="placeholder image" />
            <p className=' text-sm truncate group-active:text-white'>{location.name}</p>
          </section>
        ))}
      </section>
    </div>
  )
}

export default Nearby