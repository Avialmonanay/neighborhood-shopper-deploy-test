const file = document.getElementById("file")
const url = document.getElementById("url")

file.addEventListener("change", ev => {
    const formdata = new FormData()
    formdata.append("image", ev.target.files[0])
    console.log(ev.target)
    fetch("https://api.imgur.com/3/image", {
        method: "POST",
        headers: {
            Authorization: "Client-ID 4b896900311885a" 
        },
        body:formdata
    }).then(data => data.json()).then(data=>{
        url.innerText=data.data.link
    })
})
