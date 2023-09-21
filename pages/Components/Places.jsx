import React, { useState } from 'react'
import PlaceCards from './atoms/PlaceCards';
const places = [
  {
    "id": 0,
    "PlaceName": "PIET",
    "Latitude": 22.288767,
    "Longitude": 73.363816

  },
  {
    "id": 1,
    "PlaceName": "PIT",
    "Latitude": 22.286235,
    "Longitude": 73.364526

  },
  {
    "id": 2,
    "PlaceName": "PPI",
    "Latitude": 22.290872,
    "Longitude": 73.366111
  },
  {
    "id": 3,
    "PlaceName": "DS",
    "Latitude": 22.289611,
    "Longitude": 73.363880

  },
  {
    "id": 4,
    "PlaceName": "PIA",
    "Latitude": 22.289155,
    "Longitude": 73.363381

  },
  {
    "id": 5,
    "PlaceName": "PIP",
    "Latitude": 22.288021,
    "Longitude": 73.364939

  },
  {
    "id": 6,
    "PlaceName": "JNHMC",
    "Latitude": 22.290665,
    "Longitude": 73.365530



  },
  {
    "id": 7,
    "PlaceName": "PID",
    "Latitude": 22.294705,
    "Longitude": 73.364442



  }
];


const Places = ({ onCardClick }) => {

  const handleCardClick = (place) => {
    // Pass the clicked place's coordinates to the parent component
    onCardClick(place.Latitude, place.Longitude);
  };
  return (


    <div className='overflow-hidden flex flex-col items-center gap-2 w-[15%] md:w-[10%] h-auto rounded-tr-3xl border-l-0 border-b-0  bg-[#fcf9f1] border-[#78786a] border-2 gap-y-6 p-[1.7%] max-h-[800px]'>
      <p className='font-mono font-medium uppercase text-2xl flex items-center'> Places</p>
      <section className='h-5/6  scroll-smooth rounded-t-md md:rounded-t-xl w-full flex flex-col gap-2 md:gap-4 overflow-y-scroll'>

        {/* here we have to figure it out that how to pass data from here to parent because we cannot store coords in NearbyCard
the onlcick event cannot be done in this component as it will take anything as a property so we have to findout what to do
from here things will change a little */}
        {places.map((data) => (
          <PlaceCards
            key={data.id}
            PlaceName={data.PlaceName}
            setLatitude={data.Latitude}
            setLongitude={data.Longitude}
            onClick={() => handleCardClick(data)}
          />
        ))}

        {/* <NearbyCard   PlaceName='PIET' setLatitude={setLatitude} setLongitude={setLongitude}/> */}
        {/* <NearbyCard placename='PIET' lat="22.28878772337861" lng="73.36346800799352" /> */}
        {/* Add more NearbyCard components here */}
      </section>
    </div>
  )
}

export default Places