import { useEffect, useState } from "react";
import Nearby from "./Nearby";
import Events from "./Events";
import Header from "./Header";
import "mapbox-gl/dist/mapbox-gl.css";
import { Map, Marker } from "react-map-gl";
import mapboxgl from "mapbox-gl"; // Import Mapbox GL

const center = {
  lat: 22.28854,
  lng: 73.36462,
};

const Token =
  "pk.eyJ1IjoiYWFyeWF0aGFrb3IiLCJhIjoiY2xsM2M3dmMzMDZqOTNjbjJjZzg1ZXdpMCJ9.MUVljcF8mCYtARAUWXeVFA";

const AdminMap = () => {
  const [Lat, setLatitude] = useState(center.lat);
  const [Long, setLongitude] = useState(center.lng);
  const [mapCenter, setMapCenter] = useState({
    latitude: Lat,
    longitude: Long,
  });

  mapboxgl.accessToken = Token;

  // keep the marker in the center of the map
  useEffect(() => {
    const keepCenter = {
      latitude: Lat, // Use Lat variable
      longitude: Long, // Use Long variable
      zoom: 15,
    };
    setMapCenter(keepCenter);
  }, [Lat, Long]);

  useEffect(() => {
    console.log("initialViewState updated:", mapCenter);
  }, [mapCenter]);

  const handleCardClick = (newLat, newLng) => {
    // Update the map marker position
    setLatitude(newLat);
    setLongitude(newLng);
  };
  return (
    <section className="w-screen h-screen flex flex-col gap-y-4 bg-[#fcf9f1] justify-between items-stretch overflow-auto">
      <Header />
      <section className="w-auto h-min flex justify-center flex-1 gap-x-6 justify-items-end items-stretch">
        <Nearby onCardClick={handleCardClick} />
        <section className="flex-1 flex w-full h-auto pb-4 gap-y-6 ">
          <Map
            mapboxAccessToken={Token}
            initialViewState={{
              latitude: Lat,
              longitude: Long,
              zoom: 15,
              dragPan: true,
            }}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "24px",
              border: "black solid ",
            }}
            // mapStyle="mapbox://styles/mapbox/streets-v12
            mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
            // mapStyle="mapbox://styles/mapbox/dark-v10"
            // mapStyle="mapbox://styles/aaryathakor/cllj5hwq6019s01qs83846lry"
          >
            <Marker latitude={Lat} longitude={Long} anchor="top">
              <span className="text-3xl shadow-amber-200 ">&#128205;</span>
            </Marker>
          </Map>
        </section>
        <Events />
      </section>
    </section>
  );
};

export default AdminMap;
