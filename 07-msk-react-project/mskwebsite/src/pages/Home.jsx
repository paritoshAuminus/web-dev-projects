import React, { useEffect, useState } from 'react'
import herobg from '../assets/herobg.jpg'
import { Link } from 'react-router-dom';
import CourseCardOne from '../components/cards/CourseCardOne';


function GridItem({ heading, para, img }) {
    return (
        <div className='p-6 flex flex-col gap-2 bg-white shadow text-gray-900 capitalize'>
            <i className={img}></i>
            <h1 className='text-xl font-bold mb-2'>{heading}</h1>
            <p className='text-base'>{para}</p>
        </div>
    )
}

function StudentTestimonial() {
    return (
        <div className='border border-gray-200 shadow-xl min-w-72 rounded-full p-3 flex flex-col items-center'>
            <div className='flex flex-row items-center w-full pl-0'>
                <div className='h-20 w-20 border-2 border-indigo-400 rounded-full overflow-hidden flex items-center justify-center ml-0'>
                    <img src="https://picsum.photos/200/300" alt="student image" className="w-full h-full object-cover rounded-full" />
                </div>
                <p className='ml-4 text-lg font-semibold'>Student Name</p>
            </div>
        </div>
    )
}

function Home() {

    const [card, setCard] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);

        fetch('/data/course.json')
            .then(res => res.json())
            .then(data => setCard(data))

    }, [])


    console.log(card);



    return (
        <>
            <section
                className="text-gray-600 body-font bg-cover bg-center relative"
                style={{ backgroundImage: `url(${herobg})` }}
            >
                <div className="bg-white/80 w-full h-full absolute top-0 left-0 z-0"></div>
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center relative z-10">
                    <div className="lg:flex-grow md:w-1/2 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-5xl mb-4 font-medium text-gray-900">
                            Coding Excellence!
                        </h1>
                        <p className="mb-8 text-xl">
                            <span className='font-bold'>Best Coding Training Institute in Shikohabad</span><br />Unlock your potential with expert-led courses in programming, web development, and more.
                            Join MSK Institute and take the first step toward a successful tech career!
                        </p>
                        <div className="flex justify-center">
                            <Link to={'/courses'} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg cursor-pointer">
                                Join Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className='flex flex-col justify-center'>
                <div className='text-center p-6 capitalize my-3'>
                    <h1 className='text-4xl mb-6'>How can I help you</h1>
                    <p className='text-lg text-gray-600'>We offer both online and in-person classes, ensuring flexibility for your learning needs. From beginner-friendly coding tutorials to advanced data analysis, we provide the tools, support, and certifications to boost your career. Let us know your goals, and we'll help you achieve them with personalized guidance and hands-on learning experiences.
                        Consultative Training Our consultative training provides tailored, hands-on guidance, empowering you with practical skills and real-world insights to achieve success.
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 px-3 max-w-5xl mx-auto my-8'>
                    <GridItem
                        img='fa-solid fa-laptop-code text-6xl text-indigo-700'
                        heading="consultative training"
                        para="Our consultative training provides tailored, hands-on guidance, empowering you with practical skills and real-world insights to achieve success."
                    />
                    <GridItem
                        img='fa-solid fa-chart-simple text-6xl text-indigo-700'
                        heading="real deal coaching"
                        para="Our 'Real Deal Coaching' offers genuine, result-oriented guidance, focusing on practical skills and real-world applications to boost your success."
                    />
                    <GridItem
                        img='fa-solid fa-tv text-6xl text-indigo-700'
                        heading="Advisor Training Program"
                        para="Our Advisor Training Program delivers expert mentorship, fostering leadership skills and strategic thinking to help you guide others towards success effectively."
                    />
                    <GridItem
                        img='fa-solid fa-bullseye text-6xl text-indigo-700'
                        heading="training coach"
                        para="Our Training Coach program offers personalized guidance, practical coaching techniques, and expert support to help you achieve professional growth and success."
                    />
                </div>
            </section>
            <section className='capitalize w-full bg-gray-100 pt-12 pb-12'>
                <div className='p-3 flex-col gap-8 items-center text-center mb-12'>
                    <h1 className='text-2xl md:text-3xl text-blue-950 font-bold'>Latest Courses</h1>
                    <p className='text-lg text-gray-500'>Discover your perfect program in our courses.</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-9 p-6'>
                    {card.slice(0, 6).map((item, index) => (
                        <CourseCardOne
                            key={index}
                            title={item.name}
                            image={item.featured_image}
                            lectures={item.lectures}
                            duration={item.duration}
                            cardId={item.id}

                        />
                    ))}
                </div>
                <div className='text-center text-blue-950 text-lg mt-6'>
                    <Link to={"/courses"}>Browse All <i className='fa-solid fa-chevron-right text-sm pl-2'></i></Link>
                </div>
            </section>
            <section className="bg-white py-20">
                <div className="container mx-auto text-center px-6">
                    <h1 className="text-4xl font-semibold text-blue-950 mb-3">What our students have to say</h1>
                    <p className='mb-12 leading-relaxed text-lg text-gray-700'>Discover your perfect program in our courses.</p>
                    <div className="max-w-xl mx-auto">
                        <p className="leading-relaxed text-lg text-gray-700 mb-28">
                            I enrolled in the Web Full Stack Development course at MSK Institute, Shikohabad, and it was one of the best learning decisions I've made. From HTML, CSS, and JavaScript to advanced topics like React, Django, and Python — Sumit Sir teaches everything in a very clear and practical manner.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center justify-center md:justify-around gap-12">
                        <StudentTestimonial />
                        <StudentTestimonial />
                        <StudentTestimonial />
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home