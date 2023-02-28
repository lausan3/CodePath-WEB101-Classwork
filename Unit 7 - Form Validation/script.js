// Use the DOM method `.getElementById()` to find your form
const form = document.getElementById('myForm');

// 
const validateForm = (event) => {
    // Get the form elements
    const elements = document.getElementById("myForm").elements;

    // Create your for loop
    for (let i = 0; i < elements.length - 1; i++) {
        if (elements[i].value == "") {
            console.log("Element " + i + " was empty!")
        } else {
            console.log(elements[i].value);
        }
    }

    event.preventDefault();
  }
  
  // Add the an event listener to validate your form
  form.addEventListener('submit', validateForm);