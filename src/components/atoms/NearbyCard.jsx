import React, { useContext } from 'react';
import { LocationContext } from '../../context/Locationcontext';

const NearbyCard = (props) => {
  const { selectLocation } = useContext(LocationContext);



  const handleCardClick = async () => {
    // selectLocation(  props.lat, props.lng );
    selectLocation({ lat: parseFloat(props.lat), lng: parseFloat(props.lng) });
    console.log('event clicked');
  };
  return (
    <section onClick={handleCardClick} className='select-none group active:bg-[#78786a] border-[#78766a] border-2  bg-[#fcf9f1] group-active:border-[#78786a] group-active:border-2  w-full h-auto flex flex-col md:p-2 gap-2 justify-between rounded-md md:rounded-2xl cursor-pointer'>
      {/* svg as a square image holder */}
      <img className='rounded-md md:rounded-2xl w-full h-16 object-cover' src="https://maps.gstatic.com/tactile/pane/default_geocode-2x.png" alt="placeholder " />
      <p className='text-sm group-active:text-white'>{props.placename}</p>
    </section>
  );
};

export default NearbyCard;
