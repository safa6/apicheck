import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UserList=()=> {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const fetchUsers = async ()=>{
            try {
                const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
                setUsers(data)
                
            } catch (error) {
                console.log(error)
                
            }
            
        }
        fetchUsers()
        
    }, [])
    return (
        <div>
            {users.map(el=>
                <div>
                    <h1> {el.name} </h1>
                </div>
                )}
        </div>
    )
}

export default UserList
