import React from 'react';
import './reservation.css';
import image_right from '../../assets/book_img_4.png';
import image_left from '../../assets/book_img_2.png';

const Reservation = () => {
  return (
    <div className="reservation">
      <div id="reservation-content">
        <div id="img-left">
          <img 
            src={image_left} 
            alt="left" 
            className="img-fluid img-left" 
          />
        </div>

        <div id="booking">
          <h3>Reservation</h3>
          <h2>Book your table</h2>
          <hr className="hr9" />
          
          <form >
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              className="form-control" 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              className="form-control" 
            />
            <input 
              type="text" 
              name="date" 
              placeholder="Date (dd-mm-yyyy)" 
              className="form-control" 
            />
            <input 
              type="text" 
              name="time" 
              placeholder="Time (hh-mm-ss)" 
              className="form-control" 
            />
            <input 
              type="number" 
              name="people" 
              placeholder="No. of people" 
              className="form-control" 
            />
            <button className="btn">FIND A TABLE</button>
          </form>
        </div>

        <div id="img-right">
          <img 
            src={image_right} 
            alt="right" 
            className="img-fluid img-right" 
          />
        </div>
      </div>
    </div>
  );
};

export default Reservation;
