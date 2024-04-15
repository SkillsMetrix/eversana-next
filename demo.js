import Link from "next/link";

async function getUsers() {
  let data = await fetch("http://localhost:3000/api/users");
  data = await data.json();
  return data;
}

export default async function page() {
  const users = await getUsers();
  console.log(users);
  return (
    <div>
      <h4>User List</h4>
      {users.map((item) => (
        <div>
          <Link href={`api/users/${item.id}`}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
}
