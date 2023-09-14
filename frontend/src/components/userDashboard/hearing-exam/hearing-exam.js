import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { getAuthUser } from '../../../helper/Storage';
import './hearing-exam.css';

const HearingExam = () => {
const {id} = useParams();
const auth = getAuthUser();
const [questions, setQuestions] = useState([]);
const [answers, setAnswers] = useState([]);
const [formAnswers, setFormAnswers] = useState({});
const [audioPlayed, setAudioPlayed] = useState({});
const [score, setScore] = useState(null);

const loadQuestions = async () => {
    const response = await axios.get("http://localhost:4000/questions/getQuestions");
    setQuestions(response.data);
};

const loadAnswers = async () => {
    const response = await axios.get('http://localhost:4000/questions/answers');
    setAnswers(response.data);
}

useEffect(() => {
    loadQuestions();
    loadAnswers();
}, []);

const handleAnswerSelect = (questionId, answerId) => {
    setFormAnswers((prevAnswers) => ({
    ...prevAnswers,
    [questionId]: answerId,
    }));
}

const handleAudioPlay = (questionId) => {
    setAudioPlayed((prevPlayed) => ({
    ...prevPlayed,
    [questionId]: true,
    }));
}

const handleSubmit = async (event) => {
    event.preventDefault();
    const correctAnswers = questions.reduce((count, question) => {
    const answer = answers.find((answer) => answer.id === formAnswers[question.id]);
    return count + (answer && answer.priority === 99 ? 1 : 0);
    }, 0);
    const response = await axios.post(`http://localhost:4000/results/saveAnswers/${id}`, {
    user_id: auth.id,
    score: correctAnswers,
    });
    console.log(response.data);
    setScore(correctAnswers);
}

return (
    <div>
    {score !== null ? (
        <div className='instant-result-container'>
            <div className="instant-result-box">
                <h2>Congratulations!🎉</h2>
                <h3>Your Result :</h3>
                <div className="instant-result">
                    <h1>{score}</h1>
                    <p>of {questions.length}</p>
                </div>
                <p>you scored {score} out of {questions.length} questions in the previuos exam.</p>
            </div>
        </div>
    ) : (
        <form className='form-answers' onSubmit={handleSubmit}>
        <div className='question-container'>
            {questions.map((question, index) => (
            <div className='question-box' key={question.id}>
                <audio controls onPlay={() => handleAudioPlay(question.id)}>
                <source src={question.audio_file}></source>
                </audio>
                <h2>{index + 1}) {question.name}</h2>
                <div className='answer-options' style={{ opacity: audioPlayed[question.id] ? 1 : 0.5 }}>
                {answers.filter((answer) => answer.question_id === question.id).map((answer) => (
                    <div className='answer-option' key={answer.id}>
                    <input type='radio' checked={formAnswers[question.id] === answer.id} onChange={() => handleAnswerSelect(question.id, answer.id)} disabled={!audioPlayed[question.id]} />
                    <span>{answer.description}</span>
                    </div>
                ))}
                </div>
            </div>
            ))}
        </div>
        <button className='submit-answers' type='submit' disabled={!Object.values(audioPlayed).every((played) => played)}>Submit</button>
        </form>
    )}
    </div>
);
}

export default HearingExam;