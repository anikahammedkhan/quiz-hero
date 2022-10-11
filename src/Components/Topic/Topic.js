import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { id, name, total, logo } = topic;

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Topic" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Total Question: {total}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-success">
                        <Link to={`/quiz/${id}`}>Start Quiz <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Topic;