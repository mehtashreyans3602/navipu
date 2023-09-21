// eslint-disable-next-line
import React, { useState } from 'react';
import Places from './Places';
// import Events from './Events';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Map, Marker } from 'react-map-gl';
import Events from './Events';
import ControllPanel from './atoms/ControllPanel';

const center = {
  lat: 22.28854,
  lng: 73.36462
};

const Token = 'pk.eyJ1IjoiYWFyeWF0aGFrb3IiLCJhIjoiY2xsM2M3dmMzMDZqOTNjbjJjZzg1ZXdpMCJ9.MUVljcF8mCYtARAUWXeVFA';

const AdminMap: React.FC = () => {
  const [Lat, setLatitude] = useState<number>(center.lat);
  const [Long, setLongitude] = useState<number>(center.lng);

  const handleCardClick = (newLat: number, newLng: number) => {
    // Update the map marker position
    setLatitude(newLat);
    setLongitude(newLng);
  };

  return (
    <section className='w-screen h-screen flex flex-col gap-2 md:gap-6 overflow-hidden'>
      
      <div className='w-full h-[100%] flex gap-2 md:gap-6'>
        <Places onCardClick={handleCardClick} />
        {/* <Places setLatitude={idk} setLongitude={idk} /> */}
        <div className='flex w-[85%] h-full md:flex-col gap-y-2 md:gap-y-6 pb-2 md:pb-6 flex-col-reverse'>
        <ControllPanel/>
          <Map
            mapboxAccessToken={Token}
            initialViewState={{
              latitude: Lat, // Use Lat variable
              longitude: Long, // Use Long variable
              zoom: 15,
            }}
            style={{ width: '100%', height: '100%', borderRadius: '24px', border: "black solid " }}
            mapStyle="mapbox://styles/mapbox/streets-v12"
            // mapStyle="mapbox://styles/mapbox/streets-v10"
            // mapStyle="mapbox://styles/aaryathakor/cllj5hwq6019s01qs83846lry"
          >
            <Marker latitude={Lat} longitude={Long} anchor="center" >
              <span className='text-3xl'>&#128205;</span>
            </Marker>
          </Map>
        </div>
        {<Events />}
      </div>
    </section >
  );
};

export default AdminMap;
