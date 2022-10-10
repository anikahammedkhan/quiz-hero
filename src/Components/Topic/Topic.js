import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { id, name, total, logo } = topic;
    // const [questions, setQuestions] = useState([]);
    // const loadQuiz = (id) => {
    //     fetch(`https://openapi.programming-hero.com/api/quiz/${id}`)
    //         .then(res => res.json())
    //         .then(data => setQuestions(data.data.questions))
    // }
    // console.log(questions);
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Topic" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Total Question: {total}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-success">
                        <Link to={`/quiz/${id}`}>Start Quiz</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Topic;