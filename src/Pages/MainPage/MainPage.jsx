import React from 'react';
import MainHeader from '../../Components/MainHeader/MainHeader';  
import PhotographerList from '../../Components/PhotographerList/PhotographerList';  
import './MainPage.css';

const MainPage = () => {
    return (
        <div className="main-page">
            <MainHeader />
            <PhotographerList />
            {/* Add other components here if needed, like a footer */}
        </div>
    );
};

export default MainPage;
