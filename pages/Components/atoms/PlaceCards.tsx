import React from 'react';

interface PlaceCardsProps {
  PlaceName: string;
  setLatitude: (latitude: number) => void;
  setLongitude: (longitude: number) => void;
  onClick: (latitude: number, longitude: number) => void;
}

const PlaceCards: React.FC<PlaceCardsProps> = ({ PlaceName, setLatitude, setLongitude, onClick }) => {

  const handleCardClick = () => {
    // Example values, replace them with actual latitude and longitude values
    const latitude = 123.456; // Replace with the actual latitude
    const longitude = 789.012; // Replace with the actual longitude
  
    console.log("Latitude:", latitude);
    console.log("Longitude:", longitude);
  
    onClick(latitude, longitude);
  }
  

  return (
    <section onClick={handleCardClick} className='select-none group active:bg-[#78786a] border-[#78766a] border-2  bg-[#fcf9f1] group-active:border-[#78786a] group-active:border-2  w-full h-auto flex flex-col md:p-2 gap-2 justify-between rounded-md md:rounded-2xl cursor-pointer'>
      {/* svg as a square image holder */}
      <img className='rounded-md md:rounded-2xl w-full h-16 object-cover' src="https://maps.gstatic.com/tactile/pane/default_geocode-2x.png" alt="placeholder " />
      <p className='text-sm group-active:text-white'>{PlaceName}</p>
    </section>
  );
};

export default PlaceCards;
