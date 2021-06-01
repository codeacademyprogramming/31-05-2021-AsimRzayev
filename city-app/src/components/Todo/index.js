import React, { useState, useCallback } from "react";

const api = {
    key: "c36c403bb67eb86c13bff234dcc06ae6",
    base: "https://api.openweathermap.org/data/2.5/",
};
export default function Todo() {
    const [query, setQuery] = useState("");
    let [cities, setcity] = useState([]);
    const [tempType, setTempType] = useState("K");
    const addCity = (evt) => {
        if (query !== "") {
            fetch(
                `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${api.key}`
            )
                .then((res) => res.json())
                .then((result) => {
                    setQuery("");

                    setcity([
                        ...cities,
                        {
                            name: result.name,
                            temp: result.main.temp,
                        },
                    ]);
                });
        }
    };

    const deleteItem = useCallback(
        (cityName) => {
            setcity(cities.filter((city) => city.name !== cityName));
        },
        [cities]
    );
    const handleForm = (evt) => {
        evt.preventDefault();
    };
    return (
        <div className="container mt-5">
            <div className="card row">
                <div className="card-header">Weather list</div>
                <div className="card-body">
                    <form id="todo-form" onSubmit={handleForm} name="form">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                            <label
                            className="form-input-label"
                            htmlFor="todo"
                        >
                           City Name
                        </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="todo"
                                    id="todo"
                                    placeholder="City Add"
                                    onChange={(e) => setQuery(e.target.value)}
                                    value={query || ""}
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-danger"
                            onClick={addCity}
                        >Add
                        </button>
                    </form>
                </div>

                <div className="card-body">
                    <hr />
                    <h5 className="card-title" id="tasks-title">
                        City Weathers
                    </h5>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            onClick={(evt) => setTempType("K")}
                            value={tempType}
                            defaultChecked={true}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                        >
                            Kelvin
                        </label>
                    </div>
                    <div className="form-check">
                        
                        <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            value={tempType}
                            onClick={(evt) => setTempType("C")}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault2"
                        >
                            Celsius
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault3"
                            value={tempType}
                            onClick={(evt) => setTempType("F")}
                        />

                        <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault3"
                        >
                            Fahrenheit
                        </label>
                    </div>
                    <hr />
                    <ul data-testid="testId" className="list-group" >
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
                                <li 
                                    key={idx}
                                    className="list-group-item d-flex justify-content-between"
                                >
                                    <h3>
                                        {city.name}➠{val.toFixed(1)} {tempType}
                                    </h3>
                                    <button
                                        type="submit"
                                        onClick={(evt) => deleteItem(city.name)}
                                        className="bg-transparent"
                                    >
                                        <i className="fas fa-times"></i>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                    <hr />
                    <a
                        id="clear-todos"
                        className="btn btn-dark"
                        href="/"
                        onClick={(evt) => setcity([])}
                    >
                        Clear All
                    </a>
                </div>
            </div>
        </div>
    );
}
