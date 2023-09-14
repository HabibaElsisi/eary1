import React, {useState}  from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import './add-answer.css';

const AddAnswer = () =>{
    const navigate = useNavigate()
    const {id} = useParams();
    const [answer, setAnswer] = useState({
        description: "",
        priority: "",
        err: null,
    });
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios
            .post(
            `http://localhost:4000/questions/${id}/createAnswer`,
            {
                description: answer.description,
                priority: answer.priority,
                question_id: id,
            },
            )
            .then((resp) => {
                setAnswer({ err: null, description: "", priority: ""});
                toast.success("answer added successfully")
                setTimeout(() => navigate('/manageQuestions'), 600)
            })
            .catch((errors) => {
                console.log(errors);
            });
    }

    return(
        <div className='box addUser-box'>
        <form className='container addUser-card' onSubmit={handleSubmit}>
            <h2>Add answer</h2>
            <input 
                type='text'
                placeholder='add answer...' 
                value={answer.description}
                onChange={(e) => setAnswer({...answer, description: e.target.value})}
            />
            <input 
                type='number'
                placeholder='add priority...' 
                value={answer.priority}
                onChange={(e) => setAnswer({...answer, priority: e.target.value})}
            />
            <div className='submit-goback-container'>
                <input type='submit' value= "Save"/>
                <Link to='/manageQuestions'>
                    <input type='button' value='go back'/>
                </Link>
            </div>
        </form>
    </div> 
    )
}
export default AddAnswer;