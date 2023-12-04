import React from 'react';
import SocialMedia from '../social-media/social-media';
import './banner.css';

const Banner = () => {
  return (
    <div className='container'>
      <h1>Davide Naccarati</h1>
      <p className='sub-title'>Front-end Developer</p>
      <SocialMedia
        github='https://github.com/Banjer71'
        linkedin='https://www.linkedin.com/in/davide-naccarati-877b9821/'
        mail='mailto:davide.naccarati@gmail.com'
      />
    </div>
  );
};

export default Banner;
