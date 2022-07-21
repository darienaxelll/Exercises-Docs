import {showNotification} from "../messaging.js";
import {getUser} from "../auth.js";

const BASE_URI = `${BACKEND_HOST}/api/s3/download`;

export default function Home(props) {
    return `
    <header>
        <style>
            .slideshow-container {
              max-width: 100%;
              height: 300px;
              position: relative;
              margin: auto;
            }
            
            .mySlides {
              display: none;
            }
            
            .prev, .next {
              cursor: pointer;
              position: absolute;
              top: 50%;
              width: auto;
              margin-top: -22px;
              padding: 16px;
              color: white;
              font-weight: bold;
              font-size: 18px;
              transition: 0.6s ease;
              border-radius: 0 3px 3px 0;
              user-select: none;
            }
            
            .next {
              right: 0;
              border-radius: 3px 0 0 3px;
            }
            
            .prev:hover, .next:hover {
              background-color: rgba(0,0,0,0.8);
            }
            
            .text {
              margin-bottom: 60px;
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
        </style>
    </header>
    
    <body>
       <div class="slideshow-container fade">
            <div class="mySlides fade">
                 <img src="../../assets/jalopy1.jpeg" alt="car1" style = "width:100%">
                 <div class="text">Inset Text Here ...</div>
            </div>
            
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
              <span class="dot"></span> 
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
        setTimeout(showSlides, 4000); // Change image every 2 seconds
    }
}