import React from 'react'

export default function WeatherListItem({idx,city,val,tempType,deleteItem}) {
    return (
        <li 
          className="list-group-item d-flex justify-content-between"
    >
        <h3 >
            <b data-testid="name">{city.name}</b>➠{val.toFixed(1)} {tempType}
        </h3>
        <button
           
            type="submit"
            onClick={(evt) => deleteItem(city.name)}
            className="bg-transparent"
        >
            x
            {/* <i className="fas fa-times"></i> */}
        </button>
    </li>
    )
}
