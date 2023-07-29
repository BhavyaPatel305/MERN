const fetchUserData = () => {
    fetch("https://reqres.in/api/users?page=2", {
        method: "GET",
    }).then((response) => {
        // return type of fetch is Promise<Response>
        // so it returns Response of type Promise
        // now to extract actual json data that we need to fetch
        // we need to use .json() function of Response class that is used by fetch
        // and this json() also return Promise type of data
        response.json().then((data)=>{
            console.log(data)
        }).catch((err)=>{
            console.log(err)
        })
    })
}

//fetchUserData()


const fetchUserData1 = async () => {
    var res = await fetch("https://reqres.in/api/users?page=2", {
      method: "GET",
    });
    var data = await res.json();
      console.log(data);
};
fetchUserData1();