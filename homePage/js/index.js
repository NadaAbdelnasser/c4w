var userInformation = localStorage.getItem("userInfo");
userInformation = JSON.parse(userInformation);
var id = userInformation.id;
console.log(id);


var final = {
    id: JSON.stringify(id)
}
var sFinal = JSON.stringify(final);
console.log(sFinal);
fetch('http://localhost:3000/homePage', {
    method: 'GET',
    sFinal,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}
).then(function (response)
{
    console.log('first then');
    return response.json();
}).then(function (response)
{
    console.log('second then');
    console.log(response);
})
