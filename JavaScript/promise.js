/*
function getData(){

    
    var promise = new Promise((resolve, reject) => {

        setTimeout(() => {
        
            //resolve('Data received successfully');
            reject('Error in receiving data');
        }, 3000);
        

    })
    console.log(promise);

    promise.then((data) => {
        console.log(data);
    })
    promise.catch((error) => {
        console.log(error);
    })

}
*/

function getData(){
    var promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Data received successfully k")
        }, 3000)
        
    })

    promise.then((data)=>{
        console.log(data);
    });

    promise.catch((error)=>{
        console.log(error)
    })
}
getData()


function printData(){

    return new Promise((success,failure)=>{
        success("Data received successfuly")
    })
}

var x = printData()
console.log(x);

// x.then((data)=>{
//     console.log(data)
// })
// x.catch((data)=>{
//     console.log(data)
// })

printData().then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(data)
})
























/*function printData(){

    return new Promise((success, failure) => {
            
            setTimeout(() => {
                success('Data received successfully');
            }, 3000);
    })
}

// var x = printData()
// console.log(x);
// x.then((data) => {
//     console.log(data);
// })
// x.catch((error) => {
//     console.log(error);
// })

printData().then((data)=>{
    console.log(data);
}).catch((error) => {
    console.log(error);
})

*/