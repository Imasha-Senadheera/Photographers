import React from 'react'
import { IoIosAddCircle } from "react-icons/io";
const ImageCard = ({ imageUrl, add }) => {
    return (
        <div className="bg-white shadow-md overflow-hidden">
            {add ?
                <div className="flex justify-center items-center w-full h-32 object-cover bg-white text-black cursor-pointer">
                    <div className='flex justify-center opacity-65 cursor-pointer'>
                        <IoIosAddCircle className='text-4xl' />
                    </div>
                </div>
                : <img src={imageUrl} alt="Card" className="w-full h-32 object-cover" />}

        </div>
    )
}

export default ImageCard
