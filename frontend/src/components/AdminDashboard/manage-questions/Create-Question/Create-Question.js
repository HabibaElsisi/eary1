import React, { useRef, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { getAuthUser } from '../../../../helper/Storage';
import './Create-Question.css';

const CreateQuestion = () =>{

    const navigate = useNavigate();
    const auth = getAuthUser();
    const [question, seQuestion] = useState({
        name: "",
        status: "",
        err: '',
        success: null,
        });
    
    const audio = useRef(null);
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", question.name);
        formData.append("status", question.status);
        if (audio.current.files && audio.current.files[0]) {
            formData.append("audio", audio.current.files[0]);
        }
        axios
        .post("http://localhost:4000/questions/add", formData, {
            headers: {
            token: auth.token,
            "Content-Type": "multipart/form-data",
            },
        })
        .then((resp) => {
            seQuestion({
            name: "",
            status: "",
            err: '',
            success: "question Created Successfully !",
            });
            audio.current.value = null;
        })
        .catch((err) => {
            seQuestion({
            ...question,
            err: err,
            success: null,
            });
        });
        setTimeout(() => navigate('/manageQuestions'), 500);
    }

    return(
        <div className='box createQuestion-box'>
            {question.err && (
                toast.error("Something went wrong, please try again later !")
            )
            }
            {question.success && (
                toast.success("question Created Successfully !")
            )
            }
            <form className='container createQuestion-card' onSubmit={handleSubmit}>
                <h2>Questions Managment</h2>
                <div className='form-input-container'>
                    <input 
                        type='text'
                        placeholder='Question description' 
                        required
                        value={question.name} 
                        onChange={(e) => seQuestion({...question, name: e.target.value})}
                    />
                </div>
                <div className='selectAudio-container'>
                    <input type='file' placeholder='audio file' ref={audio} />
                </div>
                <div className='form-input-container'>
                    <input 
                        type='text'
                        placeholder='status' 
                        required
                        value={question.status} 
                        onChange={(e) => seQuestion({...question, status: e.target.value})}
                    />
                </div>
                <div className='createQuestion-btns-container'>
                    <input type='submit' value="Save"/>
                    <Link to='/manageQuestions'>
                        <input type='button' value='go back'/>
                    </Link>
                </div>
            </form>
        </div> 
    )
}
export default CreateQuestion;