import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './exam-history.css';

function ExamHistory() {
    const {id} = useParams();
    const [history, setHistory] = useState([]);
    const loadData = async () => {
        const response = await axios.get(`http://localhost:4000/results/history/${id}`);
        setHistory(response.data);
    }
    useEffect(() =>{
        loadData();
    });
    return ( 
        <div className='history-body'>
            <div className='history-header'>
                <h1>Exam History</h1>
            </div>
            <table className='history-styled-table'>
                <thead>
                    <tr>
                        <th>Score</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {history.map((item, index) =>{
                        return (
                            <tr key={item.id}>
                                <td>your previous result: {item.score}</td>
                                <td>{item.date}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default ExamHistory;