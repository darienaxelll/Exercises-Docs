const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

    // let trilingualUsers = users.filter(function(user){
    //     return user.languages.length >= 3
    // })

    let trilingualUsers = users.filter(user => user.languages.length >= 3);
    let usersEmails = users.map(user => user.email);
    let timeOfExperience = users.reduce((previousValue, currentValue) => previousValue + currentValue.yearsOfExperience, 0);

    // let listOfUsers = users.reduce(function(listOfNames){
    //      return users.map(user => user.name);
    // }, []);

    let longestEmail = users.reduce(function(longestEmail, email){
        if(email.email.length <  longestEmail.length) {
            return longestEmail;
        }
        return email.email;
    }, "")

    let listOfUsers = users.reduce((listOfNames) => users.map(user => user.name) , []);

    console.log('Your instructors are: ' + listOfUsers.join(' , ') + '.');
    console.log(trilingualUsers);
    console.log(usersEmails/users.length);
    console.log(timeOfExperience);
    console.log(longestEmail);



