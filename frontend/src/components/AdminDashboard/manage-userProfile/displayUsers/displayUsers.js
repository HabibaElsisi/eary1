import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './displayUsers.css';
import axios from 'axios';
import { getAuthUser } from '../../../../helper/Storage';
import { toast } from 'react-toastify';



const DisplayUsers = () =>{
    const auth = getAuthUser();
    const [data, setData] = useState([]);
    const loadData = async () => {
        const response = await axios.get("http://localhost:4000/auth/getUsers");
        setData(response.data);
    }

    const deleteUser = (id) =>{
            axios.delete(`http://localhost:4000/auth/remove/${id}`,{
                headers: {
                    token: auth.token,
                }
            })
            toast.success(`User deleted successfully!`)
            setTimeout(() => loadData(), 300)
    }
    useEffect(() =>{
        loadData();
    },[]);
    return ( 
        <div className='crud-users-body'>
            <table className='styled-table'>
                <thead>
                    <tr>
                        <th>id.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) =>{
                        return (
                            <tr key={item.id}>
                                <th scope='row'>{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>
                                    {item.status}
                                </td>
                                <td>
                                    <Link to={`/auth/update/${item.id}`}>
                                    <button className='btn btn-edit'>edit</button>
                                    </Link>
                                    <Link to={`/auth/view/${item.id}`}>
                                    <button className='btn btn-view'>view</button>
                                    </Link>
                                    <button onClick={() => deleteUser(item.id)} className='btn btn-delete'>delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <Link to="/auth/addUser">
                <button className='btn btn-add-user'>Add New User</button>
            </Link >
        </div>
    )
}

export default DisplayUsers;