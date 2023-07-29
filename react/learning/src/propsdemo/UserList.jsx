import React from 'react'

export const UserList = (props) => {
  return (
    <div>
        
        <button onClick={()=>props.sort()} className="btn btn-danger">Sort</button>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
            
          {
          props.users.length == 0 ? (<p>No records found</p>): (
          
            props.users.map((user) => {
                return (
                <tr>
                    <th scope="row">{user.id}</th>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>
                    <button onClick={()=>props.delete(user.id)} className="btn btn-danger">Delete</button>
                    </td>
                </tr>
                );
            }))}
        </tbody>
      </table>
    </div>
    //{
        /*
        <div>
        {props.title}
        {         
            props.users.map((user)=>{
                return(
                    <div>
                        <h1>{user.name}</h1>
                        <h1>{user.age}</h1>
                        <h1>{user.id}</h1>
                    </div>
                )
            })
        }
        <button onClick={props.test}>Click Me</button>
    </div>
    */
    //}



    
  )
}
