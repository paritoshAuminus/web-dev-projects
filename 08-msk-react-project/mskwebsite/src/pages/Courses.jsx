import React, { useEffect, useState } from 'react'
import coursebg from "../assets/coursebg.jpg"
import CourseCardOne from '../components/cards/CourseCardOne';
import Card1 from '../components/cards/Card1';
import Card2 from '../components/cards/Card2';
import Nopage from './NoPage';

const Courses = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const [card, setCard] = useState([]);

    useEffect(() => {
        fetch('/data/course.json')
            .then(res => res.json()) 
            .then(data => setCard(data))
    }, [])


    return (
        <>
            <section className='relative flex flex-col justify-center items-center h-96 text-white overflow-hidden' style={{ backgroundImage: `url(${coursebg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-blue-900/80 z-0"></div>
                <div className="relative z-10 flex flex-col items-center">
                    <h1 className='text-6xl mb-4'>All courses here</h1>
                    <p className='text-lg'>Home/Courses</p>
                </div>
            </section>
            <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-16 px-6 bg-gray-200 gap-9'>
                {card.map( item => (
                    <Card1 key={item.id} title={item.name} text={item.description} image={item.featured_image} chapters={item.lectures} duration={item.duration} courseId={item.id} />
                ))}
            </section>
        </>
    )
}

export default Courses