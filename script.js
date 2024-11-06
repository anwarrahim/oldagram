
const postProfileName = document.getElementById("post-user-name")
const postProfileAddress = document.getElementById("post-user-address")
const userPostCaption = document.getElementById("user-post-caption")

//
const postProfileNameTwo = document.getElementById("post-user-2-name")
const postProfileAddressTwo = document.getElementById("post-user-2-address")
const userPostCaptionTwo = document.getElementById("user-post-2-caption")

//
const postProfileNameThree = document.getElementById("post-user-3-name")
const postProfileAddressThree = document.getElementById("post-user-3-address")
const userPostCaptionThree = document.getElementById("user-post-3-caption")
// const postContentProfile = document.getElementById("post-content-profile")
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
    postProfileNameTwo.innerHTML = `<p> ${user2.name} </p>`
    postProfileAddressTwo.innerHTML = `<p> ${user2.address} </p>`
    userPostCaptionTwo.innerHTML = `<p><span class="user-post-caption-person">${user2.captionPerson}</span> ${user2.caption}</p>`

    let user3 = new UserInfo("Joseph Ducreux", "Paris, France", "gm friends! which coin are YOU stacking up today?? post below and WAGMI!", "jd1735")
    postProfileNameThree.innerHTML = `<p> ${user3.name} </p>`
    postProfileAddressThree.innerHTML = `<p> ${user3.address} </p>`
    userPostCaptionThree.innerHTML = `<p><span class="user-post-caption-person">${user3.captionPerson}</span> ${user3.caption}</p>`
