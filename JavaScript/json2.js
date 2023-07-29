var users =[
    {
        id:1,
        name:"John",
        age:30,
        gender:"male",
        child:0,
        srCit:true,
        vote:true

    },
    {
        id:2,
        name:"parth",
        age:40,
        gender:"male",
        child:1,
        srCit:false,
        vote:false

    },
    {
        id:3,
        name:"Neha",
        age:30,
        gender:"female",
        child:1,
        srCit:true,
        vote:true
    }
]

// user is female and having child
function q1(){
    var filuser = users.filter((user)=>{
        return user.gender == "female" && user.child>0
    })
    
    console.log(filuser)
}
//q1()
//user who is male and not having a child

function q2(){
    var filuser = users.filter((user)=>{
        return user.gender == "male" && user.child==0
    })
    
    console.log(filuser)
}
//q2()


// find all female user

function q3(){
    var filuser = users.filter((user)=>{
        return user.gender == "female"
    })
    
    console.log(filuser)
}
//q3()

// find all male user
function q4(){
    var filuser = users.filter((user)=>{
        return user.gender == "male"
    })
    
    console.log(filuser)
}
//q4()

// find all female user who is sr citizen

function q5(){
    var filuser = users.filter((user)=>{
        return user.gender == "female" && user.srCit==true
    })
    
    console.log(filuser)
}

//q5()

// find male who is not eligible for vote

function q6(){
    var filuser = users.filter((user)=>{
        return user.gender == "male" && user.vote==false
    })
    
    console.log(filuser)
}
q6()