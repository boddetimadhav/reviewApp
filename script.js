const reviews = [
    {
        id : 1,
        name: "KL Rahul",
        job: "Opener",
        img: "https://wallpaperaccess.com/full/3109955.jpg",
        text:"Hi, I'm KL Rahul."
    },
    {
        id : 2,
        name: "Rohit sharma",
        job: "Opener",
        img: "https://m.economictimes.com/thumb/msid-70119616,width-1200,height-900,resizemode-4,imgsize-160034/rohit-sharma-the-odi-cricket-phenomenon.jpg",
        text:"Hi, I'm Rohit Sharma"
    },
    {
        id : 3,
        name: "Virat Kohli",
        job: "Middle Order Batsman",
        img: "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170661/virat-kohli.jpg",
        text:"Hi, I'm Rohit Sharma"
    },

]

const img = document.getElementById("player-img")
const name = document.getElementById("playerName")
const job = document.getElementById("job")

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

let currentPlayer = 1;

window.addEventListener('DOMContentLoaded',function() {
    showPerson(currentPlayer)
    
})

function showPerson(person) {
const item = reviews[person]
img.src = item.img
    name.textContent = item.name
    job.textContent = item.job
}

prevBtn.addEventListener("click",function(){
    currentPlayer--;
    if(currentPlayer < 0){
        currentPlayer = reviews.length - 1;
    }
    showPerson(currentPlayer)
})
nextBtn.addEventListener("click",function(){
    currentPlayer++;
    if(currentPlayer>reviews.length-1){
        currentPlayer = 0;
    }
    showPerson(currentPlayer)
})
randomBtn.addEventListener('click',function(){
    currentPlayer = Math.floor(Math.random()*reviews.length)
    showPerson(currentPlayer)
})