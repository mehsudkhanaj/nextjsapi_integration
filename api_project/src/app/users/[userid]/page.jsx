async function getUsers(id) {
    let response = await fetch(`http://localhost:3001/api/users/${id}`);
    let data = await response.json();
    
    return data;
}

export default async function Page({ params }) {
    const user = await getUsers(params.id);


    return (
        <div>
          
            <h1>User Details</h1>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Age:</strong> {user.age}</p>
        </div>
    );
}
