# Lab 2: About Me Guessing Games

Your assignment will be to create an "About Me" HTML and JS project that contains structured, styled content about you
and a few guessing games for the user to play.

## Instructions

You will add this to yesterdays lab. **Make sure you do today's work on a new branch**

### Guessing Games

Give the visitors to your About Me page the option to play at least two guessing games 
that shows how fun-loving and interesting you are, and maybe include things about yourself 
that would not ordinarily appear in a portfolio page. Be creative and fun and whimsical. 
Or not. It's up to you! It's your project! (HINT: no one will check if this is real or not)

#### Game View

For each game, use a `<form id="about-me-form" onsubmit="event.preventDefault(); checkAboutMe();" onreset="resetAboutMe();">` 
(change name of function for each game) to hold the prompts and form controls for each game.

* Try and use a form control that matches the type of question being asked.
* Use consistent form control HTML group structuring and CSS classes for consistent styling. 
Some aspects may be common across the whole app, and some may be specific to each game.
* Add a submit button (`type="submit"`) for user to click to indicate they are submitting 
their answer(s) and a reset button with "Play Again" to allow user to play the game again. 
* Add a reset "Play again" button (`type="reset"`)  to allow user to play the game again. 
It clears the form (will happen automattically) but remember to reset styling and any 
feedback content in the corresponding function.
    
#### Game Logic

Also for each game, write a function that checks the users results and provides feedback

* Write textual responses to one or more elements with result ("You got 4/5 correct") _or_ hints ("Way off, guess higher")
* Enhance UI to give visual feedback (for example: success green, fail red) by adding classes to elements 
using `classList.add`, `element.disable = true`, hide/show images, etc.
* For games that track state between responses, use variables scoped _outside_ the function. 
They need to be uniquely named _across the entire app_.
* The reset function needs to reset state and styling. 
* Be careful with JavaScript's casual handling of string to numbers. Validate (check/test) your assumptions!

### Games

1. About me game
    1. Ask a series of **five or more** questions about you (based on the content of the html/css section, or not).
    1. You are only required to use text inputs, but feel free to explore checkboxes, radio button groups, 
    select drop downs, text areas, etc.)
    1. When they submit, report how they did (either 4/5 or 80%) along with whatever stylistic feedback you want to give.
1. Guess an answer game. This one uses the same form submittal to progressively move the user through the game.
    * If they got it wrong, tell them so, how many guesses left, and ideally a hint
    * If they got it right, tell them it was completed successfully
    * If they exhausted all guesses, modify page to show they did not guess in time
    * If they reset, start the game over
1. STRETCH GOALS: Moar games!
    * Reverse word
    * Determine if palindrome
    * Addition Calculator
     
### Technical Requirements for "About Me"

- HTML, CSS, and JavaScript must be cleanly written with correct indentation and syntax. 
Look at examples online and in your textbook. 
- Note that your JS must pass the rules in the linter that we installed. 
You need to have the linter running while developing your solution. Make sure to keep the included `.travis.yml`
- Use a separate file for each game (Don't forget to add a `<script>`)
- Your JS file contains a 'use strict' declaration at the top.
- Functions used outside each file need to be "exported".
- Add, Commit, Push process is being followed; it is evident in GitHub that commits are made regularly, and with good commit messages that explain the WHY of the commit.