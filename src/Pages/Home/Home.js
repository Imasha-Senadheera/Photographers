import React from 'react'
import Cover from '../../Assests/Cover.png'
import { FaFacebook, FaUserCircle, FaWhatsapp } from 'react-icons/fa';
import { cardsData } from '../../Constants/MockData';
import ImageCard from '../../Components/ImageCard/ImageCard';
import { AiFillInstagram } from 'react-icons/ai';
import { CiHeart } from 'react-icons/ci';
const Home = () => {
    return (
        <>
            <div className='w-full h-80'>
                <img src={Cover} alt="" className='w-full h-full object-cover' />
            </div>
            <div className='flex bg-slate-100'>
                <div className=' flex mx-[10%] gap-16  w-full h-screen p-10'>
                    <div className='w-[70%]'>
                        <div className='flex items-center gap-5 pb-5'>
                            <FaUserCircle className='text-6xl' />
                            <div>
                                <p className='text-xl'>Pasindu Maneesha</p>
                                <p className='text-xs'>Orgainzation Name</p>
                                <p className='text-xs'>Location</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-3 gap-4'>
                            {cardsData.map((item) => <ImageCard key={item.id} imageUrl={item.imageUrl} add={item.add} />)}
                        </div>
                    </div>
                    <div className=' w-[30%] font-semibold' >
                        <div className='flex gap-5 '>
                            <button className='flex gap-3 items-center justify-center bg-white text-black rounded w-full h-10 border-2 border-blue-700'><CiHeart className='text-red-400' />Like</button>
                            <button className='bg-blue-900 text-white rounded-lg w-full h-10'>Add Review</button>
                        </div>
                        <div className='my-10 p-6 border-2 border-blue-700'>
                            <p className='text-blue-700'>About</p>
                            <div className='text-xs mt-2'>
                                <li>Joined on : 01/25/2022</li>
                                <li>Jobs done : 5</li>
                                <li>Experience : 2 years</li>
                                <li>Price range : 80000-120000</li>
                                <li>Category : Wedding, Birthdays, Party</li>
                            </div>
                        </div>
                        <div className='my-10 p-6 border-2 border-blue-700'>
                            <p className='text-blue-700'>Social Links</p>
                            <div className='flex gap-5 text-4xl mt-2'>
                                <FaFacebook />
                                <FaWhatsapp />
                                <AiFillInstagram />
                            </div>
                        </div>
                        <div className='my-10 p-6 border-2 border-blue-700'>
                            <p className='text-blue-700'>Description</p>
                            <div className='flex gap-5 mt-2 text-sm'>
                                lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}

export default Home;
