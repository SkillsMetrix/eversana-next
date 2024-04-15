async function getUser(id) {
    let data = await fetch(`http://localhost:3000/api/users/${id}`);
    data = await data.json();
    return data.result;
  }

 
async function page({params}) {
    console.log(params);
    const user= await getUser(params.userid)
    console.log(user);
    return (
<div>
            <p>User Details</p>
            <h4>User Age : {user.age}</h4>
            <h4>User Email : {user.email}</h4>
        </div>
    );
}

export default page;
