import React, { useState } from 'react'
import { FaCircle, FaPlusCircle } from 'react-icons/fa'
import Accordian from '../components/Accordian'
import { RiFacebookCircleFill, RiGithubFill } from 'react-icons/ri'
import { PiLinkedinLogoFill } from 'react-icons/pi'
import { TiSocialLinkedinCircular } from 'react-icons/ti'
import { AiFillRedditCircle } from 'react-icons/ai'

const Contact = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        budget: '',
        description: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(`Name:          ${form.name}`);
        console.log(`Email:         ${form.email}`);
        console.log(`Budget:        ${form.budget}`);
        console.log(`Description:   ${form.description}`);
    }

    return (
        <>
            <section className='text-white bg-black px-10 py-16 md:py-20'>
                <div className='mb-20'>
                    <span className='text-7xl md:text-9xl uppercase'>Contact</span>
                </div>
                <div className='flex flex-col md:flex-row justify-between gap-5'>
                    <div className='w-full md:w-1/2 flex flex-col gap-1.5'>
                        <span className='text-sm px-1 py-0.5 mb-1.5 w-30 border-1 border-gray-500 uppercase rounded-full flex gap-1 items-center'><FaCircle className='text-lime-400' />Book a call</span>
                        <span className='text-6xl capitalize text-wrap'>I'd love to hear from you!</span>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <form action="" onSubmit={handleSubmit} className="flex flex-col text-md gap-5">
                            <div className="flex flex-col gap-1.5">
                                <label name="name">
                                    Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    name='name'
                                    type="text"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="bg-zinc-900 rounded-lg h-10 w-full border-2 border-zinc-900 focus:border-lime-400 focus:outline-none px-3 transition-all delay-150"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="email">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    name='email'
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="bg-zinc-900 rounded-lg h-10 w-full border-2 border-zinc-900 focus:border-lime-400 focus:outline-none px-3 transition-all delay-150"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="budget">Your Budget</label>
                                <input
                                    name='budget'
                                    type="number"
                                    value={form.budget}
                                    onChange={handleChange}
                                    className="bg-zinc-900 rounded-lg h-10 w-full border-2 border-zinc-900 focus:border-lime-400 focus:outline-none px-3 transition-all delay-150"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="description">Description</label>
                                <textarea
                                    name='description'
                                    value={form.description}
                                    onChange={handleChange}
                                    className="bg-zinc-900 rounded-lg w-full min-h-[150px] border-2 border-zinc-900 focus:border-lime-400 focus:outline-none p-3 transition-all delay-150"
                                />
                            </div>
                            <button type='submit' className='px-2 py-3 text-black bg-lime-400 hover:bg-lime-300 w-24 cursor-pointer transition-all rounded-3xl'>Submit</button>
                        </form>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row py-16 md:py-20 justify-center gap-5'>
                    <div className='bg-zinc-900 flex flex-col items-center py-10 px-20 gap-5 rounded-2xl'>
                        <span className='text-xl'>Email me</span>
                        <div>
                            <a className='text-2xl' href='mailto:paritoshverma2038@gmail.com'>paritoshverma2038@gmail.com</a>
                            <hr className='text-gray-500' />
                        </div>
                    </div>
                    <div className='bg-zinc-900 flex flex-col items-center py-10 px-28 gap-5 rounded-2xl'>
                        <span className='text-xl'>Find me</span>
                        <div className='flex gap-2.5 text-6xl text-lime-400'>
                            <span className='hover:text-lime-300 cursor-pointer'><RiFacebookCircleFill /></span>
                            <span className='hover:text-lime-300 cursor-pointer'><TiSocialLinkedinCircular /></span>
                            <span className='hover:text-lime-300 cursor-pointer'><RiGithubFill /></span>
                            <span className='hover:text-lime-300 cursor-pointer'><AiFillRedditCircle /></span>
                        </div>
                    </div>
                </div>
            </section>
            <section className='text-black bg-white flex flex-col md:flex-row px-10 py-16 md:py-20 gap-5'>
                <div className='w-full md:w-2/5'>
                    <span className='text-sm px-1 py-0.5 w-16 border-1 border-gray-500 uppercase rounded-full flex gap-1 items-center'><FaCircle className='text-lime-400' />Faq</span>
                    <span className='text-4xl md:text-7xl capitalize'>Questions & answers</span>
                </div>
                <div className='w-full md:w-3/5'>
                    <div>
                        <Accordian
                            question={'What services do you offer?'}
                            answer={'I offer a range of services including web design, front-end development, UX/UI design, responsive design, e-commerce solutions, and brand identity creation. Visit my Services page for a detailed overview.'}
                            icon={<FaPlusCircle />}
                        />
                        <Accordian
                            question={'How do you approach your project?'}
                            answer={'With a strong focus on user experience, I design websites that are intuitive and easy to navigate.'}
                            icon={<FaPlusCircle />}
                        />
                        <Accordian
                            question={'What is your project timeline?'}
                            answer={'It depends on the person or organisation altogether with the goals and benchmark demands of the project but in general it would take anywhere from six to twelve days.'}
                            icon={<FaPlusCircle />}
                        />
                        <Accordian
                            question={'How much do your service cose?'}
                            answer={'There are different services having a differnt cost each, frontend only projects will cost approximately $70 to $80 and full development can cost anywhere from $120 to $170. Please note that all the prices mentioned are approximations and can fluctuate based on the project requirements.'}
                            icon={<FaPlusCircle />}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact