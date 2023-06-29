import React, { useContext } from 'react'
// import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import { LocationContext } from '../../context/Locationcontext';


const NearbyCard = (props) => {

  const { selectLocation } = useContext(LocationContext);

  const handleCardClick = (props) => {
    selectLocation({ lat: props.lat, lng: props.lng });
  };


  return (
    <section onClick={handleCardClick} className='select-none group active:bg-blue-700  w-full  h-auto border-2 p-1 md:p-2 gap-2 border-blue-700 rounded-md md:rounded-2xl cursor-pointer '>
      {/* svg as asquare image holder */}
      <img className='rounded-md md:rounded-2xl h-auto  object-cover' src="https://maps.gstatic.com/tactile/pane/default_geocode-2x.png" alt="placeholder image" />
      <p className=' text-sm truncate group-active:text-white'>{props.placename}</p>
    </section>
  )
}

export default NearbyCard


