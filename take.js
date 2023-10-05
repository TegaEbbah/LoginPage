const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const email = document.getElementById("email")
const password = document.getElementById("password")
const submitForm = document.getElementById("submitForm")


let url = 'https://jsonplaceholder.typicode.com/posts'

const sendInfo = async (data) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "content-type": " application/json , charset-UTF-8",
        },

        body: JSON.stringify(data)


    })

    if (response.ok) {
        alert("post update succesful")
    }

    else {
        alert("post update failed")
    }

    console.log(response)
}



//let userData = await response.json();
//console.log(userData)



submitForm.addEventListener("click", (e) => {
    e.preventDefault()

    const data = {
        titles: `Post from ${lastName.value}`,
        bodys: `hello ${firstName.value} ${lastName.value} we are grateful for having you sign up with us`,
        userId: Math.floor((Math.random()) * 1000000)
    }



    firstName.value = ""
    lastName.value = ""
    email.value = ""
    password.value = ""


    sendInfo(data);
    console.log(data)


    //console.log(data)
    //console.log(JSON.stringify(data))



})

