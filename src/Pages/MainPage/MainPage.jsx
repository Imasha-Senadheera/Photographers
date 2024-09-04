import React from "react";
import Header from "../../Components/Header/Header";
import MainHeader from "../../Components/MainHeader/MainHeader";
import PhotographerList from "../../Components/PhotographerList/PhotographerList";
import Footer from "../../Components/Footer/Footer";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="main-page">
      <Header isMainPage={true} />
      <MainHeader />
      <PhotographerList />
      <Footer />
    </div>
  );
};

export default MainPage;
