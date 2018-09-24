var quotes = [
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "The pessimist sees difficulty in every oppurtunity. The oppurtunist sees the oppurtunity in every difficulty. - Winston Churchill",
    "Don\'t let yesterday take up too much of today. - Will Rogers",
    "You learn more from failure than from success. Don\'t let it stop you. Failure builds character. - Unknown",
    "It\'s not whether you get knocked down, it\'s whether you get up. - Vince Lombardi",
    "If you are working on something that you really care about, you don\'t have to be pushed. The Vision pulls you. - Steve Jobs",
    "People who are crazy enough to think they can change the world, are the ones who do. - Rob Siltname",
    "Failure will never overtake me if my determination to succeed is strong enough. - OF Mandine",
    "Entrepreneurs are great at dealing with uncertainty and also very good at minimizing the risk. That\'s the classic entreprenuer. - Mohmish Pabrai",
    "We may encounter many defeats but we must not be defeated. - Maya Angelou"
]

var body = document.querySelector("body");
var button = document.querySelector("#onlyBtn");
var quote = document.querySelector("#quoteDisplay");
var h1 = document.querySelectorAll("h1");
var i;

function newQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
    var color = randomColor();
    body.style.backgroundColor = color;
    button.style.backgroundColor = color;
    quote.style.color = color;
    for (i = 0; i < h1.length; i++) {
        h1[i].style.color = color;
    }
}

function randomColor() {
    // pick a "red" from 0-255
    var r = Math.floor(Math.random() * 256);
    // pick a "green" from 0-255
    var g = Math.floor(Math.random() * 256);
    // pick a "blue" from 0-255;
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}