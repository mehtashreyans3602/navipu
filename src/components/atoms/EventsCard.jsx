import React from "react";

const EventsCard = ({ image, eventName, eventDescription, onClick }) => {
  return (
    <section onClick={onClick} className={`w-44 h-auto bg-[#E4E3D2] rounded-2xl p-2 flex flex-col gap-y-2 items-start cursor-pointer`}>
      <img
        className="w-full h-auto rounded-lg border-2 border-[#46492F]"
        src={image[0]}
        alt={eventName}
      />
      <h2 className="text-xl text-[#1C1C17]">{eventName}</h2>
      <p className="text-base text-left text-[#46492F]">{eventDescription}</p>
    </section>
  );
};

export default EventsCard;
