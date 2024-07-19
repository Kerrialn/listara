import React from "react";

interface User {
    id: number,
    name: string
}

export default async function Page() {

    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        next: {revalidate: 10}
    })
    const users: User[] = await response.json()

    return (
        <div>
            <h1>Collections</h1>
            <table className="table table-zebra">
                <tbody>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
                {users.map(user => <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>
                        <span className="badge">default</span>
                        <span className="badge badge-neutral">neutral</span>
                        <span className="badge badge-primary">primary</span>
                        <span className="badge badge-secondary">secondary</span>
                        <span className="badge badge-accent">accent</span>
                        <span className="badge badge-ghost">ghost</span>
                    </td>
                    <td>
                        <button className="btn btn-error">delete</button>
                    </td>
                </tr>)}
                </tbody>

            </table>
        </div>
    )
}