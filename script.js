
const postProfileName = document.getElementById("post-user-name")
const postProfileAddress = document.getElementById("post-user-address")
const userPostCaption = document.getElementById("user-post-caption")

//user constructor function..... this create and initialize object.
function userInfo(name, address, caption){
    this.name = name
    this.address = address
    this.caption = caption
    
}

// create the object

let user1 = new userInfo("Vincent van Gogh", "Zudert, Netherlands", "vincey1853 just took a few mushrooms lol")
postProfileName.innerHTML = `<p> ${user1.name} </p>`
postProfileAddress.innerHTML = `<p> ${user1.address} </p>`
userPostCaption.innerHTML = `<p> ${user1.caption}</p>`