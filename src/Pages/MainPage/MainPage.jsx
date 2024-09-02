import React from 'react';
import './MainPage.css';

const MainPage = () => {
  return (
    <div className="container">
      <img className="provider-image" src="https://via.placeholder.com/1922x997" alt="Provider" />
      <div className="provider-overlay"></div>
      <div className="header">
        <div className="header-background"></div>
        <div className="login-button">
          <div className="login-text">Login</div>
        </div>
        <div className="menu-item home">Home</div>
        <div className="menu-item about-us">About us</div>
        <div className="menu-item faqs">FAQs</div>
      </div>
      <div className="title">CELEBRATE YOUR STORY THROUGH PHOTOGRAPHY</div>
      <div className="subtitle">Its simple and its free. Connect with hand-picked, local photographers around the Sri Lanka for fun, hassle-free photo shoots. So what are you waiting for? Lets find a photographer</div>
      <div className="input-field keyword-input"></div>
      <div className="input-field location-input"></div>
      <div className="input-field price-range-input"></div>
      <div className="search-button">
        <div className="search-button-inner">
          <div className="search-button-text">Search</div>
        </div>
      </div>
      <div className="filter-button">
        <div className="filter-button-inner">
          <div className="filter-button-text">Filter</div>
        </div>
      </div>
      <div className="photography-section">
        <img className="photography-section-image" src="https://via.placeholder.com/1920x380" alt="Photography" />
        <div className="photography-section-text">Hire an amazing local photographer, anywhere in the Sri Lanka. Celebrate your story through photography</div>
      </div>
      <div className="section-title">Capture Beautiful Memories with a Fun, Hassle-Free Photo Shoot.</div>
      <div className="feature-title">500+ Photographers</div>
      <div className="feature-text">Easy, Hassle-Free Booking Process</div>
      <div className="professional-guaranteed-text">Beautiful and Professional Photos Guaranteed</div>
      <div className="trusted-reviews-text">Over 2000, 5 Star Trusted Reviews</div>
      <div className="comment-section"></div>
      <div className="comment-avatar"></div>
      <div className="comment-text">Metna tmai comment danne.5 dnekge wage comments metn auto slide wenna hadanna.uda tynne uge photo eka</div>
      <div className="commenter-name">Commenter Name</div>
      <div className="join-community-section"></div>
      <div className="join-community-title">Join Our Photography Community Today</div>
      <div className="join-community-description">Be found by people looking for their perfect photographer, showcase your work, enter our awards and features</div>
      <div className="sign-up-button">
        <div className="sign-up-button-inner">
          <div className="sign-up-button-text">Sign Up</div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
