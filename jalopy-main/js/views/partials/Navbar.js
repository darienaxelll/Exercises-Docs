import {isLoggedIn} from "../../auth.js";

export default function Navbar(props) {
    const loggedIn = isLoggedIn();

    // everyone can see home
    let html = `
         <style>
            nav {
                display: flex;
                padding: 10px;
                flex-direction: row;
                margin-bottom: 10px;
            }
            
            a {
                display: flex;
                justify-content: center;
                text-decoration: none;
                color: #2f2fdc;
                padding: 5px 13px;
                font-family: 'Montserrat', sans-serif;
                font-size: medium;
            }
            
            #logo {
                width: 15%;
                text-align: center;
                font-size: x-large;
                color: darkorange;
                font-family: 'Roboto Slab', serif;
                margin-right: 800px;
            }
            
            #logo:hover {
                background-color: #E6ECF0;
                border-radius: 10px;
            }
            
            #login {
                margin-left: 20px;
                border: 2px solid #2c2ca1;
                border-radius: 50px;
                color: #2c2ca1;
            }
            
            #login:hover {
                border: 2px solid #7676ff;
                border-radius: 50px;
                color: #7676ff;
            }
            
            #dogFacts:hover {
                background-color: #E6ECF0;
                border-radius: 50px;
            }
            
            #about:hover {
                background-color: #E6ECF0;
                border-radius: 40px;
            }
            
            #register {
                background-color: #2c2ca1;
                border: 1px solid #2c2ca1;
                border-radius: 50px;
                color: white;
            }
            
            #register:hover {
                background-color: #7676ff;
                border: 1px solid #7676ff;
                border-radius: 50px;
            }
            
            div {
            margin: 0 10px;
            }
        </style>
        
        <nav>
            <div><a href="/" id="logo" data-link>Jalopy... <i class="fas fa-truck-pickup"></i></a></div>`;

    // everyone can see about
    html = html + `<div></div><a href="/about" data-link id="about">About</a></div>`;

    html += `<div><a href="/dogs" data-link id="dogFacts">Dog Facts</a></div>`;


    // only logged in can see user info and logout
    if(loggedIn) {
        html = html + `<div><a href="/users" data-link>User Info</a></div>
            <div><a href="/logout" data-link>Logout</a></div>`;
    } else {
        // if not logged in, can see login and register
        html = html + `<div><a href="/login" id="login" data-link>Login <i class="fas fa-user-circle"></i></a></div>
        <div><a class="jalopy-nav" href="/register" id="register" data-link>Register</a></div>`;
    }

    html = html + `</nav><hr>`;
    return html;
}