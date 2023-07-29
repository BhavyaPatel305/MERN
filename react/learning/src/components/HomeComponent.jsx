import React from 'react'

export const HomeComponent = () => {

    var divstyle = {
        color: "red",
        backgroundColor: "yellow"
      }
      var a = 10;
      var name = "Bhavya";
      // Boolean values will never be printer on screen(Can only be used with ternery operator)
      var isActive = true;
      // You can never print an object on screen, you can only print address.city(for example) on screen
      var address = {
        city:"Ahmedabad",
        state:"Gujarat",
        street:{
          name:"1st street",
          pincode:5600112
        }
      }
    
      var employees = [
        {
          id: 1,
          name: "Bhavya",
          age: 21,
        },
        {
          id: 2,
          name: "parth",
          age: 22,
        },
        {
          id: 3,
          name: "Rahul",
          age: 23,
        },
      ];
    
    
      var employee = [
        {
          name:"Ram",
          salary: 100,
          gender:"M"
        },{
          name:"Shyam",
          salary: 200,
          gender:"M"
        },{
          name:"Melissa",
          salary: 500,
          gender:"F"
        },{
          name:"Heli",
          salary: 50,
          gender:"F"
        }
      ]
    
  return (
    

    <div>
        <div style={divstyle}>
        div style
    </div>

    <h1 style={{color:"red"}}>In-line style</h1>


    <h1>HELLO....</h1>
    {a}
    <h1>value of a = {a}</h1>
    <h2>name = {name}</h2>
    <h3>{isActive == true ? "active" : "disabled"}</h3>
    <h1>{address.city}</h1>
    <h1>{address.state}</h1>
    <h2>{address.street.name}</h2>
    {
        employee.map((emp)=>{
        return(
            <div>
            <h1>{emp.gender=="F" ? <p style={{color:"red"}}>{emp.name}</p> : <p style={{color:"green"}}>{emp.name}</p>}</h1>
            <h1>{emp.salary>100 ? <p><s>{emp.salary}</s></p> : <p>{emp.salary}</p>}</h1>
            </div>
        );
        })
    }
    

    {
        employees.map((employee)=>{
        return(
            <div>
            <h1>{employee.id}</h1>
            <h1>
                {
                employee.age>21 ? <p style={{color:"red"}}>{employee.name}</p> : <p style={{color:"green"}}>{employee.name}</p>
                }
            </h1>
            <h1>{employee.age}</h1>
            </div>
        );

        })
    }

    </div>
    )
}
