import React from 'react'

const OverView = () => {
    return (
        <div className='bg-slate-100 px-32'>
            <div className='flex gap-20'>
                <div className=' bg-white border-2 border-blue-700 rounded-lg px-5 py-2 w-48'>
                    <div>
                        <p className='text-gray-500 font-semibold flex justify-center'>Uploaded Photos</p>
                        <p className='text-black font-semibold text-2xl my-3 flex justify-center'>60</p>
                    </div>
                </div>
                <div className=' bg-white border-2 border-blue-700 rounded-lg px-5 py-2 w-48'>
                    <div>
                        <p className='text-gray-500 font-semibold flex justify-center'>Views</p>
                        <p className='text-black font-semibold text-2xl my-3 flex justify-center'>16</p>
                    </div>
                </div>
                <div className=' bg-white border-2 border-blue-700 rounded-lg px-5 py-2 w-48'>
                    <div>
                        <p className='text-gray-500 font-semibold flex justify-center'>Likes</p>
                        <p className='text-black font-semibold text-2xl my-3 flex justify-center'>43</p>
                    </div>
                </div>
                <div className=' bg-white border-2 border-blue-700 rounded-lg px-5 py-2 w-48'>
                    <div>
                        <p className='text-gray-500 font-semibold flex justify-center'>Ratings</p>
                        <p className='text-black font-semibold text-2xl my-3 flex justify-center'>64</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OverView
