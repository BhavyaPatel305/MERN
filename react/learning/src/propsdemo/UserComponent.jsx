import React, {useState} from 'react'
import { UserList } from './UserList'

export const UserComponent = (props) => {

  // use state method will update the state of users array whenever we call setusers method
  // consider it as an object
  // state = {users:[]}
  // this object has a method called setusers
  // which will update this users array
  // using this useState , we are updating the virtual dom which will then update dom

  let [users, setusers] = useState([
    {
          id: 1,
          name: "amit",
          age: 100,
        },
        {
          id: 2,
          name: "ram",
          age: 39,
        },
        {
          id: 3,
          name: "neha",
          age: 31,
        },

  ]);


  // using this way when deleting it was not updating or deleting anything on screen
  // var users = [
  //   {
  //     id: 1,
  //     name: "amit",
  //     age: 20,
  //   },
  //   {
  //     id: 2,
  //     name: "ram",
  //     age: 30,
  //   },
  //   {
  //     id: 3,
  //     name: "neha",
  //     age: 31,
  //   },
  // ];

  // react hooks --> useState
  function deleteUser(id){
    users = users.filter((user)=>{
      return user.id != id;
    })
    // If length of users becomes 0 then display message :=> no records found
    

    console.log("after delete....", users);
    // this will basically call the method setusers which will update the users array created using useState object
    // so basically if I run deleteUser method and dont write this setusers() method
    // no changes will be displayed on screen
    setusers(users)

  }

  function sort(){
    // The comparison function (a, b) => a.age - b.age compares two elements a and b based on their age property. The function subtracts the age property of object b from the age property of object a. If the result is negative, a is sorted before b. If the result is positive, b is sorted before a. If the result is zero, the order of a and b is not changed.
    const sortedUsers = [...users].sort((a,b)=> a.age - b.age)
    setusers(sortedUsers)

  }
 

  function test(){

    alert("test");
  }
  return (
    <div>
      {props.title}
      {/*
        ### IMP ###
        Here for passing values
        here since we are calling UserList from UserComponent, UserComponent is called the
        parent of UserList

        Now say we have this kind of parent child relation ship

        A -> B -> C
        So if I pass something from A to B then that value will not be automatically
        be passed to C 

        You need to again pass it from B to C
    */}
      {/* <button onClick={test}>Click Me</button> */}
      {/* <button onClick={()=>{test()}}>Click Me</button> */}
      <UserList title={props.title} users={users} test={test} delete={deleteUser} sort={sort}/>
    </div>
  )
}
