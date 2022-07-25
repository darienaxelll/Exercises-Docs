let i = 0;
let txt = 'Dog Facts...';
let speed = 700;

export default function DogFactsView(props) {
    for (let j = 0; j < props.dogFacts.length; j++) {
        document.querySelector('#clickMe').addEventListener('click', function (event) {
            document.querySelector('#container').innerHTML += props.dogFacts[j];
        })
    }

    return `
    <header>
        <style>

        </style>
    </header>
    
    <body>
        <div>
            <h1 id="header"></h1>
        </div>
        
        <div class="container"></div>
        <button id="clickMe">Click Me</button>
    
    </body>
`;
}

function typeWriter() {
    if (i < txt.length) {
        document.getElementById('header').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}


export function DogFactsEvents() {
    typeWriter()
}