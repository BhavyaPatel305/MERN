var fetchUserData = () => {
    fetch("https://dummy.restapiexample.com/api/v1/employees", {
        method: "GET"
    }).then((response) => {
        response.json().then((data)=>{
            console.log(data)
        }).catch((err)=>{
            console.log(err)
        })
    })
}
fetchUserData()