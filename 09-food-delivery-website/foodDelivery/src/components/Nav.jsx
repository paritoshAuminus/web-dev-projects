import React, { useContext, useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';


const Nav = () => {

    let { input, setInput, category, setCategory, showcart, setShowcart } = useContext(dataContext);

    useEffect(() => {
        let newList = food_items.filter((item) => item.food_name.includes(input) || item.food_name.toLowerCase().includes(input));
        setCategory(newList);
    }, [input])


    let items = useSelector(state => state.cart)


    return (
        <div className='w-full h-[100px] flex justify-between items-center px-8'>
            <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
                <MdFastfood className='w-[30px] h-[30px] text-green-500' />
            </div>
            <form action="" onSubmit={(e) => e.preventDefault()} className='flex w-[45%] md:w-[70%] h-[60px] bg-white items-center px-5 gap-5 rounded-md shadow-xl'>
                <IoSearch className='text-green-500 w-[20px] h-[20px]' />
                <input type="text" onChange={e => setInput(e.target.value)} value={input} placeholder='Search Items...' className='w-[100%] outline-none text-[16px] md:text-[20px] text-gray-500' />
            </form>
            <div onClick={() => setShowcart(true)} className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative cursor-pointer'>
                <span className='absolute top-0 right-2 text-green-500 font-bold text-[18px]'>{items.length}</span>
                <LuShoppingBag className='w-[30px] h-[30px] text-green-500' />
            </div>
        </div>
    )
}

export default Nav