import React from "react";
import { events } from "./Data";
import AboutEventItem from "./atoms/AboutEventItem";

const Events = () => {
  return (
    <div className=" w-fit h-full rounded-tl-3xl overflow-y-scroll border-[#78786a] flex flex-col items-center gap-y-6 border-2 border-r-0 border-b-0 p-6">
      <div className="font-mono font-medium uppercase text-2xl flex items-center gap-x-4">
        <span className="material-symbols-outlined font-semibold text-2xl w-fit">
          celebration
        </span>
        <span className=" w-auto font-mono font-medium uppercase text-2xl">
          Events
        </span>
      </div>

      {/*{events.map((event) => (*/}
      {/*  <EventsCard*/}
      {/*    key={event.id}*/}
      {/*    image={event.image}*/}
      {/*    eventName={event.eventName}*/}
      {/*    eventDescription={event.eventDescription}*/}
      {/*  />*/}
      {/*))}*/}
      {/*<EventsCard />*/}
      {/*display only first data of event and show all query points*/}

      <AboutEventItem
        image={events[0].image}
        eventName={events[0].eventName}
        eventDescription={events[0].eventDescription}
        placeName={events[0].placeName}
        date={events[0].date}
        queryPoint={events[0].queryPoints}
        websiteLink={events[0].websiteLink}
      />

      {/*{events.map((event) => (*/}
      {/*  <AboutEventItem*/}
      {/*    key={event.id}*/}
      {/*    image={event.image}*/}
      {/*    eventName={event.eventName}*/}
      {/*    eventDescription={event.eventDescription}*/}
      {/*  />*/}
      {/*))}*/}
    </div>
  );
};

export default Events;
