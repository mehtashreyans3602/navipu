import React, { useState } from 'react'
// import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";


const NearbyCard = (props) => {

  const [selectedLocation, setSelectedLocation] = useState(null);

  const handlemapclick = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setSelectedLocation({ lat, lng });
  }

  return (
    <section onClick={() => { setSelectedLocation({ lat: props.lat, lng: props.lng }) }} className='active:bg-blue-700 w-full  h-auto border-2 p-1 md:p-2 gap-2 border-blue-700 rounded-md md:rounded-2xl cursor-pointer '>
      {/* svg as asquare image holder */}
      <img className='rounded-md md:rounded-2xl h-auto  object-cover' src="https://maps.gstatic.com/tactile/pane/default_geocode-2x.png" alt="placeholder image" />
      <p className='text-sm truncate'>{props.placename}</p>
    </section>
  )
}

export default NearbyCard