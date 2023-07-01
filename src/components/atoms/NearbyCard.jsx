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
    <section onClick={handleCardClick} className='select-none group active:bg-blue-700 w-full h-auto border-2 p-1 md:p-2 gap-2 border-blue-700 rounded-md md:rounded-2xl cursor-pointer'>
      {/* svg as a square image holder */}
      <img className='rounded-md md:rounded-2xl h-auto object-cover' src="https://maps.gstatic.com/tactile/pane/default_geocode-2x.png" alt="placeholder " />
      <p className='text-sm truncate group-active:text-white'>{props.placename}</p>
    </section>
  );
};

export default NearbyCard;
