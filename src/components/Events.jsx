import React, { useState } from "react";
import { events } from "./Data";
import AboutEventItem from "./atoms/AboutEventItem";
import EventsCard from "./atoms/EventsCard";

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleCardClick = (event) => {
    // Pass the clicked event to the parent component
    console.log("evevnt", event);
    setSelectedEvent(event);
  };


  return (
    <div className="w-fit h-full rounded-tl-3xl overflow-y-scroll border-[#78786a] flex flex-col items-center gap-y-6 border-2 border-r-0 border-b-0 p-6">
      <div className="font-mono w-full font-medium uppercase text-2xl flex items-center gap-x-4 ">
        {selectedEvent && (
          <span
            onClick={() => setSelectedEvent(null)}
            className="material-symbols-outlined cursor-pointer font-semibold text-xl w-fit">
            arrow_back
          </span>
        )}
        <div className="w-full flex justify-center gap-x-4 ">
          <span className="material-symbols-outlined font-semibold text-2xl w-auto">
            celebration
          </span>
          <span className="w-auto font-mono font-medium uppercase text-2xl">
            Events
          </span>
        </div>
      </div>

      {
        selectedEvent ? (
          <AboutEventItem
            image={selectedEvent.image}
            eventName={selectedEvent.eventName}
            eventDescription={selectedEvent.eventDescription}
            placeName={selectedEvent.placeName}
            date={selectedEvent.date}
            queryPoint={selectedEvent.queryPoints}
            websiteLink={selectedEvent.websiteLink}
          />
        ) : (
          events.map((eventdata) => (
            <EventsCard
              key={eventdata.id}
              image={eventdata.image}
              eventName={eventdata.eventName}
              eventDescription={eventdata.eventDescription}
              onClick={() => handleCardClick(eventdata)}
            />
          ))
        )
      }
    </div >
  );
};

export default Events;
