Lab 3 Element Counter
This lab adds the ability to analyze your "about me" website by allowing the user to check the type of elements they would like to count. When they click a button, your new code will provide element counts for the selected elements

Branch
Make a branch for today's lab!

> git checkout -b element-count
Tools
For today, skip the form and just use checkboxes and a button
Use document.querySelectorAll to get the list of checked checkboxes
For each checked checkbox, use the associate value (p, input, div, etc.) to do another document.querySelectorAll to find how many of those elements are in the document. (HINT: you just need the .length of the returned NodeList).
Report back to the user the list of elements and respective counts
Steps
Create checkboxes and a button
Start by creating a series of checkboxes that all have the same name and each one has a value indicating what tag name in represents (p, section, input, etc). Try and include a broad set of tag names. Each checkbox should also have an associated label to visually show the user the corresponding tag name)

Create a function in a stand alone .js file and log a message to let you know the function fired

Wire the onclick of the button to call the function and validate that it logs the message

Gather the selected checkboxes, analyze DOM, set results
In your function, get a list of all the checked checkboxes, for example:

var tags = document.querySelectorAll('input[name="tags"]:checked');
Create your response text as you are looping through the list of checked tags

Get the value of the checkbox by calling tags[i].value and store in a tag variable
Call document.querySelectorAll(tag) and add the tag and length of the returned query into your response text
Response text might look like:

p - 5
section - 2
If you use a <pre> tag as your target, you can use \n to add a newline to your text. Otherwise, you can also build html, but you'll need to set your target response element using .innerHTML = instead of .textContent =

Stretch
SRP, or Single Responsibility Principal, means the we like things to do one and only one things. In this case, we are going to build up a dictionary of results, then have a second step to go through the diction and build up the response text

Create an empty object variable tagCount to which you can add properties
Loop the tags and for each one:
Get the value of the checkbox by calling tags[i].value and store in a tag variable
Call document.querySelectorAll(tag) and store the list in a variable (like list)
Store the length of the list in a new property whose key is the tag name: tagCount[tag] = list.length;
After looping through, console log tagCount and check that the value looks correct
Create a variable html whose value is: <ul>
Get a list of all of the keys in your tagCount by using:
var keys = Object.keys(tagCount);
Loop the keys again, and for each key (keys[i]):
Get the count property value off tags using the key
Append a string to html that is html for a li that has tag a count as text, for example:
<li>p 15</li>
Add the closing </ul> to html
Assign html as the .innerHTML of the element in which you are going to display the results