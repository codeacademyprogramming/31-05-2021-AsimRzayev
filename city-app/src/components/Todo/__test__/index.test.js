import React from 'react';
import Todo from '../../Todo/'
import {render,fireEvent} from '@testing-library/react';
test('should test dummy function', () => {
   const {getByText,getByLabelText}=render(<Todo/>)
   expect(getByText('Weather list')).not.toBeUndefined();
   expect(getByText("Add")).not.toBeUndefined();
   expect(getByText("Clear All")).not.toBeUndefined();
   expect(getByText("Clear All")).not.toBeUndefined();
   expect(getByLabelText("Kelvin")).not.toBeUndefined();
   expect(getByLabelText("Celsius")).not.toBeUndefined();
   expect(getByLabelText("Fahrenheit")).not.toBeUndefined();
})

// test('should add City', () => {
//     const {getByText,getByLabelText,getByTestId}=render(<Todo/>)
//     fireEvent.change(getByLabelText("City Name"),{target:{value:'Baku'}})
//     fireEvent.click(getByText("Add"))
//     expect(getByTestId("testId")).not.toBeUndefined();
    
//     expect(getByTestId("testId").textContent).toEqual(
//         "Baku"
//     )
// })
test('should Change  Temp Input', () => {
    const {getByLabelText}=render(<Todo/>)
    const radio = getByLabelText('Fahrenheit')
expect(radio).not.toBeChecked();
fireEvent.click(radio);
expect(radio).toBeChecked();
})