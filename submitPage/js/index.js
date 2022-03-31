var userInformation = localStorage.getItem("userInfo");
var userInfoJson = JSON.parse(userInformation);

var userNameSpan = document.getElementById('userName');
var closeBtn = document.getElementById('closeBtn');
// console.log(userNameSpan);
userNameSpan.innerHTML = userInfoJson.userName;

closeBtn.addEventListener('click', function ()
{
    location.replace("../homePage/index.html");
})