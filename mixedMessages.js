// Array of selected quotes

const quotes = [
    "Winners never quit, and quitters never win.",
    "Don't be afraid to give up the good to go for the great.",
    "Don't let the fear of losing be greater than the excitment of winning.",
    "The question isn't who is going to let me; it's who is going to stop me.",
    "Every morning in Africa, a gazelle wakes up. It knows it must run faster than the fastest lion, or it will be killed. Every morning a lion wakes up, It knowsit must outrun the slowest gazelle, or it will starve to death. It doesn't matter whether you are a lion or a gazelle. When the sun comes up, you better start running."
];

// Funtion to get random quote from hard-coded array.

const getRandomQuote = quotesArray => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  } 

// function to fetch a random quote from Quotable API.

const getQuotableQuote = async () => {
    try {
        const response = await
        fetch('https://api.quotable.io/random');
        const data = await response.json();

        const quote = data.content;
        const author = data.author || 'Anonymus';

        return `'${quote}' - ${author}`;
    } catch (error) {
        console.error('Error fetching quote:' , error);
        return 'An error occured while fetching the quote';
    }  
};

// Decide which method to use to get a quote.

const useHardcodedQuotes = Math.random() < 0.5; // 50% chance

if (useHardcodedQuotes) {
    const randomQuote = getRandomQuote();
    console.log(randomQuote);
} else {
    getQuotableQuote().then ((quote) => {
        console.log(quote);
    });
}
