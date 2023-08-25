// eslint-disable-next-line
import React, { useState } from 'react'
import Nearby from './Nearby';
import Events from './Events';
import Header from './Header';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Map, Marker } from 'react-map-gl';
const token = 'pk.eyJ1IjoiYWFyeWF0aGFrb3IiLCJhIjoiY2xsM2M3dmMzMDZqOTNjbjJjZzg1ZXdpMCJ9.MUVljcF8mCYtARAUWXeVFA'
const center = {
  lat: 22.28854,
  lng: 73.36462
}



const AdminMap = () => {

  const [latitude, setLatitude] = useState(center.lat); // Initialize with a default value
  const [longitude, setLongitude] = useState(center.lng); // Initialize with a default value

  // const handleLocationUpdate = () => {
  //   // Suppose you have newLat and newLng as the updated values
  //   setLatitude(newLat);
  //   setLongitude(newLng);
  // }
  return (
    <section className='w-screen h-screen flex flex-col gap-2 md:gap-6 overflow-hidden'>
      <Header />
      <div className='w-full h-[100%] flex gap-2 md:gap-6'>
        <Nearby />
        {/* <Nearby setLatitude={idk} setLongitude={idk} /> */}
        <div className='flex w-[70%] h-full md:flex-col gap-y-2 md:gap-y-6 pb-2 md:pb-6 flex-col-reverse'>
          <Map

            mapboxAccessToken={token}
            initialViewState={{
              latitude: center.lat,
              longitude: center.lng,
              zoom: 15,
            }}
            style={{ width: ' 100%', height: ' 100%', borderRadius: '24px', border: "black solid " }}
            mapStyle="mapbox://styles/aaryathakor/cllj5hwq6019s01qs83846lry"
          >
            <Marker latitude={latitude} longitude={longitude} anchor="center" >
              <span className='text-3xl'>&#128205;</span>
            </Marker>
          </Map>
        </div>
        <Events />
      </div>
    </section >
  )
}

export default AdminMap;