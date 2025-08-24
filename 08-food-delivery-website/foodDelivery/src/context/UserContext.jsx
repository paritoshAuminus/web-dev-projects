import React, { createContext, useState } from 'react'
import { food_items } from '../food';

export const dataContext = createContext();


const UserContext = ({ children }) => {
    const [category, setCategory] = useState(food_items);
    const [input, setInput] = useState('');
    const [showcart, setShowcart] = useState(false);

    let data = { input, setInput, category, setCategory, showcart, setShowcart }
    
    return (
        <div>
            <dataContext.Provider value={data}>
                {children}
            </dataContext.Provider>
        </div>
    )
}

export default UserContext