import React, { useState } from 'react';
import AddPhotos from '../../Components/AddPhotos/AddPhotos';
import OverView from '../../Components/OverView/OverView';

const Dashboard = () => {
    const [activeButton, setActiveButton] = useState('Overview');

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <div className='flex bg-slate-100'>
            <div className='w-48 bg-[#28396f] h-screen text-white'>
                <button
                    className={`flex text-left w-full px-5 py-2 ${activeButton === 'Overview' ? 'bg-[#314375]' : ''}`}
                    onClick={() => handleButtonClick('Overview')}
                >
                    Overview
                </button>
                <button
                    className={`flex text-left w-full px-5 py-2 ${activeButton === 'My Profile' ? 'bg-[#314375]' : ''}`}
                    onClick={() => handleButtonClick('My Profile')}
                >
                    My Profile
                </button>
                <button
                    className={`flex text-left w-full px-5 py-2 ${activeButton === 'Add Photos' ? 'bg-[#314375]' : ''}`}
                    onClick={() => handleButtonClick('Add Photos')}
                >
                    Add Photos
                </button>
                <button
                    className={`flex text-left w-full px-5 py-2 ${activeButton === 'Reviews' ? 'bg-[#314375]' : ''}`}
                    onClick={() => handleButtonClick('Reviews')}
                >
                    Reviews
                </button>
                <button
                    className={`flex text-left w-full px-5 py-2 ${activeButton === 'Budget Calculator' ? 'bg-[#314375]' : ''}`}
                    onClick={() => handleButtonClick('Budget Calculator')}
                >
                    Budget Calculator
                </button>
            </div>
            <div className='h-screen pt-10'>
                {activeButton === 'Overview' ? <OverView /> :
                    activeButton === 'Add Photos' ?
                        <AddPhotos />
                        : null}
            </div>
        </div>
    );
};

export default Dashboard;
