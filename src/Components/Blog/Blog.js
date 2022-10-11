import React from 'react';
import routerLogo from '../../Assets/react-router.png';
import contexApi from '../../Assets/Context API in React with Hooks.png';
import useRefLogo from '../../Assets/useref.png';

const Blog = () => {
    return (
        <div className='py-8'>
            <h1 className='font-bold text-5xl text-center'>Frequently Asked Question</h1>
            <div className="collapse w-4/5 mx-auto my-8">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-info text-white peer-checked:bg-success peer-checked:text-white font-bold text-lg">
                    What is the purpose of React Router?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-success peer-checked:text-white text-md">
                    <p>
                        React Router is a collection of navigational components that compose declaratively with your application.
                        Whether you want to have bookmarkable URLs for your web app or a composable way to navigate in React Native,
                        React Router works wherever React is rendering--so take your pick!
                    </p>
                </div>
            </div>
            <div className="collapse w-4/5 mx-auto my-8">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-info text-white peer-checked:bg-success peer-checked:text-white font-bold text-lg">
                    How Does Context Api Work ?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-success peer-checked:text-white text-md">
                    <p>
                        Context provides a way to pass data through the component tree without having to pass props down manually at every level.
                    </p>
                </div>
            </div>
            <div className="collapse w-4/5 mx-auto my-8">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-info text-white peer-checked:bg-success peer-checked:text-white font-bold text-lg">
                    What is useRef Hook ?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-success peer-checked:text-white text-md">
                    <p>
                        useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).
                        The returned object will persist for the full lifetime of the component.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;