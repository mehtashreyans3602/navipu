import React from "react";

const PlaceDetail = ({ PlaceName, PlaceImage, PlaceDescription }) => {
  return (
    <section className="select-none group bg-[#fcf9f1] border-2 border-[#78786a]  w-[10rem] h-auto flex flex-col p-4 gap-2 justify-between rounded-2xl cursor-pointer">
      {/* svg as a square image holder */}
      <img
        className="rounded-md md:rounded-2xl w-full h-16 object-cover"
        src={PlaceImage}
        alt="placeholder "
      />
      <p className=" font-semibold text-xl">{PlaceName}</p>
      <p className="text-sm text-left">{PlaceDescription}</p>
    </section>
  );
};
export default PlaceDetail;
