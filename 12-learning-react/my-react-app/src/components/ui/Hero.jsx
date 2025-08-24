// Hero.jsx
import React from 'react';

const Hero = () => {
    return (
        <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Welcome to My Website
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mb-8">
                This is a simple hero section with Tailwind CSS and dark mode support. Toggle the theme from the header to see it change.
            </p>
            <div className="flex gap-4">
                <button className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors cursor-pointer">
                    Get Started
                </button>
                <button className="px-6 py-3 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100 font-medium transition-colors cursor-pointer">
                    Learn More
                </button>
            </div>
        </section>
    );
};

export default Hero;
