import React from 'react'

const Card2 = (props) => {
    return (
        <>
            <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    {props.title}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase text-gray-500 dark:text-neutral-500">
                    {props.subtitle}
                </p>
                <p className="mt-2 text-gray-500 dark:text-neutral-400">
                    {props.text}
                </p>
                <a
                    className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-hidden focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600"
                    href={props.link}
                >
                    Enroll Now
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </a>
            </div>
        </>
    )
}

Card2.defaultProps = {
    title: "Card Title",
    subtitle: "Card Subtitle",
    text: "Card Text here.",
    link: "#"
}

export default Card2
