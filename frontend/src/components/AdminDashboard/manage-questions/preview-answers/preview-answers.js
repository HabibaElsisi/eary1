import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getAuthUser } from '../../../../helper/Storage';
import './preview-answers.css';


const PreviewAnswers = () =>{
    const {id} = useParams();
    const auth = getAuthUser();
    const [data, setData] = useState([]);
    const loadData = async () => {
        const response = await axios.get(`http://localhost:4000/questions/${id}/answers`);
        setData(response.data);
    }
    useEffect(() =>{
        loadData();
    });
    const deleteAnswer = (id) =>{
        axios.delete(`http://localhost:4000/questions/removeAnswer/${id}`, {
            headers: {
                token: auth.token,
            }
        })
        toast.success('answer deleted successfully!')
        setTimeout(() => loadData(), 300)
}
    return(
        <div className='previewAnswer-body'>
            <div className='previewAnswer-header'>
                <h1>Preview Question Data</h1>
            </div>
                <div className='answers-container'>
                    <h2>Answers: </h2>
                    {data.map((item, index) =>{
                        return (
                                <ul className='answers-list' key={item.id}>
                                    <li>
                                        <div  className='answer-container'>
                                            {item.description}
                                            <button onClick={() => deleteAnswer(item.id)}>Delete</button>
                                        </div>
                                    </li>
                                </ul>
                        )
                    })}
                        {data.filter(item => item.priority === 99).map((item, index) =>{
                        return (
                            <ul className='answers-list' key={item.id}>
                                <li className='correct'>*Correct answer: {item.description}*</li>
                            </ul>
                        )
                    })}
            </div>
        </div>
    )
}


export default PreviewAnswers;