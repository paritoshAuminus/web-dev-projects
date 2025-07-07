import React, { useEffect, useState } from 'react'

function GridItems({ heading, para, cls }) {
    return (
        <div className='flex gap-3'>
            <i className={cls}></i>
            <div>
                <h1 className='text-xl text-blue-950 font-medium mb-3'>{heading}</h1>
                <p className='text-gray-500'>{para}</p>
            </div>
        </div>
    )
}

const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);


    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log('form submitted!');
        console.log(`formData:\nName: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`);
        setForm({
            name: '',
            email: '',
            message: ''
        })

    }

    return (
        <>
            <section className='relative flex flex-col justify-center items-center h-96 text-white overflow-hidden'>
                <div className="absolute inset-0 bg-blue-900 z-0"></div>
                <div className="relative z-10 flex flex-col items-center">
                    <h1 className='text-5xl mb-4'>Get in touch today!</h1>
                    <p className='text-lg'>Home/Contact Us</p>
                </div>
            </section>
            <div className='flex flex-col sm:flex-row w-full p-8 gap-8 my-16 md:my-20'>
                <div className='w-full sm:w-1/2'>
                    <h1 className='text-3xl md:text-5xl mb-8 md:mb-16'>Contact Details</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-12'>
                        <GridItems
                            cls={"fa-solid fa-map-location-dot mt-1 text-3xl text-gray-400"}
                            heading={"Find Us"}
                            para={"Near Subhash Park, station road, Shikohabad"}
                        />
                        <GridItems
                            cls={"fa-solid fa-phone mt-1 text-3xl text-gray-400"}
                            heading={"Phone"}
                            para={'+91 8630522723'}
                        />
                        <GridItems
                            cls={"fa-regular fa-clock mt-1 text-3xl text-gray-400"}
                            heading={"Working Hours"}
                            para={"8:00 AM - 6:00 PM"}
                        />
                        <GridItems
                            cls={"fa-solid fa-pen mt-1 text-3xl text-gray-400"}
                            heading={"Write to Us"}
                            para={'paritoshverma2038@gmail.com'}
                        />
                    </div>
                </div>
                <section className='w-full sm:w-1/2'>
                    <section className="text-gray-600 body-font">
                        <div>
                            <div className="flex flex-col text-center w-full mb-12">
                                <h1 className="sm:text-3xl text-3xl md:text-5xl title-font mb-4 text-gray-900">Contact Us</h1>
                            </div>
                            <div className="lg:w-full md:w-full mx-auto">
                                <form className="flex flex-wrap -m-2" onSubmit={submitHandler}>
                                    <div className="p-2 w-1/2">
                                        <div className="relative">
                                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                            <input type="text" id="name" name="name" value={form.name} onChange={handleChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                    </div>
                                    <div className="p-2 w-1/2">
                                        <div className="relative">
                                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                            <input type="email" id="email" name="email" value={form.email} onChange={handleChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                    </div>
                                    <div className="p-2 w-full">
                                        <div className="relative">
                                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                            <textarea id="message" name="message" value={form.message} onChange={handleChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-52 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                        </div>
                                    </div>
                                    <div className="p-2 w-full">
                                        <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg uppercase">send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
            <section className="w-full flex justify-center items-center py-8 bg-gray-300">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.8987588652767!2d78.57903227422112!3d27.09648797653805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39744bce0745fc55%3A0xaca626641b821c20!2sMSK%20Institute!5e0!3m2!1sen!2sin!4v1751180175161!5m2!1sen!2sin"
                    width="1000"
                    height="450"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                ></iframe>
            </section>
        </>
    )
}

export default Contact