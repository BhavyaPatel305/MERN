var fetchUserData = () => {
    fetch("./fetch3.json", {
        method: "GET"
    }).then((response)=> {
        response.json().then((data) => {
            console.log(data)
        }).catch((err)=>{
            console.log(err)
        })
    })
}

fetchUserData()