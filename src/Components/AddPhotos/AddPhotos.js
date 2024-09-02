import React from 'react'
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { cardsData } from '../../Constants/MockData';
import ImageCard from '../ImageCard/ImageCard';
import { IoIosAddCircle } from 'react-icons/io';

const AddPhotos = () => {
    return (
        <div className='flex gap-60'>
            <div className='pl-14'>
                <p className='text-blue-700 font-semibold'>Profile</p>
                <form>
                    <div className="space-y-1">
                        <div className='flex gap-5'>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">First Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your first name"
                                    className="border rounded px-4 py-2 w-full"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your last name"
                                    className="border rounded px-4 py-2 w-full"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Organization Name</label>
                            <input
                                type="text"
                                placeholder="Enter your organization name"
                                className="border rounded px-4 py-2 w-full"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="border rounded px-4 py-2 w-full"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Change Password</label>
                            <input
                                type="password"
                                placeholder="Enter a new password"
                                className="border rounded px-4 py-2 w-full"
                            />
                        </div>
                        <div className='flex gap-5'>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Add Profile Photo</label>
                                <div className="relative">
                                    <input
                                        type="file"
                                        id="fileInput"
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                        onChange={(e) => {
                                            const fileName = e.target.files[0]?.name || '';
                                            document.getElementById('fileInputText').value = fileName;
                                        }}
                                    />
                                    <input
                                        type="text"
                                        id="fileInputText"
                                        placeholder="Select a file"
                                        className="border rounded px-4 py-2 w-full cursor-pointer"
                                        readOnly
                                        onClick={() => document.getElementById('fileInput').click()}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Experience</label>
                                <input
                                    type="text"
                                    placeholder="Enter your experience"
                                    className="border rounded px-4 py-2 w-full"
                                />
                            </div>
                        </div>

                        <div className='flex gap-5'>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Category</label>
                                <input
                                    type="text"
                                    placeholder="Enter your category"
                                    className="border rounded px-4 py-2 w-full"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Contact Number</label>
                                <input
                                    type="tel"
                                    placeholder="Enter your contact number"
                                    className="border rounded px-4 py-2 w-full"
                                />
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Min Price</label>
                                <input
                                    type="number"
                                    placeholder="Enter the minimum price"
                                    className="border rounded px-4 py-2 w-full"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Max Price</label>
                                <input
                                    type="number"
                                    placeholder="Enter the maximum price"
                                    className="border rounded px-4 py-2 w-full"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Description</label>
                            <textarea
                                placeholder="Enter a description"
                                className="border rounded px-4 py-2 w-full"
                            ></textarea>
                        </div>
                    </div>

                    <div className='flex gap-5  mt-2 justify-center'>
                        <button className='bg-white rounded-full p-3 flex items-center gap-2'><FaFacebook />Connected</button>
                        <button className='bg-white rounded-full p-3 flex items-center gap-2'><FaWhatsapp /> Connect</button>
                        <button className='bg-white rounded-full p-3 flex items-center gap-2'><AiFillInstagram /> Connect</button>
                    </div>
                    <div className='flex justify-center mt-3'>
                        <button className="bg-blue-900 text-white rounded-full w-32  h-10">Save</button>
                    </div>
                </form>
            </div>
            <div>
                <p className='text-blue-700 font-semibold'>Add Photos</p>
                <div className='grid grid-cols-3 gap-4'>
                    {cardsData.map((item) => <ImageCard key={item.id} imageUrl={item.imageUrl} add={item.add} />)}
                </div>
                <p className='text-blue-700 font-semibold mt-3'>Add Cover Photo</p>
                <div className="flex justify-center items-center w-full h-48 object-cover bg-white text-black cursor-pointer">
                    <div className='flex justify-center opacity-65 cursor-pointer'>
                        <IoIosAddCircle className='text-4xl' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPhotos
