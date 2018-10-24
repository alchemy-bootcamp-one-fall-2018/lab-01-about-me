function clickedButton() {
    var tagsChosen = document.querySelectorAll('input[name="element-button"]:checked');    
    
    for (var i = 0; i < tagsChosen.length; i++) {
        var tagCount = tagsChosen[i]
        console.log(tagCount)
    }

}