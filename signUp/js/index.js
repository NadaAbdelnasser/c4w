// function getRespos()
// {
//     var myRequest = new XMLHttpRequest();
//     myRequest.onreadystatechange = function ()
//     {
//         if (this.readyState == 4 && this.status == 200)
//         {
//             console.log(this.responseText);
//         }
//     };
//     myRequest.open("POST", "http://localhost:3000/signUp", true);
//     myRequest.setRequestHeader("Content-Type", "application/x-www.form.urlencoded");
//     myRequest.send("fullName=husseinabdelrazek&userName=husss&email=hussein.dev@gmail.com&password=5469173&confirmPassword=5469173");
// }

// "fullName" : "amrhossamDevoo",
//     "userName" : "Devoo",
//         "email" : "amrhossam.dev@gmail.com",
//             "password" : "12390",
//                 "confirmPassword" : "12390"


// fetch('http://localhost:3000/signUp', { method: 'POST' })
//     .then(results => results.json())
//     .then(console.log);
// fetch('http://localhost:3000/login', { method: 'POST', userName: 'Devoo', password: '12390' })
//     .then(results => results.json())
//     .then(console.log);
// fetch('http://localhost:3000/login', { method: 'POST', body: { userName: 'Devoo', password: '12390' } })
//     .then(results => results.json())
//     .then(console.log);


const myForm = document.getElementById('myForm');
myForm.addEventListener('submit', function (e)
{
    e.preventDefault();
    const form = e.currentTarget;

    const formData = new FormData(form);
    const plainFormData = Object.fromEntries(formData.entries());
    const formDataJsonString = JSON.stringify(plainFormData);


    fetch('http://localhost:3000/signUp',
        {
            method: 'POST',
            body: formDataJsonString,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"

            }
        }
    ).then(function (response)
    {
        return response.json()
    }).then(function (response)
    {
        console.log(response);
        location.replace("../signIn/index.html");

    })
})


