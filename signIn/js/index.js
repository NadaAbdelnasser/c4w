

const myForm = document.getElementById('myForm');
myForm.addEventListener('submit', function (e)
{
    e.preventDefault();
    const form = e.currentTarget;

    const formData = new FormData(form);
    const plainFormData = Object.fromEntries(formData.entries());
    const formDataJsonString = JSON.stringify(plainFormData);


    fetch('http://localhost:3000/login',
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
        if (response.message == 'Success')
        {
            localStorage.setItem("userInfo", JSON.stringify(response.user));
            console.log(response.user.id);
            location.replace("../homePage/index.html")
            // const final = {
            //     id: JSON.stringify(response.user.id)
            // }
            // const sFinal = JSON.stringify(final);
            // console.log(sFinal);
            // fetch('http://localhost:3000/homePage', {
            //     method: 'GET',
            //     sFinal,
            //     headers: {
            //         "Content-Type": "application/json",
            //         "Accept": "application/json"
            //     }
            // }
            // ).then(function (response)
            // {
            //     console.log('first then');
            //     return response;
            // }).then(function (response)
            // {
            //     console.log('second then');
            //     console.log(response);
            // })
        }

    })
})
console.log('fin');

// const myForm = document.getElementById('myForm');
// myForm.addEventListener('submit', function (e)
// {
//     e.preventDefault();
//     const formData = new FormData(this);
//     fetch('http://localhost:3000/login',
//         {
//             method: 'POST',
//             body: formData
//         }
//     ).then(function (response)
//     {
//         return response.text();
//     }).then(function (text)
//     {
//         console.log(text);
//     }).catch(function (error)
//     {
//         console.error(error);
//     })
// })
// "fullName" : "amrhossamDevoo",
//     "userName" : "Devoo",
//         "email" : "amrhossam.dev@gmail.com",
//             "password" : "12390",
//                 "confirmPassword" : "12390"
// 'Access-Control-Allow-Origin': '*'