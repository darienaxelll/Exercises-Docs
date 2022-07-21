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
                justify-content: space-between;
                margin-bottom: 10px;
            }
            
            a {
                text-decoration: none;
                color: #2f2fdc;
                padding: 5px 13px;
                font-family: 'Montserrat', sans-serif;
                font-size: medium;
            }
            
            #logo {
                font-size: xx-large;
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
            
            #about:hover {
                background-color: #E6ECF0;
                border-radius: 50px;
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
        </style>
        
        <nav>
            <a class="jalopy-nav" href="/" id="logo" data-link>Jalopy... <i class="fas fa-truck-pickup"></i></a>`;

    // everyone can see about
    html = html + `<a class="jalopy-nav" href="/about" data-link id="about">About</a>`;

    // only logged in can see user info and logout
    if(loggedIn) {
        html = html + `<a class="jalopy-nav" href="/users" data-link>User Info</a>
            <a href="/logout" data-link>Logout</a>`;
    } else {
        // if not logged in, can see login and register
        html = html + `<a class="jalopy-nav" href="/login" id="login" data-link>Login <i class="fas fa-user-circle"></i></a>
        <a class="jalopy-nav" href="/register" id="register" data-link>Register</a>`;
    }

    html = html + `</nav>`;
    return html;
}