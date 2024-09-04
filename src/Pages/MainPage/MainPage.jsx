import React, { useState } from "react"; 
import Header from "../../Components/Header/Header";
import MainHeader from "../../Components/MainHeader/MainHeader";
import PhotographerList from "../../Components/PhotographerList/PhotographerList";
import Footer from "../../Components/Footer/Footer";
import "./MainPage.css";

const MainPage = () => {
  const [searchParams, setSearchParams] = useState({});

  const handleSearch = (params) => {
    setSearchParams(params);
  };

  return (
    <div className="main-page">
      <Header isMainPage={true} />
      <MainHeader onSearch={handleSearch} />
      <PhotographerList searchParams={searchParams} />
      <Footer />
    </div>
  );
};

export default MainPage;
