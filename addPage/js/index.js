var userInformation = localStorage.getItem("userInfo");
var userInfoJson = JSON.parse(userInformation);

var userNameSpan = document.getElementById('userName');
// console.log(userNameSpan);
userNameSpan.innerHTML = userInfoJson.userName;

//////////////////////////

var userId = userInfoJson.id;
var userName = userInfoJson.userName;
var groupId = 1;
var all = userInfoJson;
console.log(userName);
var closeBtn = document.getElementById('closeBtn');


const myForm = document.getElementById('addPostForm');
myForm.addEventListener('submit', function (e)
{
    e.preventDefault();
    const form = e.currentTarget;
    const postAbstract = document.getElementById('postAbstract').value;


    // const formData = new FormData(form);
    // const plainFormData = Object.fromEntries( formData.entries());
    // console.log(plainFormData);
    // const formDataJsonString = JSON.stringify(plainFormData);
    // console.log(formDataJsonString);
    // final ={
    //     // "userId" : userId,
    //     // "userName" : userName,
    //     // "groupId" : groupId,
    //     // formDataJsonString
    // }
    const allData = {
        userId: userId,
        userName: userName,
        groupId: 1,
        postAbstract: postAbstract,
    }
    const finaly = JSON.stringify(allData);
    console.log(finaly);
    fetch('http://localhost:3000/addPost',
        {
            method: 'POST',
            body: finaly,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"

            }
        }
    ).then(function (response)
    {

        return response.status;
    }).then(function (status)
    {

        console.log(status);
        if (status == 200)
        {
            localStorage.setItem("postInfo", finaly);
            fetch('http://localhost:3000/homePage', {
                method: 'GET',
                body: {},
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            }
            )
            location.replace("../homePage/index.html")



        }

    })
})

closeBtn.addEventListener('click', function ()
{
    location.replace("../homePage/index.html");
})
