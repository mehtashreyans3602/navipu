import React, { useState } from 'react'
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
// import Nearby from './Nearby';
import Events from './Events';
import Header from './Header';
import ControllPanel from './atoms/ControllPanel';


const center = {
  lat: 22.288540,
  lng: 73.364620
}


const AdminMap = ({ google }) => {

  const [map, setMap] = useState( /** @type google.maps.map */ null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
  });


  const handleMarkerClick = (marker, e) => {
    if (marker && marker.getPosition) {
      const position = marker.getPosition(); // Get the marker's position
      console.log('Clicked Marker Position:', position.lat(), position.lng());
    }
  };

  const handleMapClick = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setSelectedLocation({ lat, lng });
    // Do something with the latitude and  valueslongitude
    console.log('Clicked coordinates:', lat, lng);
  };

  if (!isLoaded) {
    return <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
      <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
        <svg className="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
      </div> </div>;
  }

  // add locations here
  const locations = [
    { name: 'PIET', lat: 22.288552903578147, lng: 73.36402505636215 },
    // { name: 'PIT', lat: 37.3352, lng: -121.8811 },
    // { name: 'PIA', lat: 37.3352, lng: -121.8811 },
    // { name: 'PPI', lat: 37.3352, lng: -121.8811 },
    // { name: 'PID', lat: 37.3352, lng: -121.8811 },
    // Add more locations as needed
  ];

  const handleCardClick = (location) => {
    setSelectedLocation(location);
    if (map && location) {
      const { lat, lng } = location;
      const newCenter = new google.maps.LatLng(lat, lng);
      map.panTo(newCenter);
    }
  };

  const pantocenter = () => {
    { map.panTo(center) }
  }
  const mapclickevent = (marker, e) => {
    pantocenter();
    handleMarkerClick(marker, e);
  }



  return (
    <section className='w-screen h-screen flex flex-col gap-2 md:gap-6 overflow-hidden'>
      <Header />

      <div className='w-full h-[100%] flex gap-2 md:gap-6'>
        {/* card wrapper nearby */}
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

        {/* stage | google map */}
        <div className='flex w-[70%] h-full md:flex-col gap-y-2 md:gap-y-6 pb-2 md:pb-6 flex-col-reverse'>
          <ControllPanel />
          <GoogleMap google={google} onClick={handleMapClick} mapContainerClassName='w-full h-full rounded-3xl relative' center={center} zoom={16} options={{ fullscreenControl: false, zoomControl: false, streetViewControl: false, map }} onLoad={map => setMap(map)}>
            {/* display marker and directions */}
            <button onClick={mapclickevent} className="material-symbols-outlined text-xl absolute bg-green-400 p-2 m-4 rounded-3xl right-0 top-0 "> my_location
            </button>
            {selectedLocation && (
              <Marker position={selectedLocation} />
            )}
          </GoogleMap>

        </div>
        <Events />
      </div>
    </section>
  )
}

export default AdminMap;