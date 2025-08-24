import React from 'react'
import { Link } from 'react-router-dom'

function Star() {
    return (
        <>
            <div className='text-yellow-300'>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star-half-stroke'></i>
                <i className='fa-regular fa-star'></i>
            </div>
            <span className='text-gray-500'>5.45</span>
            <span className='text-gray-500'>(5.8k reviews)</span>
        </>
    )
}

const CourseCardOne = ({ image, title, lectures, duration, cardId }) => {
    return (
        // image path: https://mskinstitute.github.io/featured_image

        <div key={cardId} className="rounded overflow-hidden shadow-lg p-4 bg-white">
            <img className="w-full" src={'https://mskinstitute.github.io/' + image} alt="course image" />
            <div className="py-4 mb-4">
                <h5 className="font-bold text-xl mb-2">{title}</h5>
            </div>
            <div>
                <div className='flex gap-3 mb-2'>
                    <Star />
                </div>
                <div className='flex gap-3 text-gray-500'>
                    <span>
                        <i className='fa-solid fa-book me-1'></i>{lectures} Chapters
                    </span>
                    <span>
                        <i className='fa-solid fa-clock me-1'></i>{duration}
                    </span>
                </div>
            </div>
            <Link to={`http://localhost:5173/courses/coursedetails/${cardId}`} className='inline-block mt-4 float-end bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>View More</Link>
        </div>
    )
}
export default CourseCardOne