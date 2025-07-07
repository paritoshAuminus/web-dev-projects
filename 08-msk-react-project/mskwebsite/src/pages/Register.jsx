import React, { useState } from 'react';

function Register() {

    window.scrollTo(0,0);

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        mobile: '',
        email: '',
        gender: '',
        password: '',
        repeatPassword: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Registeration complete!');
        console.log(`First Name: ${form.firstName}`);
        console.log(`Last Name:  ${form.lastName}`);
        console.log(`Mobile:     ${form.mobile}`);
        console.log(`Email:      ${form.email}`);
        console.log(`Gender:     ${form.gender}`);
        console.log(`Password:   ${form.password}`);

        setForm({
            firstName: '',
            lastName: '',
            mobile: '',
            email: '',
            gender: '',
            password: '',
            repeatPassword: ''
        })
    }

    return (
        <section className="py-12">
            <div className="container mx-auto px-4 max-w-6xl bg-white shadow-md rounded-lg p-8">
                <h2 className="text-xl font-medium mb-6">
                    Registration - Create A Student Account
                </h2>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* First Name */}
                    <div>
                        <label className="block mb-2 text-md">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            onChange={handleChange}
                            value={form.firstName}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Last Name */}
                    <div>
                        <label className="block mb-2 text-md">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            onChange={handleChange}
                            value={form.lastName}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Mobile No */}
                    <div>
                        <label className="block mb-2 text-md">Mobile No:</label>
                        <input
                            type="text"
                            name="mobile"
                            onChange={handleChange}
                            value={form.mobile}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <p className="text-sm text-gray-500 mt-1">
                            We'll never share your mobile with anyone else.
                        </p>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-2 text-md">Email</label>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={form.email}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <p className="text-sm text-gray-500 mt-1">
                            We'll never share your email with anyone else.
                        </p>
                    </div>

                    {/* Gender */}
                    <div>
                        <label className="block mb-2 text-md">Gender</label>
                        <div className="flex flex-col gap-4 text-sm text-gray-500">
                            <label className="flex items-center">
                                <input type="radio" name="gender" value="male" onChange={handleChange} className="mr-2" />
                                Male
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="gender" value="female" onChange={handleChange} className="mr-2" />
                                Female
                            </label>
                        </div>
                    </div>

                    {/* Date of Birth */}
                    <div>
                        <label className="block mb-2 text-md">Date Of Birth</label>
                        <input
                            type="date"
                            name="dob"
                            className="w-full border text-gray-500 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block mb-2 text-md">Create Password</label>
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            value={form.password}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Repeat Password */}
                    <div>
                        <label className="block mb-2 text-md">Repeat Password</label>
                        <input
                            type="password"
                            name="repeatPassword"
                            onChange={handleChange}
                            value={form.repeatPassword}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Register Button */}
                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="w-full bg-indigo-900 text-white py-3 rounded hover:bg-indigo-800 transition"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Register;
