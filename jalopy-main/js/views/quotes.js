export default function QuotesView(props) {
    return `
    <header>
        <style>
        #title {
            text-align: center;
        }
        
        #my-quotes {
            margin: 30px 0;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: normal;
        }
            
        .flip-card {
          background-color: transparent;
          width: 300px;
          height: 200px;
          border: 1px solid #f1f1f1;
          perspective: 1000px; /* Remove this if you don't want the 3D effect */
          border-radius: 10px;
        }
        
        /* This container is needed to position the front and back side */
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }
        
        /* Do an horizontal flip when you move the mouse over the flip box container */
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        
        /* Position the front and back side */
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
        }
        
        /* Style the front side (fallback if image is missing) */
        .flip-card-front {
            width: 100%;
            background-color: #7575a8;
            border-radius: 10px;
            color: black;
        }
        
        /* Style the back side */
        .flip-card-back {
          background-color: #F5F5DC;
          color: black;
          transform: rotateY(180deg);
          border-radius: 10px;
        }
       
       .pFront {
       margin-top: 80px;
       margin-right: 30px;
       }
        </style>
    </header>
    
    <body>
    <div id="title">
         <h1>Quotes</h1>
    </div>
    <div id="my-quotes"></div>
    </body>
`;
}

function addQuote() {
let quotes = [
    {
        "quoteText":"War is organized murder and torture against our brothers.",
        "quoteAuthor":"Alfred Adler"
    },
    {
        "quoteText":"Follow sound business trends, not fashion trends.",
        "quoteAuthor":"Janice Dickinson"
    },
    {
        "quoteText":"I'm sure we, the American people, are the butt of jokes by those in power.",
        "quoteAuthor":"Alice Walker"
    },
    {
        "quoteText":"If the security forces continue to be dominated as they are now by political groups or sects, then the people won't trust in them - and the result will be civil war or fragmentation of the country.","quoteAuthor":"Adnan Pachachi"
    },
    {
        "quoteText":"We prefer world law in the age of self-determination to world war in the age of mass extermination.",
        "quoteAuthor":"John F. Kennedy"
    },
    {
        "quoteText":"I got a lovely check today from being a writer that I earned by sitting at home. That's rewarding.",
        "quoteAuthor":"Harvey Fierstein"
    },
    {
        "quoteText":"I think God's justice is making wrongs right.",
        "quoteAuthor":"Joel Osteen"
    },
    {
        "quoteText":"For it is mutual trust, even more than mutual interest that holds human associations together. Our friends seldom profit us but they make us feel safe. Marriage is a scheme to accomplish exactly that same end.",
        "quoteAuthor":"H. L. Mencken"
    },
    {
        "quoteText":"If science fiction is the mythology of modern technology, then its myth is tragic.",
        "quoteAuthor":"Ursula K. Le Guin"
    },
    {
        "quoteText":"Men, when they fight in movies, it's a very different style. Harrison Ford was so cool when he had the whip, and Bruce Lee was such an artist that you couldn't take your eyes off of him.",
        "quoteAuthor":"Lucy Liu"
    }
]

    for (let i = 0; i < quotes.length; i++) {

        console.log(quotes[i].quoteText);
        console.log(quotes[i].quoteAuthor);

        let div1 = document.createElement('div');
        div1.classList.add('flip-card')

        let div2 = document.createElement('div');
        div2.classList.add('flip-card-inner')

        let div3 = document.createElement('div');
        div3.classList.add('flip-card-front');

        let p1 = document.createElement('p');
        p1.classList.add('pFront');
        p1.innerHTML = quotes[i].quoteAuthor;

        let div4 = document.createElement('div');
        div4.classList.add('flip-card-back');

        let p2 = document.createElement('p');
        p2.innerHTML = quotes[i].quoteText;


        div1.appendChild(div2);
        div2.appendChild(div3);
        div3.appendChild(p1);
        div2.appendChild(div4);
        div4.appendChild(p2);

        document.querySelector('#my-quotes').appendChild(div1);
    }
}

export function QuotesEvents() {
    addQuote();
}