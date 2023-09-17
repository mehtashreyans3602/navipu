import React from "react";

const NearbyCard = ({ PlaceName, setLatitude, setLongitude, onClick }) => {
  const handleCardClick = () => {
    // console.log("Latitude:", setLatitude);
    // console.log("Longitude:", setLongitude);

    onClick(setLatitude, setLongitude);
  };
  return (
    <section
      onClick={handleCardClick}
      className="select-none group active:bg-[#78786a] bg-[#fcf9f1]  w-full h-auto flex flex-col  gap-2 justify-between rounded-md md:rounded-2xl cursor-pointer"
    >
      {/* svg as a square image holder */}
      <img
        className="rounded-md md:rounded-2xl w-full h-16 object-cover"
        src="https://maps.gstatic.com/tactile/pane/default_geocode-2x.png"
        alt="placeholder "
      />
      <p className="text-sm group-active:text-white">{PlaceName}</p>
    </section>
  );
};

export default NearbyCard;
