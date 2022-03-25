## Making a plan

1) **Make a drawing of your app. Simple "wireframes"** 
1) **Look at the drawing and name the HTML elements you'll need to realize your vision**
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?** 
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

## HTML Setup (all these elements need an id)
MVP - minimum viable product: what is the least i can build and it still counts as my app
- input
    - Why do I need an input? We need to figure out what the user typed.
    - How? 
        - `const myCoolInput = document.getElementById('whatever-the-id-is')`
        - `myCoolInput.value`
- button
    - Why do I need a button? It tells the app "when" to do the work
    - How? 
```myButton.addEventListener('click', () => {
    // this is the cool zone
    // the area between curly braces in the 'event listener'
    // on click, the code in the cool zone will 'happen'
    // nothing in the cool zone will 'happen' until that click
})```
- some div or whatever to inject the name into
    - Why do we need this div? We need a place to display what the user typed.
    - How? `myDiv.textContent = whateverTheUserTyped`

## Events
- on button click . . .
    - Plain human language: we should see the name the user typed show up in the website
        - we get the word the user typed
        - we change the div's textContent to be equal to whatever the user typed