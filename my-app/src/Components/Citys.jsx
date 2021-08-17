import React from 'react'
import React, { useState, useEffect } from 'react';
import { getCity } from '../API/city';

const Citys = () => {
    
    const [infoProm, setInfoProm] = useState([]);
    
    useEffect(() => {
        getCity()
        .then(data => setInfoProm(data.results));
      }, []);
    
    
    
    return (
        <div className='Citys'>
            {infoProm.map(city => (
                <div>
                <h1>{city.name}</h1>
                <h2>{city.temp}</h2>
                <h2>{city.wind}</h2>
                </div>
            ))}
        </div>
};

export default TempProm;

