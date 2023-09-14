import React, { useState } from "react";
import NearbyCard from "./atoms/NearbyCard";
import PlaceDetail from "./atoms/PlaceDetail";
import { places } from "./Data";

const Nearby = ({ onCardClick }) => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleCardClick = (place) => {
    // Pass the clicked place's coordinates to the parent component
    onCardClick(place.Latitude, place.Longitude);
    setSelectedPlace(place);
  };
  return (
    <div className="overflow-hidden flex flex-col items-center gap-2 w-min pb-5 h-auto rounded-tr-3xl border-l-0 border-b-0  bg-[#fcf9f1] border-[#78786a] border-2 gap-y-6 p-[1.7%]">
      <div className="font-mono w-auto font-medium uppercase gap-x-4 text-2xl flex items-start">
        {selectedPlace && (
          <span
            onClick={() => setSelectedPlace(null)}
            className="material-symbols-outlined font-semibold text-2xl w-fit"
          >
            arrow_back
          </span>
        )}
        Nearby
      </div>
      <section className="h-[45rem] scroll-smooth rounded-t-md md:rounded-t-xl w-full flex flex-col gap-2 md:gap-4 overflow-y-scroll">
        {selectedPlace ? (
          <PlaceDetail
            PlaceName={selectedPlace.PlaceName}
            PlaceDescription={selectedPlace.PlaceDescription}
            PlaceImage={selectedPlace.PlaceImage}
          />
        ) : (
          places.map((data) => (
            <NearbyCard
              key={data.id}
              PlaceName={data.PlaceName}
              setLatitude={data.Latitude}
              setLongitude={data.Longitude}
              onClick={() => handleCardClick(data)}
            />
          ))
        )}

        {/* <NearbyCard   PlaceName='PIET' setLatitude={setLatitude} setLongitude={setLongitude}/> */}
        {/* <NearbyCard placename='PIET' lat="22.28878772337861" lng="73.36346800799352" /> */}
        {/* Add more NearbyCard components here */}
      </section>
    </div>
  );
};

export default Nearby;
