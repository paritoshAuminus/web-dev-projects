import React, { useState } from 'react'

const Login = () => {

    window.scrollTo(0,0);

    const [form, setForm] = useState({
        name: '',
        password: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Login data:', form);
        setForm({ name: '', password: '' });
    };

    return (
        <form className="flex flex-col items-center -m-2 py-12 px-0 md:p-12" onSubmit={handleSubmit}>
            <div className="p-2 w-1/2">
                <h1 className='text-2xl mb-4'>Log In to Your SKB Account!</h1>
                <div className="relative">
                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Mobile Number or Email</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
            </div>
            <div className="p-2 w-1/2">
                <div className="relative">
                    <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        placeholder='************'
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div className="p-2 w-full mt-8">
                    <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg uppercase">Login</button>
                </div>
            </div>
        </form>
    );
};

export default Login;