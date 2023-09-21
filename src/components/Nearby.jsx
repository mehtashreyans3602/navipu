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
    <div className=" overflow-hidden flex flex-col items-center gap-2 max-w-min min-w-min pb-5 h-auto rounded-tr-3xl border-l-0 border-b-0   border-[#78786a] border-2 gap-y-6 p-[1.7%]">
      <div className="font-mono  items-center font-medium uppercase gap-x-4 text-2xl w-min flex">
        {selectedPlace && (
          <span
            onClick={() => setSelectedPlace(null)}
            className="material-symbols-outlined cursor-pointer font-semibold text-xl w-fit"
          >
            arrow_back
          </span>
        )}
        Nearby
      </div>
      <section className="h-[44rem] scroll-smooth w-full flex flex-col gap-4 overflow-y-scroll">
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
      </section>
    </div>
  );
};

export default Nearby;
