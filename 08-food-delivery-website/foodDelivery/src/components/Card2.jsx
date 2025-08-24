import React from 'react'
import image1 from '../assets/image1.avif'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { DecrementQty, IncrementQty, RemoveItem } from '../redux/cartSlice'

const Card2 = ({name, id, price, image, qty}) => {

    let dispatch = useDispatch()

    return (
        <div className='w-full h-[120px] p-2 shadow-lg flex justify-between'>
            <div className='w-[70%] h-full flex gap-3'>
                <div className='w-[50%] h-full overflow-hidden rounded-lg'>
                    <img src={image} className='object-cover' alt="Item Image" />
                </div>
                <div className='w-[40%] h-full flex flex-col gap-5'>
                    <div className='text-lg text-gray-600 font-bold'>{name}</div>
                    <div className='flex w-[110px] h-[50px] bg-slate-400 rounded-lg shadow-lg overflow-hidden text-xl border-2 border-green-400 font-semibold text-green-400'>
                        <button onClick={() => qty > 1 ? dispatch(DecrementQty(id)) : 1} className='w-[30%] h-full bg-white flex justify-center items-center hover:bg-gray-200'>-</button>
                        <button className='w-[40%] h-full bg-slate-200 flex justify-center items-center'><span>{qty}</span></button>
                        <button onClick={() => dispatch(IncrementQty(id))} className='w-[30%] h-full bg-white flex justify-center items-center hover:bg-gray-200'>+</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-end gap-6'>
                <span className='text-xl text-green-400 font-semibold'>{price}/-</span>
                <RiDeleteBin6Fill className='w-[30px] h-[30px] text-red-400 cursor-pointer' onClick={() => dispatch(RemoveItem(id))} />
            </div>
        </div>
    )
}

export default Card2