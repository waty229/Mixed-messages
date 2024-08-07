// Array of selected quotes

const quotes = [
    "Winners never quit, and quitters never win.",
    "Don't be afraid to give up the good to go for the great.",
    "Don't let the fear of losing be greater than the excitment of winning.",
    "The question isn't who is going to let me; it's who is going to stop me.",
    "Every morning in Africa, a gazelle wakes up. It knows it must run faster than the fastest lion, or it will be killed. Every morning a lion wakes up, It knowsit must outrun the slowest gazelle, or it will starve to death. It doesn't matter whether you are a lion or a gazelle. When the sun comes up, you better start running."
];

// Generate a random index

const randomIndex = Math.floor(Math.random() * quotes.length);

// Getting a random quote

const randomQuote = quotes [randomIndex];

// Display the quote on your page

console.log(randomQuote);



