
const postProfileName = document.getElementById("post-user-name")
const postProfileAddress = document.getElementById("post-user-address")
const userPostCaption = document.getElementById("user-post-caption")

//user constructor function..... this create and initialize object.
function userInfo(name, address, caption, captionPerson){
    this.name = name
    this.address = address
    this.caption = caption
    this.captionPerson =captionPerson
    
}

// create the object

let user1 = new userInfo("Vincent van Gogh", "Zudert, Netherlands", "just took a few mushrooms lol", "vincey1853")
postProfileName.innerHTML = `<p> ${user1.name} </p>`
postProfileAddress.innerHTML = `<p> ${user1.address} </p>`
userPostCaption.innerHTML = `<p><span class="user-post-caption-person">${user1.captionPerson}</span> ${user1.caption}</p>`
