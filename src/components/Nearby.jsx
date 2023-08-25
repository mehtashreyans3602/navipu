import React from 'react'
import NearbyCard from "./atoms/NearbyCard";
const Nearby = ({ setLatitude, setLongitude }) => {
  const places = [
    {
      "id": 0,
      "PlaceName": "PIET",
      "Latitude": 40.7128,
      "Longitude": -74.0060
    },
    {
      "id": 1,
      "PlaceName": "PIT",
      "Latitude": 40.7128,
      "Longitude": -74.0060
    },
    {
      "id": 2,
      "PlaceName": "PPI",
      "Latitude": 40.7128,
      "Longitude": -74.0060
    },
    {
      "id": 3,
      "PlaceName": "DS",
      "Latitude": 40.7128,
      "Longitude": -74.0060
    },
    {
      "id": 4,
      "PlaceName": "PIA",
      "Latitude": 40.7128,
      "Longitude": -74.0060
    },
    {
      "id": 5,
      "PlaceName": "PIP",
      "Latitude": 40.7128,
      "Longitude": -74.0060
    },
    {
      "id": 6,
      "PlaceName": "JNHMC",
      "Latitude": 40.7128,
      "Longitude": -74.0060
    },
    {
      "id": 7,
      "PlaceName": "PID",
      "Latitude": 40.7128,
      "Longitude": -74.0060
    },
  ];



  return (


    <div className='overflow-hidden flex flex-col items-center gap-2 w-[15%] md:w-[10%] h-auto rounded-tr-3xl border-l-0 border-b-0  bg-[#fcf9f1] border-[#78786a] border-2 gap-y-6 p-[1.7%] max-h-[800px]'>
      <p className='font-mono font-medium uppercase text-2xl flex items-center'> Nearby</p>
      <section className='h-5/6  scroll-smooth rounded-t-md md:rounded-t-xl w-full flex flex-col gap-2 md:gap-4 overflow-y-scroll'>

        {/* here we have to figure it out that how to pass data from here to parent because we cannot store coords in NearbyCard
the onlcick event cannot be done in this component as it will take anything as a property so we have to findout what to do
from here things will change a little */}
        {places.map((data) => (
          <NearbyCard
            key={data.id}
            PlaceName={data.PlaceName}
            setLatitude={setLatitude}
            setLongitude={setLongitude}
          />
        ))}

        {/* <NearbyCard  PlaceName='PIET' setLatitude={setLatitude} setLongitude={setLongitude}/> */}
        {/* <NearbyCard placename='PIET' lat="22.28878772337861" lng="73.36346800799352" /> */}
        {/* Add more NearbyCard components here */}
      </section>
    </div>
  )
}

export default Nearby