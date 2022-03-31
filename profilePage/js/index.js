var fullName = document.getElementById("fullName");
var userName = document.getElementById("userName");
var email = document.getElementById("email");
var userInformation = localStorage.getItem("userInfo");
var userInfoJson = JSON.parse(userInformation);
var closeIcon = document.getElementById("closeIcon");
var passContainer = document.getElementById("passContainer");
var editBtn = document.getElementById('editBtn');
var confirmBtn = document.getElementById('confirmBtn');
var pasChangeBtn = document.getElementById('pasChangeBtn');
var editPassContainer = document.getElementById('editPassContainer');
var passConfirmBtn = document.getElementById('passConfirmBtn');
fullName.setAttribute('value', userInfoJson.fullName);
userName.setAttribute('value', userInfoJson.userName);
email.setAttribute('value', userInfoJson.email);
console.log(closeIcon);
console.log(passContainer);
closeIcon.addEventListener('click', function ()
{
    // passContainer.setAttribute("style", "display: none");

    passContainer.style.display = "none ";
})



editBtn.addEventListener("click", function ()
{
    document.getElementById("fullName").disabled = false;
    document.getElementById("userName").disabled = false;
    document.getElementById("email").disabled = false;
    editBtn.innerHTML = "Confirm changes";
    editBtn.addEventListener("click", function ()
    {
        passContainer.style.display = "flex ";
        fullName = document.getElementById('fullName').value;
        userName = document.getElementById('userName').value;
        email = document.getElementById('email').value;
    })


})



confirmBtn.addEventListener("click", function ()
{



    var password = document.getElementById('password').value;
    var userInformation = localStorage.getItem("userInfo");
    var userInfoJson = JSON.parse(userInformation);
    const plainFormData = {
        userName: userInfoJson.userName,
        password: password,
    };
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

            const editName = {
                fullName: fullName,
                userName: userName,
                email: email,
                id: JSON.stringify(userInfoJson.id),
            }
            const final = JSON.stringify(editName);
            console.log(final);
            fetch('http://localhost:3000/updateNames', {

                method: 'PUT',
                body: final,
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"

                }

            }).then(function (response)
            {
                return response;
            }).then(function (response)
            {
                localStorage.setItem("userInfo", final);
                var lfullName = document.getElementById('fullName');
                var luserName = document.getElementById('fullName');
                var lemail = document.getElementById('fullName');
                lfullName.setAttribute('value', final.fullName);
                luserName.setAttribute('value', final.userName);
                lemail.setAttribute('value', final.email);
                passContainer.style.display = "none ";
                document.getElementById("fullName").disabled = true;
                document.getElementById("userName").disabled = true;
                document.getElementById("email").disabled = true;
                editBtn.innerHTML = "Edit";

                console.log(response);
                console.log("last done");
            })


        }

    })
})
pasChangeBtn.addEventListener('click', function ()
{
    editPassContainer.style.display = "flex ";

    passConfirmBtn.addEventListener('click', function ()
    {
        var oldPassword = document.getElementById('oldPassword').value;



        var userInformation = localStorage.getItem("userInfo");
        var userInfoJson = JSON.parse(userInformation);
        const plainFormData = {
            userName: userInfoJson.userName,
            password: oldPassword,
        };
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
            return response;
        }).then(function (response)
        {
            console.log(response);
            if (response.status == 200)
            {
                console.log('200200')
                var newPassword = document.getElementById('newPassword').value;
                var confirmNewPassword = document.getElementById('confirmNewPassword').value;
                const editPassword = {
                    password: newPassword,
                    confirmPassword: confirmNewPassword,
                    id: JSON.stringify(userInfoJson.id),

                };
                const edPassJson = JSON.stringify(editPassword);
                console.log('before last api');
                fetch('http://localhost:3000/updatePassword', {
                    method: 'PUT',
                    body: edPassJson,
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    }
                }).then(function (response)
                {
                    return response;
                }).then(function (response)
                {
                    console.log(response);
                    console.log('last api');
                    editPassContainer.style.display = "none ";
                })

            }


        })


    })

})
var passCloseIcon = document.getElementById('passCloseIcon');
passCloseIcon.addEventListener('click', function ()
{
    editPassContainer.style.display = "none ";
})