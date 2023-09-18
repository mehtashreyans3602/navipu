import React from "react";
const AboutEventItem = ({
  image,
  eventName,
  eventDescription,
  placeName,
  date,
  queryPoint,
  websiteLink,
}) => {
  return (
    <section className="  overflow-y-auto bg-[#beecdd90] backdrop-blur-sm border-[#00201990] border-2 active:border-2 w-[20.9rem] h-full flex flex-col p-4 gap-y-4 justify-between rounded-2xl cursor-pointer ">
      {/* svg as a square image holder */}
      <section className="flex w-full items-center gap-2 justify-start">
        {image.map((image, index) => (
          <img

            className={`${index < 2 ? (index < 3 && 'w-[20%]') : 'w-[10%]'}  overflow-x-hidden rounded-xl h-40 object-cover border-2 border-[#46492f] transition-all hover:scale-x-110 hover:duration-500  hover:w-[40%]`}

            src={image}
            alt={eventName}
          />
        ))}
      </section>
      <div className="flex flex-col gap-y-1 items-start">
        <p className="text-xl text-[#002019] -active:text-white w-full capitalize">
          {eventName}
        </p>
        <button className="rounded-full w-full h-auto text-white text-sm items-center p-3 font-medium flex justify-center gap-x-4 capitalize bg-[#3b665b] ">
          <span className="material-symbols-outlined ">add_location</span>
          {placeName}
        </button>

        <p className="text-base text-[#46492f] text-left -active:text-white">
          {eventDescription}
        </p>
      </div>

      <hr className="w-full border rounded-full border-[#224E43]" />
      {
        queryPoint.map((event) => (
          <div className="flex flex-col gap-y-1 items-start">
            <p className="text-xl text-[#002019] active:text-white w-full capitalize">
              {event.queryPointType}
            </p>
            <button className="rounded-full w-full h-auto text-white text-sm items-center p-3 font-medium flex justify-center gap-x-4 capitalize bg-[#3b665b] ">
              {" "}
              <span className="material-symbols-outlined ">add_location</span> get
              directions
            </button>
            <p className="text-base text-[#46492f] text-left -active:text-white">
              {event.queryPointDescription}
            </p>
          </div>
        ))}



      <button className="rounded-full w-full h-auto  text-sm items-center p-3 font-medium flex justify-center gap-x-4 capitalize bg-[#ddeb78] border-2 border-[#1a1e00] text-[#1a1e00]">
        <span className="material-symbols-outlined">captive_portal</span>
        {websiteLink}
      </button>
    </section>
  );
};

export default AboutEventItem;
