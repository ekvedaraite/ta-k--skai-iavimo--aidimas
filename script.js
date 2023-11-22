var input = document.getElementById("input")
var p = document.getElementById("result")

input.addEventListener("input", function(){
    p.textContent = input.value
})


var numberOne = 1
var numberTwo = 1
var countOne = document.getElementById('countOne')
var countTwo = document.getElementById('countTwo')

var playerOneReachedLimit = false
var playerTwoReachedLimit = false

function showWinnerImage() {
    var winnerImage = document.getElementById("winnerImage")
    winnerImage.style.display = "block"

    setTimeout(function() {
        hideWinnerImage()
    }, 1500)
}

function hideWinnerImage() {
    var winnerImage = document.getElementById("winnerImage")
    winnerImage.style.display = "none"
}

function plusOnePlayerOne() {
    if (!playerOneReachedLimit && numberOne <= parseInt(input.value)){
        countOne.innerHTML = numberOne

        if (numberOne === parseInt(input.value)){
            countOne.style.color = "green"
            playerOneReachedLimit = true
            playerTwoReachedLimit = true
            showWinnerImage()
        } else {
            countOne.style.color = ""
        }

        numberOne++
    }
}



function plusOnePlayerTwo() {
    if (!playerTwoReachedLimit && numberTwo <= parseInt(input.value)){
        countTwo.innerHTML = numberTwo

        if (numberTwo === parseInt(input.value)){
            countTwo.style.color = "red"
            playerOneReachedLimit = true
            playerTwoReachedLimit = true
            showWinnerImage()
        } else {
            countTwo.style.color = ""
        }

        numberTwo++
    }
}

var resetButton = document.getElementById("buttonReset")

resetButton.addEventListener("click", function(){
    input.value = ""
    p.textContent = "0"
    numberOne = 1
    numberTwo = 1
    countOne.innerHTML = "0"
    countTwo.innerHTML = "0"
    countOne.style.color = ""
    countTwo.style.color = ""
    playerOneReachedLimit = false
    playerTwoReachedLimit = false
})

document.body.style.background = "#ECE3CE"

var h1Elements = document.getElementsByTagName("h1")
for (var i = 0; i < h1Elements.length; i++) {
  h1Elements[i].style.color = "#3A4D39"
}

var pElements = document.getElementsByTagName("p")
for(var i = 0; i < pElements.length; i++) {
    pElements[i].style.color = "#4F6F52"
}

var buttonElements = document.getElementsByTagName("button")
for(var i = 0; i < buttonElements.length; i++) {
    buttonElements[i].style.color = "#ECE3CE"
    buttonElements[i].style.background = "#3A4D39"
}
