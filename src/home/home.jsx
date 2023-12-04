import React from 'react';
import Header from '../components/header/header';
import './home.css';
import Banner from '../components/banner/banner';

const Home = () => {
  return (
    <>
      <div className='home-wrapper'>
        <Header />
        <Banner />
        <div className='content-grid'>
          <h3>Coding Projects</h3>
          <div className='card-grid'>
            <div className='card'>
              <img src='./img/lyrics_bites2.JPG' alt='' />
              <div className='card-title'>Title</div>
              <div className='card-description'>decription</div>
            </div>
            <div className='card'>
              <img src='./img/lyrics_bites2.JPG' alt='' />
              <div className='card-title'>Title</div>
              <div className='card-description'>decription</div>
            </div>
            <div className='card'>
              <img src='./img/lyrics_bites2.JPG' alt='' />
              <div className='card-title'>Title</div>
              <div className='card-description'>decription</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
