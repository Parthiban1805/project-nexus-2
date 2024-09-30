import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="Content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Quality is our core. Innovation is our drive.</p>
        </div>
        <p className="p__opensans"> We are committed to excellence in every dish we serve, blending tradition with modernity to bring you flavors that inspire.</p>
      </div>

      
    </div>
  </div>
);

export default Chef;
