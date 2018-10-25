
/* exported countPElements */
/* exported countSectionElements */
/* exported countInputElements */

function countPElements() {
    var tags = document.querySelectorAll('p');
    var countP = tags.length;
    console.log(tags.length);
    countPResponse.textContent = 'P:  ' + countP;
}

function countSectionElements() {
    var tags = document.querySelectorAll('section');
    var countSection = tags.length;
    console.log(tags.length);
    countSectionResponse.textContent = 'Section: ' + countSection;
}
function countInputElements() {
    var tags = document.querySelectorAll('input');
    var countInput = tags.length;
    console.log(tags.length);
    countInputResponse.textContent = 'Input: ' + countInput;
}