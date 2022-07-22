import {showNotification} from "../messaging.js";
import {getUser} from "../auth.js";

const BASE_URI = `${BACKEND_HOST}/api/s3/download`;

export default function Home(props) {
    return `
    <header>
        <style>
            #package {
                display: flex;
                flex-direction: row;
            }
            
            #textBox  {
            margin-right: 20px;
            width: 50%;
            }
        
            .slideshow-container {
              max-width: 50%;
              height: 500px;
            }
            
            img {
            border: 1px solid black;
            border-radius: 10px;
            }
            
            .mySlides {
              display: none;
            }
            
            .next {
              right: 0;
              border-radius: 3px 0 0 3px;
            }
            
            .prev:hover, .next:hover {
              background-color: rgba(0,0,0,0.8);
            }
            
            .text {
              color: #f2f2f2;
              font-size: 15px;
              padding: 8px 12px;
              position: absolute;
              bottom: 8px;
              width: 100%;
              text-align: center;
            }
            
            .dot {
              cursor: pointer;
              height: 15px;
              width: 15px;
              margin: 0 2px;
              background-color: #bbb;
              border-radius: 50%;
              display: inline-block;
              transition: background-color 0.6s ease;
            }
            
            .active, .dot:hover {
              background-color: #717171;
            }
            
            .fade {
              animation-name: fade;
              animation-duration: 1.5s;
            }
            
            @keyframes fade {
              from {opacity: .4} 
              to {opacity: 1}
            }
            
            #textBox {
                font-family: 'Montserrat', sans-serif;
            }
            
            h2 {
                font-family: 'Roboto Slab', serif;
            }
        </style>
    </header>
    
    <body>
        <div id = 'package'>
                <div id ="textBox">
                    <h2>Welcome to Jalopy!</h2>
                
                    <p>The standard Lorem Ipsum passage, used since the 1500s</p>
    
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    
                    <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                </div>
            
        
              <div class="slideshow-container fade">                
                 <div class="mySlides fade">
                     <img src="../../assets/jalopy2.jpeg" alt="car2" style = "width:100%">
                     <div class="text">Inset Text Here ...</div>
                </div>
                
                <div class="mySlides fade">
                     <img src="../../assets/jalopy3.jpeg" alt="car3" style = "width:100%">
                     <div class="text">Inset Text Here ...</div>
                </div>
                
                <div style="text-align:center">
                  <span class="dot"></span> 
                  <span class="dot"></span> 
                </div>
           </div>
        </div>
    </body>

    `;
}

export function HomeEvents() {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 4000); // Change image every 4 seconds
    }
}