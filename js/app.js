const fetchedImage = cldInstance
  .image('https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg')
  .setDeliveryType('fetch');

let letterArray = [
    {name: "CapitalA", img: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg"},
    {name: "CapitalB", img: "letter-b.png"},
    {name: "CapitalC", img: "letter-c.png"},
    {name: "CapitalD", img: "letter-d.png"},
    {name: "CapitalE", img: "letter-e.png"},
]

let grid = document.querySelector(".grid");
let scoreBoard = document.querySelector(".scoreBoard");
let popup = document.querySelector(".popup");
let playAgain = document.querySelector(".playAgain");
let clickBoard = document.querySelector(".clickBoard");
let imgs;
let letterID = [];
let letterSelected = [];
let matchingWon = 0;
let clicks = 0;

document.addEventListener("DOMContentLoaded", function () {
//define functions

    createBoard(grid, letterArray);
    arrangeLetter();
    playAgain.addEventListener("click", replay);

//add a click function for images

    imgs = document.querySelectorAll("img");
    Array.from(imgs).forEach(img =>
        img.addEventListener("click", matchCard)
    )
});


//createBoard function

function createBoard(grid, array) {
    popup.style.display = "none";
    array.forEach((arr, index) => {
        let img = document.createElement("img");
        img.setAttribute("src", "blank.png");
        img.setAttribute("data-id", index);
        grid.appendChild(img);
    })
}

// arrangeCard function

function arrangeLetter() {
letterArray.sort(() => 0.5 - Math.random())
}

function matchLetter(){
    let selected = this.dataset.id;
    letterSelected.push(letterArray[selected].name)

}