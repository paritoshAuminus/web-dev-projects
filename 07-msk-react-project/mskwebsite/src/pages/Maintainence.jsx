import React from 'react'

export const Maintainence = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                        <div className='flex justify-center gap-16 md:gap-24 mb-12'>
                            <i className='fa-solid fa-snowplow text-6xl md:text-9xl text-blue-950'></i>
                            <i className='fa-solid fa-road-barrier text-6xl md:text-9xl text-blue-950'></i>
                        </div>
                        <h2 className="text-gray-900 font-medium title-font tracking-wider text-5xl mb-6">OOPS</h2>
                        <p className="leading-relaxed text-lg">The page you were looking<br />is still under maintainence</p>
                        <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
                    </div>
                </div>
            </section>
        </>
    )
}
