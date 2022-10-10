import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Questions = () => {
    const questionsData = useLoaderData();
    const { questions } = questionsData;
    return (
        <div>
            <h1 className='font-bold text-3xl my-7 text-center'>Select The Right Answer</h1>
            <div className='grid grid-cols-1 gap-4 w-4/5 mx-auto'>
                {
                    questions.map(question => <div key={question.id} className='card w-full bg-base-100 shadow-xl'>
                        <div className="card-body">
                            <h2 className="card-title">{question.question}</h2>
                            <div className="card-actions">
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <input type="radio" name={question.id} className="radio checked:bg-red-500" />
                                        <span className="label-text font-bold text-lg"> {question.options[0]}</span>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <input type="radio" name={question.id} className="radio checked:bg-red-500" />
                                        <span className="label-text font-bold text-lg"> {question.options[1]}</span>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <input type="radio" name={question.id} className="radio checked:bg-red-500" />
                                        <span className="label-text font-bold text-lg"> {question.options[2]}</span>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <input type="radio" name={question.id} className="radio checked:bg-red-500" />
                                        <span className="label-text font-bold text-lg"> {question.options[3]}</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Questions;