import React from 'react'
import { Link } from 'react-router-dom';
const baseUrl = "https://mskinstitute.github.io/";

const Card1 = (props) => {
    return (
        <>
            <div key={props.key} className="flex flex-col justify-between bg-white border border-gray-200 shadow-lg rounded-xl">
                <img className="w-full h-auto rounded-t-xl" src={baseUrl + props.image} alt="Card Image" />
                <div className="flex flex-col gap-4 p-4 md:p-5">
                    <h3 className="text-xl font-bold text-gray-800">
                        {props.title}
                    </h3>
                    <p className="mt-1 text-gray-500 dark:text-neutral-400">
                        {props.text.slice(0, props.text.indexOf('.') + 1)}
                    </p>
                </div>
                <div className='w-full p-4'>
                    <span className="text-md text-gray-500 px-2"><i className='fa-solid fa-book pe-2'></i>{props.chapters} Chapters</span>
                    <span className="text-md text-gray-500 px-2"><i className='fa-solid fa-clock pe-2'></i>{props.duration}</span>
                    <Link to={`http://localhost:5173/courses/coursedetails/${props.courseId}`} className="float-end py-2 w-24 text-center text-md font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                        View More
                    </Link>
                </div>
            </div>
        </>
    )
}


export default Card1