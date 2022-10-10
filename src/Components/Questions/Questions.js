import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Questions = () => {
    const questionsData = useLoaderData();
    const { questions } = questionsData;
    console.log(questions);
    const toastLoader = ({ option, answer }) => {
        const givenAnswer = option.option;
        const correctAnswer = answer.question.correctAnswer;
        if (givenAnswer === correctAnswer) {
            toast.info('🦄 Congratulation! Your Answer is Correct !', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            toast.info('🦄 Opps! Your Answer is wrong !', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

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
                                    {
                                        question.options.map(option => <label key={Math.random()} className="label cursor-pointer justify-start">
                                            <input type="radio" name={question.id} className="radio checked:bg-red-500"
                                                onClick={() => toastLoader({
                                                    option: { option },
                                                    answer: { question }
                                                })} />
                                            <span className="label-text font-bold text-lg text-left"> {option}</span>

                                        </label>
                                        )
                                    }

                                </div>
                            </div>
                        </div>
                    </div>)
                }

            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default Questions;