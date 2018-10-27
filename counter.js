/* exported clickedButton */
var elementResponse = document.getElementById('response');

function clickedButton() {
    var tags = document.querySelectorAll('input[name="element-button"]:checked');    
    var tag = tags[0];
    var list = document.querySelectorAll(tag.value);
    var count = list.length;
    var result = tag.value + '--' + count;
    var className = '';
    if(count > 5) {
        className = 'is-big';
    }
    elementResponse += '<li class ="' + className + '">' + result + '</li>';
    elementResponse.innerHTML = elementResponse;
}

