import Link from 'next/link'
async function getUsers(request){
    let response = await fetch('http://localhost:3000/api/users');
    let data = await response.json();
    
    return data;
}

export default async function Page(){
    const users = await getUsers();
    console.log(users);
    return (
        <div>
            <table>
                <tr>
                    {/* <th>Id</th> */}
                    <th>Name</th>
                    {/* <th>Name</th>
                    <th>Email</th>
                    <th>Age</th> */}
                </tr>
                {users.map((item) => (
                    <tr>
                       {/* <Link href={`users/${item.id}`}> <td>{item.id}</td></Link> */}
                       <Link href={`users/${item.name}`}> <td>{item.name}</td></Link>
                        {/* <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.age}</td> */}
                    </tr>
                ))}
            </table>
        </div>
    );
}
