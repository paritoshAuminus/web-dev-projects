import React, { useState } from 'react'
import { FaCircle } from 'react-icons/fa'

const Contact = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        budget: '',
        description: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
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
                        <form action="" className="flex flex-col text-md gap-5">
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
            </section>
        </>
    )
}

export default Contact