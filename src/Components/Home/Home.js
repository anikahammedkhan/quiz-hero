import React from 'react';
import { Link } from 'react-router-dom';
import Topics from '../Topics/Topics';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="hero w-full">
                <div className="hero-content text-center text-amber-400">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome To Quiz Hero !</h1>
                        <p className="mb-5 font-semibold">Unlocking knowledge at the speed of thought. We know Victoria's secret. We quiz therefore we are. Where a smart answer won't get you fired!</p>
                        <button className="btn btn-wide btn-warning btn-outline px-4"><Link to="../topics">Topics</Link></button>
                    </div>
                </div>
            </div>
            <Topics></Topics>
        </div>
    );
};

export default Home;