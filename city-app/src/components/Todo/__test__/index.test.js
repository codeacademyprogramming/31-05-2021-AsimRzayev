import React from 'react';
import Weather from '../../Todo/'
import WeatherList from '../../Todo/WeatherList'
import WeatherListItem from '../../Todo/WeatherListItem'
import {render,fireEvent} from '@testing-library/react';
test('should test dummy function', () => {
   const {getByText,getByLabelText}=render(<Weather/>)
   expect(getByText('Weather list')).not.toBeUndefined();
   expect(getByText("Add")).not.toBeUndefined();
   expect(getByText("Clear All")).not.toBeUndefined();
   expect(getByText("Clear All")).not.toBeUndefined();
   expect(getByLabelText("Kelvin")).not.toBeUndefined();
   expect(getByLabelText("Celsius")).not.toBeUndefined();
   expect(getByLabelText("Fahrenheit")).not.toBeUndefined();
})
describe("WeatherList",()=>{
    test('should render Weather details  bycount', () => {
        const cities=   [{
            name: "Qazax",
            temp: 20,
        }]
      const {getAllByTestId} =render(<WeatherList cities={cities}/>)
        expect(getAllByTestId("itemlist").length).toBe(cities.length);
    })
})

test('should add City', () => {
    const city=   {
        name: "Baku",
        temp: 20,

    }
    const {getByText,getByLabelText}=render(<Weather />)

    const { getByTestId }=render(<WeatherListItem city={city} val={city.temp}/>)
    fireEvent.change(getByLabelText("City Name"),{target:{value:city.name}})
    fireEvent.click(getByText("Add"))
    expect(getByTestId("name").textContent).toEqual(
       city.name
    )
})
test('should  removing city', () => {
   
    const cities=   [{
        name: "Qazax",
        temp: 20,
    }]
    let deleteItem=()=>{
    cities.filter((city) => city.name !== cities.name)
    }
  const {getAllByTestId} =render(<WeatherList cities={cities} deleteItem={deleteItem}/>)
  const {getByText} =render(<WeatherListItem city={cities[0].name} val={cities[0].temp}/>[0])
  fireEvent.click(getByText(`x`))
  expect(getAllByTestId("itemlist").length).not.toBe(cities.length+1);
   
})

test('should Change  Temp Input', () => {
   
    const {getByLabelText}=render(<Weather />)
    const radio = getByLabelText('Fahrenheit')
expect(radio).not.toBeChecked();
fireEvent.click(radio);
expect(radio).toBeChecked();
})