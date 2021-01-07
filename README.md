# lab-03b-calculator

# Addition

    Addition - GOAL: Display the sum of two numbers to the user HTML SETUP: We should see on the screen: two user input boxes, a plus sign, and a button (there is also a secret box where we put the result) - Why: do we need the input box? Because that's where the user input lives so we can add the numbers - Why: do we need the button? We need something to click to tell the computer to show the answer - Why: do we need a secret box? We need a place to make the answer actually visible - Validation: Look at the screen
Grab the dom elements (the input box and the button) in javascript (using the id attribute)
How: make variables for each dom element, using document.getElementById('whatever-id')
Validation: we can log the DOM elements out
Add an event listener to the button
Validation: console.log 'hello world' on click
Get access to what the user typed in
How: get the .value property of the input element
Validation: we can log out the user input (the number they type) on click (in the "cool zone" of the event handler)
Use the user input to calculate the results
Validation: log out the result to the console (in the cool zone)
Display that result to the user
How: we need to grab the secret box, and inject the answer into its textContent property (in the cool zone)
Validation: we should see it on the screen