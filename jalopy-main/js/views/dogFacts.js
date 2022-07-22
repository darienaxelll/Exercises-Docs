let i = 0;
let txt = 'Dog Facts...';
let speed = 800;

export default function DogFactsView(props) {
    return `
    <header xmlns="http://www.w3.org/1999/html">
        <style>
        body {
        }
        
        #header {
            text-align: center;
        }
        
        .container {
        border-radius: 10px;
        background-color: #ECEEFF;
        margin: 50px 0;
        padding: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        height: 100%;
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
            background-color: #83A7A7;
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
        <div>
            <h1 id="header"></h1>
        </div>
        
        <div class="container">
        
           <div class="flip-card">
                <div class="flip-card-inner">
                   <div class="flip-card-front">
                        <p class="pFront">Fact 1</p>
                    </div>
                    <div class="flip-card-back">
                        <p>Humans generally see better than dogs, but dogs see much better when there is low-light.</p>
                    </div>
                </div>
           </div>
            
           <div class="flip-card">
                <div class="flip-card-inner">
                   <div class="flip-card-front">
                         <p class="pFront">Fact 2</p>
                   </div>
                   <div class="flip-card-back">
                        <p>All dogs can be traced back 40 million years ago to a weasel-like animal called the Miacis which dwelled in trees and dens. The Miacis later evolved into the Tomarctus, a direct forbear of the genus Canis, which includes the wolf and jackal as well as the dog.</p>
                   </div>
               </div>
           </div>
           
           <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <p class="pFront">Fact 3</p>
                    </div>
                    <div class="flip-card-back">
                        <p>Small quantities of grapes and raisins can cause renal failure in dogs. Chocolate, macadamia nuts, cooked onions, or anything with caffeine can also be harmful.</p>
                   </div>
               </div>
               
           </div>
           
        </div>
    
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