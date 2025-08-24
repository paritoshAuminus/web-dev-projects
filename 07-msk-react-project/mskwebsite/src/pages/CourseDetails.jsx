import React, { useActionState, useEffect, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import Loader from '../components/Loader';
import Nopage from './NoPage';

const CourseDetails = () => {

  window.scrollTo(0, 0)

  const { courseId } = useParams();

  const [card, setCard] = useState([])

  useEffect(() => {
    fetch("/data/course.json")
      .then(res => res.json())
      .then(data => setCard(data))
  }, [])

  let course = card.find(item => item.id === Number(courseId))

  if (!course) {
    return <Nopage />
  }

  const baseUrl = "https://mskinstitute.github.io/";

  return (
    <>
      <section className="bg-indigo-950 text-white py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-0 px-6">

          <div className="flex flex-col h-full w-full md:w-1/2 justify-center items-center pt-20 px-6">
            <img src={baseUrl + course.featured_image} alt="program" className='h-full w-full mb-10 md:mb-20' />
            <div className='flex justify-between items-center w-full mb-4 text-2xl font-bold'>
              <div className='flex gap-4'>
                <span><i className='fa-solid fa-indian-rupee-sign font-extralight'></i> {Math.floor(course.fee - (course.fee * (course.discount / 100)))}</span>
                <span className='text-xl line-through'><i className='fa-solid fa-indian-rupee-sign font-extralight line-through'></i> {course.fee}</span>
              </div>
              <span className='float-end flex bg-violet-400 text-sm items-center font-normal px-1 rounded-lg'>{course.discount}.00% off</span>
            </div>
            <Link to={'/login'} className='bg-blue-500 hover:bg-blue-600 text-white text-md w-full py-3 text-center'>
              Enroll Now
            </Link>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">{course.name}</h2>
            <p className="text-gray-300 mb-8">
              {course.description.slice(0, course.description.indexOf('.') + 1)}
            </p>
            <div className="space-y-4 text-gray-300">
              <div className="flex justify-between border-b border-gray-600 pb-2">
                <span><i className="fa-regular fa-clock mr-2"></i>Duration</span>
                <span>{course.duration}</span>
              </div>
              <div className="flex justify-between border-b border-gray-600 pb-2">
                <span><i className="fa-solid fa-list-ul mr-2"></i>Chapters</span>
                <span>{course.lectures}</span>
              </div>
              <div className="flex justify-between border-b border-gray-600 pb-2">
                <span><i className="fa-solid fa-users mr-2"></i>Enrolled</span>
                <span>{course.enrolled}</span>
              </div>
              <div className="flex justify-between border-b border-gray-600 pb-2">
                <span><i className="fa-solid fa-language mr-2"></i>Language</span>
                <span>{course.language}</span>
              </div>
              <div className="flex justify-between border-b border-gray-600 pb-2">
                <span><i className="fa-solid fa-signal mr-2"></i>Skill Level</span>
                <span>{course.skill_level}</span>
              </div>
              <div className="flex justify-between border-b border-gray-600 pb-2">
                <span><i className="fa-regular fa-calendar-days mr-2"></i>Deadline</span>
                <span>{course.deadline}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CourseDetails;