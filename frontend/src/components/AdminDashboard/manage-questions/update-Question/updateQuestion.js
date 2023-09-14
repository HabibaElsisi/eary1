import React, { useRef, useState } from 'react';
import { Link, useNavigate, useParams} from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { getAuthUser } from '../../../../helper/Storage';
import './updateQuestion.css';

const UpdateQuestion = () =>{

    const navigate = useNavigate();
    const {id} = useParams();
    const auth = getAuthUser();
    const [question, setQuestion] = useState({
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
        .put(`http://localhost:4000/questions/update/${id}`, formData, {
            headers: {
            token: auth.token,
            "Content-Type": "multipart/form-data",
            },
        })
        .then((resp) => {
            setQuestion({
            name: "",
            status: "",
            err: '',
            success: "question Updated Successfully !",
            });
            audio.current.value = null;
        })
        .catch((err) => {
            setQuestion({
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
                        required
                        type='text'
                        placeholder='Question description' 
                        value={question.name} 
                        onChange={(e) => setQuestion({...question, name: e.target.value})}
                    />
                </div>
                <div className='selectAudio-container'>
                    <input type='file' placeholder='audio file' ref={audio} />
                </div>
                <div className='form-input-container'>
                    <input 
                        required
                        type='text'
                        placeholder='status' 
                        value={question.status} 
                        onChange={(e) => setQuestion({...question, status: e.target.value})}
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

export default UpdateQuestion;