let i = 0;
let txt = 'Dog Facts...';
let speed = 700;

export default function DogFactsView(props) {
    let html = `
        <header>
            <style>
                #headerDiv {
                    display: flex;
                    justify-content: center;
                    font-size: xx-large;
                    margin-bottom: 20px;
                }
                 
                 #btnDiv {
                     display: flex;
                     justify-content: center;
                     margin-top: 20px;
                 }
                 
                 p {
                    padding: 10px;
                 }
                 
                 #pDiv {
                    border: 1px solid black;
                    border-radius: 10px;
                    background-color: #F5F5DC;
                    margin: 5px 0;
                 }
                 
            </style>
        </header>

        <div>
            <div id="headerDiv"></div>
            
            `;
            for(let j = 0; j < props.dogFacts.length; j++) {
                html += `
                <div id="pDiv">
                    <p>${props.dogFacts[j]}</p>
                </div>
                `
            }
            html += `
            <div id="btnDiv">
                <button>Show Fact</button>
            </div>
        </div>
        `;
    return html;
}

function typeWriter() {
    if (i < txt.length) {
        document.getElementById('headerDiv').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

export function DogFactsEvents() {
    typeWriter();
}