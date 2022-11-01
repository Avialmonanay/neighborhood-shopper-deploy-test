$("#post").click( async () => {
    let file1 = $("#file1");
    var file2 = $("#file2");
    var file3 = $("#file3");
    var title = $("#productName").val();
    var zip_code = $("#productZipcode").val();
    var price = $("#productPrice").val();
    var description = $("#productDesc").val();
    
    var file1Data = file1[0].files[0]
    var file2Data = file2[0].files[0]
    var file3Data = file3[0].files[0]

    var main_image
    var second_image
    var third_image

    var user_id = 7


    console.log(file1Data, file2Data, file3Data)

    if (file1Data) {
    var formdata = new FormData()
    formdata.append("image", file1Data)
    await fetch("https://api.imgur.com/3/image", {
        method: "POST",
        headers: {
            Authorization: "Client-ID 4b896900311885a" 
        },
        body:formdata
    }).then(data => data.json()).then(data=>{
        console.log(data.data.link)
        main_image = data.data.link
    })
    }
    if (file2Data) {
        var formdata2 = new FormData()
        formdata2.append("image", file2Data)
        await fetch("https://api.imgur.com/3/image", {
            method: "POST",
            headers: {
                Authorization: "Client-ID 4b896900311885a" 
            },
            body:formdata2
        }).then(data => data.json()).then(data=>{
            console.log(data.data.link)
            second_image = data.data.link
        })
    }
    if (file3Data) {
        var formdata3 = new FormData()
        formdata3.append("image", file3Data)
        await fetch("https://api.imgur.com/3/image", {
            method: "POST",
            headers: {
                Authorization: "Client-ID 4b896900311885a" 
            },
            body:formdata3
        }).then(data => data.json()).then(data=>{
            console.log(data.data.link)
            third_image = data.data.link
        })
    }

    console.log(JSON.stringify({ title, zip_code, price, user_id, description, main_image, second_image, third_image }))
    const response = await fetch("/api/post/create", {
        method:'POST',
        body: JSON.stringify({ title, zip_code, price, user_id, description, main_image, second_image, third_image }),
        headers: { 'Content-Type': 'application/json' }
    })
    if (response.ok) {
        document.location.replace('/')
    }
    else {
        alert('post failed')
    }

    // postQuery(productName, productZipcode, productPrice, productDesc, file1Url, file2Url, file3Url)
});

    // const postQuery = (productName, productZipcode, productPrice, productDesc, file1Url, file2Url, file3Url) => {

        // }