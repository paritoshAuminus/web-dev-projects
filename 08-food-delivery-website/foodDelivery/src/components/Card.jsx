import React from 'react'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/cartSlice';
import { toast } from 'react-toastify';

const Card = ({name, image, id, price, type}) => {

    let dispatch = useDispatch()

    return (
        <div key={id} className='flex flex-col gap-4 w-[300px] h-[380px] bg-white p-3 rounded-lg shadow-lg hover:border-2 hover:border-green-300'>
            <div className='w-[100%] h-[50%] overflow-hidden rounded-lg'>
                <img src={image} alt="image 1" className='object-cover' />
            </div>
            <div>
                <div className='text-2xl font-semibold'>{name}</div>
                <div className='w-full flex justify-between items-center text-lg mb-10 font-bold  text-green-500'>
                    <div>{price}</div>
                    <div className='flex justify-center items-center gap-2'>
                        {type==='veg' ? <LuLeafyGreen /> : <GiChickenOven />}
                        <span>{type}</span>
                    </div>
                </div>
                <button onClick={() => {
                    dispatch(AddItem({id:id, name:name, price:price, image:image, qty:1})); 
                    toast.success('Item added')
                    }} className='w-full p-3 rounded-lg text-white bg-green-500 hover:bg-green-400 transition-all cursor-pointer'>Add to cart</button>
            </div>
        </div>
    )
}

export default Card