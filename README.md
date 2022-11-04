Simple jQuery Drills
Objective
Practice using the fundamentals of jQuery that were explored in lecture.

Setup
Create a new project folder and connect it to a GitHub repository. Initialize your project with a README.md that has a brief description of the purpose of this assignment, along with the title "jQuery Drills".
Create an index.html file and an app.js file and link the two together.
Create a script tag in the index.html and link to the jQuery CDN.
Tasks
In app.js, make sure all the HTML has loaded before using jQuery. (hint)
Create an <input> with a type="submit", id="btnSubmit", and value="Submit" in the index.html. Open the index.html in a browser and verify that a button appears.
In app.js and use jQuery to select the <input> element you just created by the id.
Add a click event handler to the <input> button that will alert a message in the browser when the button is clicked. (hint)
In the index.html, create a <form> element with an <input type="text"> field and the <input type="submit"> you already created.
In app.js when the form is submitted, alert the value of the text input field. (hint) (hint)
If the user has typed in the input field then the button should be enabled, otherwise the button should be disabled. (hint)
Create a div element and append it to the body.
When the user types in the input field and clicks submit, append the text in an h2 element to the div
When the user mouses over the h2 element, assign it a new background color and border radius. (hint)
Great job! Now, comment out the code for creating the h2 and we are going to work on creating a list instead
Use jQuery to create an unordered list and append it to the body
When the user submits the form, append the text as list item to the unordered list
When the user clicks on the li element, assign it a random color.
When the user double clicks on the list, remove the item that was clicked on. (hint)
Hints
jQuery on method: http://api.jquery.com/on/
jQuery click method: https://api.jquery.com/click/
Math.random() can be used to generate a random number
RGB colors range from rgb(0, 0, 0) for black to rgb(255, 255, 255) for white
You will want to generate 3 random numbers between 0 and 255 and set the RGB values using jQuery
