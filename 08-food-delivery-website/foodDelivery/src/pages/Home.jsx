import React, { useContext, useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Categories from '../Categories'
import Card from '../components/Card'
import { food_items } from '../food'
import { dataContext } from '../context/UserContext'
import { RxCross2 } from 'react-icons/rx'
import { useSelector } from 'react-redux'
import Card2 from '../components/Card2'
import { toast } from 'react-toastify'


const Home = () => {

    let { category, setCategory, input, showcart, setShowcart } = useContext(dataContext);

    function filterCategory(category) {
        if (category === 'all') {
            setCategory(food_items);
        } else {
            let newList = food_items.filter((item) => (item.food_category === category));
            setCategory(newList);
        }
    }

    let items = useSelector(state => state.cart)

    // CODE WRITTEN BY COPILOT STARTS
    let subtotal = items.reduce((total, item) => {
        let price = typeof item.price === 'string'
            ? parseFloat(item.price.replace(/[^0-9.]/g, ''))
            : Number(item.price) || 0;
        let qty = typeof item.qty === 'string'
            ? parseFloat(item.qty.replace(/[^0-9.]/g, ''))
            : Number(item.qty) || 0;
        return total + qty * price;
    }, 0);
    // CODE WRITTEN BY COPILOT ENDS

    let deliveryFee = 20;
    let taxes = subtotal * 0.5 / 100;
    let total = Math.floor(subtotal + deliveryFee + taxes);

    return (
        <>
            <div className='bg-slate-200 w-full min-h-screen'>
                <Nav />
                {!input ? <div className={'flex flex-wrap justify-center items-center gap-5'}>
                    {Categories.map((item) => {
                        return <div className='flex flex-col gap-3 p-5 items-center justify-center w-32 h-w-32 bg-white rounded-lg shadow-xl capitalize cursor-pointer font-semibold text-gray-500 hover:bg-green-200 transition-all duration-200' onClick={() => filterCategory(item.name)}>{item.icon}{item.name}</div>
                    })}
                </div> : null}

                <div className='w-full flex flex-wrap gap-5 justify-center items-center py-8'>
                    {category.length > 1 ? 
                    category.map((item) => {
                        return (
                            <Card
                                name={item.food_name}
                                image={item.food_image}
                                price={`Rs ${item.price}`}
                                id={item.id}
                                type={item.food_type}
                            />
                        )
                    }) : <div className='w-full flex justify-center pt-8 text-green-500 text-2xl font-semibold'>No dish Found</div> }
                </div>
            </div>
            <div className={`${showcart ? 'translate-x-0' : 'translate-x-full'} transition-all duration-500 w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 overflow-auto`}>
                <header className='w-[100%] flex justify-between items-center'>
                    <span className='text-green-400 text-lg font-semibold'>Order Items</span>
                    <span><RxCross2 onClick={() => setShowcart(false)} className='w-[30px] h-[30px] text-green-400 cursor-pointer hover:text-gray-600' /></span>
                </header>

                {items.length > 0 ? <>
                    <div className='w-full mt-9 flex flex-col gap-8'>
                        {items.map((item) => (
                            <Card2 name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty} />
                        ))}
                    </div>
                    <div className='w-full border-t-2 border-gray-400 mt-7'>
                        <div className='w-full flex justify-between items-center'>
                            <span className='text-lg text-gray-600 font-semibold'>Sub total</span>
                            <span className='text-green-400 font-semibold text-lg'>Rs {subtotal}/-</span>
                        </div>
                        <div className='w-full flex justify-between items-center'>
                            <span className='text-lg text-gray-600 font-semibold'>Delivery Fee</span>
                            <span className='text-green-400 font-semibold text-lg'>Rs {deliveryFee}/-</span>
                        </div>
                        <div className='w-full flex justify-between items-center'>
                            <span className='text-lg text-gray-600 font-semibold'>Taxes</span>
                            <span className='text-green-400 font-semibold text-lg'>Rs {taxes}/-</span>
                        </div>
                    </div>
                    <hr className='mb-5 border border-gray-500' />
                    <div>
                        <div className='w-full flex mb-5 justify-between items-center text-xl'>
                            <span className='text-gray-600 font-semibold'>Total</span>
                            <span className='text-green-400 font-semibold'>Rs {total}/-</span>
                        </div>
                        <div className='flex justify-center'>
                            <button onClick={() => toast.success('Order Placed')} className='w-[80%] p-3 rounded-lg text-white bg-green-500 hover:bg-green-400 transition-all cursor-pointer'>Place Order</button>
                        </div>
                    </div>
                </> : <div className='w-full flex justify-center pt-8 text-green-500 text-2xl font-semibold'>Empty Cart</div>}
                
            </div>
        </>
    )
}

export default Home