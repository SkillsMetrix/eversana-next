
'use client'
import React, { useState } from 'react';

function page(props) {
    const [users,setUsers]= useState([])
    const [name,setName]= useState('')
    const [age,setAge]= useState('')
    const [email,setEmail]= useState('')

    const addUser=(e)=>{
        e.preventDefault();
        
      setUsers([
        ...users,{name,age,email}
 
      ])
      console.log(users);

    }

    return (
        <div>
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
