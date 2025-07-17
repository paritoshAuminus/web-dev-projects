const Accordian = (props) => {
    return (
        <>
            <div className='w-full'>
                <div className='flex justify-between text-xl cursor-pointer'>
                    <span>{props.question}</span>
                    <div className='text-2xl'>{props.icon}</div>
                </div>
                <div className='mt-5'>{props.answer}</div>
            </div>
            <hr className='my-5'/>
        </>
    )
}

export default Accordian