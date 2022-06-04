import React from 'react'
import WeatherListItem from './WeatherListItem'
export default function WeatherList({cities,tempType,deleteItem}) {
    return (
        <ul
            data-testid="itemlist"
        className="list-group" >
         {cities.map((city, idx) => {
            let val = 0;
            if (tempType === "C") {
                val = city.temp - 273.15;
            }
            if (tempType === "K") {
                val = city.temp;
            }
            if (tempType === "F") {
                val = ((city.temp - 273.15) * 9) / 5 + 32;
            }
            return (
                <WeatherListItem  key={idx} city={city} val={val} tempType={tempType} deleteItem={deleteItem}/>
                
            );
        })}
    </ul>
    )
}
