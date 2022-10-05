const quotes = [
    {
        quote:"여행은 언제나 돈의 문제가 아니고 용기의 문제다",
        author:"파울로 코엘료"
    },  
    {
        quote:"여행과 변화를 사랑하는 사람은 생명을 가진 사람이다",
        author:"바그너"
    },  
    {
        quote:"여행은 정신을 다시 젊어지게 하는 샘이다",
        author:"안데르센"
    },  
    {
        quote:"여행과 장소의 변화는 우리 마음에 활력을 선사한다",
        author:"세네카"
    },  
    {
        quote:"인생은 짧고, 세상은 넓다. 그러므로 세상 탐험은 빨리 시작하는 것이 좋다",
        author:"사이먼 레이븐"
    },  
    {
        quote:"여행은 다른 문화, 다른 사람을 만나고 결국에는 자기 자신을 만나는 것이다",
        author:"한비야"
    },  
    {
        quote:"여행은 목적지로 향하는 과정이지만, 그 자체로 보상이다",
        author:"스티브 잡스"
    },  
    {
        quote:"행복하게 여행하려면, 가볍게 여행해야 한다",
        author:"생 땍쥐베리"
    },  
    {
        quote:"진정한 여행이란 새로운 풍경을 보는 것이 아니라 새로운 눈을 가지는데 있다",
        author:"마르셀 푸르스트"
    },  
    {
        quote:"여행은 낯선 사람이 되었다가 다시 나로 돌아오는 탄력의 게임",
        author:"은희경"
    },  
]

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

const thisQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = thisQuote.quote;
author.innerText = `by.${thisQuote.author}`;
