import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import Popup from './Popup'
import Form from './Form';
import Success from './Success';

test("render the request an invite button",() =>{
        render(<App/>)
        screen.getByTestId("button");
    }
)

test("open the popup", () =>
{ 
    render(<Popup/>)
})

test("Check the request form is showing or not",() =>
{
    render(<Form/>)
    screen.getAllByTestId("popup_form");
    
})

test("check all the input field is showning or not", () =>{
    render(<Form/>)
    screen.getByPlaceholderText("Fullname");
    screen.getByPlaceholderText("Email");
    screen.getByPlaceholderText("Confirm Email");
})

test("check whether the submit button is showning or not",() =>
{
    render(<Form/>)
    screen.getByTestId("button_Submit");
})

 test("whether success page load or not",()=>
 {
     render(<Success/>)
     screen.getByTestId("Alldone");

 })

 test("Check if Success page is showing ok button or not",()=>
 {
     render(<Success/>)
     screen.getByTestId("button_ok")
 })