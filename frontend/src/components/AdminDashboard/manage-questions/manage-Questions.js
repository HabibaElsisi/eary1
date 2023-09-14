import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getAuthUser } from '../../../helper/Storage';
import './manage-Questions.css';
const AdminQuestions = () => {

    const auth = getAuthUser();
    const [data, setData] = useState([]);
    const loadData = async () => {
        const response = await axios.get("http://localhost:4000/questions/getQuestions");
        setData(response.data);
    };

    const deleteQuestion = (id) =>{
            axios.delete(`http://localhost:4000/questions/remove/${id}`, {
                headers: {
                    token: auth.token,
                }
            })
            toast.success('Question deleted successfully!')
            setTimeout(() => loadData(), 300)
    }

    useEffect(() =>{
        loadData();
    },[]);

    return (
        <div className='crud-questions-body'>
            <table className='styled-table'>
                <thead>
                    <tr>
                        <th>id.</th>
                        <th>question Name</th>
                        <th>Audio file</th>
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
                                <td>
                                    <audio className='audio' controls>
                                        <source src= {item.audio_file}/>
                                    </audio>
                                </td>
                                <td>
                                    {item.status}
                                </td>
                                <td>
                                    <Link to={`/updateQuestion/${item.id}`}>
                                    <button className='btn btn-updateAnswer'>Update</button>
                                    </Link>
                                    <Link to={`/addAnswers/${item.id}`}>
                                    <button className='btn btn-updateAnswer'>Add Answers</button>
                                    </Link>
                                    <Link to={`/previewAnswers/${item.id}`}>
                                    <button className='btn btn-showAnswers'>Answers</button>
                                    </Link>
                                    <button onClick={() => deleteQuestion(item.id)} className='btn btn-delete'>Delete</button>
                                </td>
                            </tr>
                        )
                    })}  
                </tbody>
            </table>
            <Link to="/auth/addQuestion">
                <button className='btn btn-add-question'>Create New Question</button>
            </Link >
        </div>
    );
}
export default AdminQuestions;
