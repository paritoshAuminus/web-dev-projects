import { useState } from "react"
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa"

const Accordian = (props) => {

    const [show, setShow] = useState(false)

    return (
        <>
            <div className='w-full'>
                <div className='flex justify-between text-xl cursor-pointer'>
                    <span>{props.question}</span>
                    <div className='text-2xl' onClick={() => setShow(!show)}>{show ? <FaMinusCircle /> : <FaPlusCircle />}</div>
                </div>
                {show ?
                    <div className='mt-5 text-sm transition-all'>{props.answer}</div>                
                : false}
            </div>
            <hr className='my-5' />
        </>
    )
}

export default Accordian