const texts = [
    [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequat."
    ],
    [
        "Second top text, Second top text, Second top text, Second top text",
        "Second bottom text, Second bottom text, Second bottom text, Second bottom text"
    ],
    [
        "Third top text, Third top text, Third top text, Third top text",
        "Third bottom text, Third bottom text, Third bottom text, Third bottom text"
    ]
]

let index = 0
let descTop = document.getElementById("desc-top")
let descBot = document.getElementById("desc-bot")

function updateText() {
    descTop.textContent = texts[index][0]
    descBot.textContent = texts[index][1]
}

let prev = document.getElementById("arrow-left")
let next = document.getElementById("arrow-right")

prev.addEventListener("click", () => {
    if(index != 0)
        index = index - 1
    else index = texts.length - 1 
    updateText()
})

next.addEventListener("click", () => {
    if(index != texts.length - 1)
        index = index + 1
    else index = 0
    updateText()
})

updateText()