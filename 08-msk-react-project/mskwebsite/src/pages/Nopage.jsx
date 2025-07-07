import React from 'react'

const Nopage = () => {

  window.scrollTo(0,0);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <i className='fa-solid fa-hippo text-9xl text-blue-950'></i>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-5xl mb-6">404 Not Found</h2>
            <p className="leading-relaxed text-lg">The page you were looking<br/>for doesn't exist</p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Nopage