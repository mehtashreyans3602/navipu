import React from 'react'
import NearbyCard from "./atoms/NearbyCard";
import {places} from './Data'

const Nearby = ({onCardClick}) => {

    const handleCardClick = (place) => {
        // Pass the clicked place's coordinates to the parent component
        onCardClick(place.Latitude, place.Longitude);
    };
    return (


        <div
            className='overflow-hidden flex flex-col items-center gap-2 w-auto pb-5 h-auto rounded-tr-3xl border-l-0 border-b-0  bg-[#fcf9f1] border-[#78786a] border-2 gap-y-6 p-[1.7%]'>
            <p className='font-mono font-medium uppercase text-2xl flex items-center'> Nearby</p>
            <section
                className='h-[45rem] scroll-smooth rounded-t-md md:rounded-t-xl w-full flex flex-col gap-2 md:gap-4 overflow-y-scroll'>

                {/* here we have to figure it out that how to pass data from here to parent because we cannot store coords in NearbyCard
the onlcick event cannot be done in this component as it will take anything as a property so we have to findout what to do
from here things will change a little */}
                {places.map((data) => (
                    <NearbyCard
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

export default Nearby