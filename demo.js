
'use client'
import React, { useState } from 'react';

function page(props) {
    const [users,setUsers]= useState([])
    const [name,setName]= useState('')
    const [age,setAge]= useState('')
    const [email,setEmail]= useState('')

    const  addUser=async(e)=>{
        e.preventDefault();
        let response= await fetch('http://localhost:3000/api/users',{
            method: "Post",
            body:JSON.stringify( ...users,{name,age,email})
        })
        response= await response.json()
        console.log(response);
      setUsers([
        //...users,{name,age,email}
 
      ])
 
    }

    return (
        <div>
             <hr/>
            <div>
               {
                users.map((data)=>(
                    <div>{data.name}</div>
                ))
               }

            </div>
            <form onSubmit={addUser}>
                UserName: <input value={name} onChange={(e)=> setName(e.target.value)}/>
                Age: <input value={age} onChange={(e)=> setAge(e.target.value)}/>
                Email: <input value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <button type='submit'>Register</button>
            </form>
        </div>
    );
}

export default page;
