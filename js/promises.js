let userInput = document.querySelector('#userInput');
let btn = document.querySelector('#submit');

function action() {

    function githubUser() {
        return fetch(`https://api.github.com/users/${userInput.value}/events/public`, {headers: {'Authorization': gitHubKey}})
            .then(response => response.json())
    }

    githubUser().then (info  => {
        console.log(info)
        console.log(info[0].created_at);
        document.querySelector('span').innerHTML = info[0].created_at;
    })
}

btn.addEventListener('click', action);

