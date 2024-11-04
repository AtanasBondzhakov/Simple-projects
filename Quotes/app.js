const quoteRef = document.querySelector('.quote');
const authorRef = document.querySelector('.person');
const button = document.querySelector('#new-quote');

button.addEventListener('click', onNewQuote);

const quotes = [
    {
        quote: 'You must be the change you wish to see in the world.',
        author: 'Mahatma Gandhi'
    },
    {
        quote: 'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
        author: 'Mother Teresa'
    },
    {
        quote: 'The only thing we have to fear is fear itself.',
        author: 'Franklin D. Roosevelt'
    },
    {
        quote: 'Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate: only love can do that.',
        author: 'Martin Luther King Jr.'
    },
    {
        quote: 'Do one thing every day that scares you.',
        author: 'Eleanor Roosevelt'
    },
    {
        quote: 'It is during our darkest moments that we must focus to see the light.',
        author: 'Aristotle'
    },
    {
        quote: 'Be yourself; everyone else is already taken.',
        author: 'Oscar Wilde'
    },
    {
        quote: 'The only impossible journey is the one you never begin.',
        author: 'Tony Robbins'
    },
    {
        quote: 'Only a life lived for others is a life worthwhile.',
        author: 'Albert Einstein'
    },
    {
        quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
        author: 'Nelson Mandela'
    },
    {
        quote: 'Life is really simple, but we insist on making it complicated.',
        author: 'Confucius'
    },
    {
        quote: 'Life itself is the most wonderful fairy tale.',
        author: 'Hans Christian Andersen'
    },
    {
        quote: 'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.',
        author: 'Dr. Seuss'
    },
    {
        quote: 'I find that the harder I work, the more luck I seem to have.',
        author: 'Thomas Jefferson'
    },
    {
        quote: 'Let the future tell the truth, and evaluate each one according to his work and accomplishments. The present is theirs; the future, for which I have really worked, is mine.',
        author: 'Nikola Tesla'
    },
]

function onNewQuote() {
    const random = Math.floor(Math.random() * quotes.length);

    quoteRef.textContent = quotes[random].quote;
    authorRef.textContent = quotes[random].author;
}