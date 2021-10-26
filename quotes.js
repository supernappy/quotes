// initializing an array that stores quotes 
const quotesObjArray = [];

//create quotes object
function createQuotes (author, quote) {
    const obj = {
        author: author,
        quote: quote
    }
    return obj;
}

// add quotes object  to  0bject array 
function  addQuotes (author,quote) {
    quotesObjArray.push(createQuotes(author,quote));
}
//add a quote here 
addQuotes('k.Tolne', 'Kidness always come back.');
addQuotes('Kate Winslet', 'Life is short and it is here to be lived.');
addQuotes('George Shaw', 'Life isnt about finding yourself, Life is about creating yourself.');
addQuotes('Dhiman', 'We grow through what we go through.');
addQuotes('Mark Twain', 'Never regret anything that made you smile.');
addQuotes('Erin Hanson', 'You are your home');

// function that returns random quotes obj
 let generatedQuotes = () => {
     let randomIndex = Math.floor(Math.random() * quotesObjArray.length)
     return quotesObjArray[randomIndex];
 }
console.log(generatedQuotes());
console.log(generatedQuotes());
console.log(generatedQuotes());