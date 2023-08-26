import React, { createContext, useState } from 'react';

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const selectLocation = (placename,lat,lng) => {
    setSelectedLocation(placename,lat,lng);
  };

  return (
    <LocationContext.Provider value={{ selectedLocation, selectLocation }}>
      {children}
    </LocationContext.Provider>
  );
};
