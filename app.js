// Grab some DOM elements with getElementById
const nameInputEl = document.getElementById('name-input');
const nameButtonEl = document.getElementById('name-button');
const greetingEl = document.getElementById('greeting-div');

// before moving on to the next "step", prove to yourself that you finished this step

// add event listeners
nameButtonEl.addEventListener('click', () => {
    // CDD comment-driven development
    // - Plain human language: we should see the name the user typed show up in the website
    //     - we get the word the user typed
    const whatTheUserTyped = nameInputEl.value;
    //     - we change the div's textContent to be equal to whatever the user typed
    // how do i get this to say "Hello, my name is shelly?"
    // greetingEl.textContent = 'Hello, my name is ' + whatTheUserTyped;
    greetingEl.textContent = `Hello, my name is ${whatTheUserTyped}`; // template lieral

    // clear out the input
    nameInputEl.value = '';
});