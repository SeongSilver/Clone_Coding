const quotes = [
    {
        quote : "삶이 있는 한 희망은 있다",
        author : "키케로"
    },
    {
        quote : "산다는것 그것은 치열한 전투이다",
        author : "로랑로랑"
    },
    {
        quote : "사막이 아름다운 것은 어딘가에 샘이 숨겨져 있기 때문이다",
        author : "생떽쥐베리"
    },
    {
        quote : "언제나 현재에 집중할수 있다면 행복할것이다.",
        author : "파울로 코엘료"
    },
    {
        quote : "진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해",
        author : "찰리 채플린"
    },
    {
        quote : " 직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다",
        author : "엘버트 허버드"
    },
    {
        quote : "신은 용기있는자를 결코 버리지 않는다",
        author : "켄러"
    },
    {
        quote : "피할수 없으면 즐겨라",
        author : "로버트 엘리엇"
    },
    {
        quote : "1퍼센트의 가능성, 그것이 나의 길이다.",
        author : "나폴레옹"
    },
    {
        quote : "행복한 삶을 살기위해 필요한 것은 거의 없다.",
        author : "마르쿠스 아우렐리우스 안토니우스"
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author} -`;