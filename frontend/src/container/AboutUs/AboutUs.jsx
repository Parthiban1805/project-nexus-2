import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <>
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans_1"> Founded by Parthiban, a passionate foodie with a background in AI and Data Science, our restaurant is dedicated to delivering an extraordinary dining experience. Our menu features a curated selection of dishes crafted with the freshest ingredients and innovative cooking techniques. By blending traditional flavors with modern culinary trends, we create mouthwatering, visually appealing meals that satisfy both the palate and the eyes. We take pride in our commitment to quality, creativity, and exceptional customer service. Join us for a meal that promises to be unforgettable!
</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans"> Founded by Parthiban in 2024, our restaurant was born from a vision to provide a unique and unforgettable dining experience, focused on quality and innovation. By combining the finest ingredients with creative culinary techniques, we aim to deliver dishes that delight the senses and leave a lasting impression.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
  </>
);

export default AboutUs;
