
const postProfileName = document.getElementById("post-user-name")
const postProfileAddress = document.getElementById("post-user-address")
const userPostCaption = document.getElementById("user-post-caption")
const postContentProfile = document.getElementById("post-content-profile")
//user constructor function..... this create and initialize object.
function UserInfo(name, address, caption, captionPerson) {
    this.name = name
    this.address = address
    this.caption = caption
    this.captionPerson = captionPerson
    
}
// create the object
    
    let user1 = new UserInfo("Vincent van Gogh", "Zudert, Netherlands", "just took a few mushrooms lol", "vincey1853")
    postProfileName.innerHTML = `<p> ${user1.name} </p>`
    postProfileAddress.innerHTML = `<p> ${user1.address} </p>`
    userPostCaption.innerHTML = `<p><span class="user-post-caption-person">${user1.captionPerson}</span> ${user1.caption}</p>`
    
    let user2 = new UserInfo("Gustave Courbet", "Ornans, France", "i'm feelin a bit stressed tbh", "gus1819")
    postProfileName.innerHTML = `<p> ${user2.name} </p>`
    postProfileAddress.innerHTML = `<p> ${user2.address} </p>`
    userPostCaption.innerHTML = `<p><span class="user-post-caption-person">${user2.captionPerson}</span> ${user2.caption}</p>`
    
