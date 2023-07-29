var d; // Global variable
const sendData = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            resolve('Data received successfuly')
        }, 3000)
    })
}

async function getData(){
    var data = await sendData();
    console.log(data)
    d = data
    console.log(d)
}

//getData()

const data1 = async () => {
    var data = await sendData();
    console.log(data)
    d = data
    console.log(d)
}
data1()