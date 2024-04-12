'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

function Login(props) {
    const router=useRouter()
    const[uname,setUname]= useState('')

 const loginValid=(e)=>{
e.preventDefault();
if(uname==='admin'){
router.push("/register")
}

 }
    return (
        <div>
            <p>Welcome to login</p>

<form onSubmit={loginValid}>
UserName:<input type='text' value={uname} onChange={(e)=>setUname(e.target.value)}/>
<button>Login</button>

</form>
           

            <hr/>
            <Link href="/">Home Page</Link>
        </div>
    );
}

export default Login;
