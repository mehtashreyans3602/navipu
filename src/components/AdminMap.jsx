// eslint-disable-next-line
import React, { useState } from 'react'
import Nearby from './Nearby';
import Header from './Header';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Map } from 'react-map-gl';
const token = 'pk.eyJ1IjoiYWFyeWF0aGFrb3IiLCJhIjoiY2xsM2M3dmMzMDZqOTNjbjJjZzg1ZXdpMCJ9.MUVljcF8mCYtARAUWXeVFA'
const center = {
  lat: 22.28854,
  lng: 73.36462
}



const AdminMap = () => {



  return (
    <section className='w-screen h-screen flex flex-col gap-2 md:gap-6 overflow-hidden'>
      <Header />
      <div className='w-full h-[100%] flex gap-2 md:gap-6'>
        <Nearby />
        <div className='flex w-[70%] rounded-full h-full md:flex-col gap-y-2 md:gap-y-6 pb-2 md:pb-6 flex-col-reverse'>
          <Map
            mapboxAccessToken={token}
            initialViewState={{
              latitude: center.lat,
              longitude: center.lng,
              zoom: 15,
            }}
            style={{ width: ' 100%', height: ' 100%' }}
            mapStyle="mapbox://styles/mapbox/satellite-v9"
          >

          </Map>
        </div>

      </div>
    </section>
  )
}

export default AdminMap;