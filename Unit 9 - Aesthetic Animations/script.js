// define variables for the various elements on the page
const consultButton = document.getElementById('upload-button');
const progressBar = document.getElementById('progress-bar');
const nameInput = document.getElementById('name-input');
const numInput = document.getElementById('num-input');
const foodInput = document.getElementById('food-input');
const output = document.getElementById('output');

// define helper variables for percent increase, intervalId, and person object
let percent = 0;
let intervalId = 0;
let person;

/*
  Initializes the width of the progressBar to be 0%. This function is necessary
  so that you can update the width of the progressBar later.
*/
const reset = () => {
  // TODO: initialize the width of the progressBar to 0% and the percent to 0
  progressBar.style.width = '0%';
  percent = 0;
}

/* 
  Moves the progress bar along and resets it once it reaches 100
*/
const stepProgressAnimation = (person) => {
  // TODO: increase the width of the progressBar by 1%
  percent += 1;
  progressBar.style.width = percent + '%';

  // TODO: if the progressBar percent is at 100, clear the interval, call init(),
  // and set the output innerHTML to give the person a prediction
  if (percent === 100) {
    clearInterval(intervalId);
    intervalId = 0;
    reset();
    
    if (person.number >= 50) {
      output.innerHTML = person.name + ", your luck is turning really good! " 
      + person.lastFood + " is a really lucky food!";
    } else {
      output.innerHTML = person.name + ", it's not looking good... You should probably avoid"
      + " mirrors and ladders this week... " + person.lastFood + " is a really unlucky food as well...";
    }
  }
}
/*
  Sets placeholder text for the output, creates a person object, and starts the animation
*/
const startProgressAnimation = () => {
  // TODO: set the innerHTML of the output to placeholder text while the progress bar loads
  output.innerHTML = "Consulting star charts...";

  // TODO: create a person object with name, number, and lastFood properties
  person = {name: nameInput.value, number: numInput.value, lastFood: foodInput.value};

  // TODO: if the intervalId is 0, setInterval with the playProgressAnimation and a delay
  // of 10
  if (intervalId === 0) {
    intervalId = setInterval(() => stepProgressAnimation(person), 10);
  }
}

// adds the startUploadAnimation function as an event listener to the consultButton
consultButton.addEventListener('click', startProgressAnimation);

// call the reset function 
reset();