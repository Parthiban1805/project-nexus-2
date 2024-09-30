import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './contact.css';  // Assuming your CSS files are in the same directory or you can adjust the path.
import './animate.css';

const Contact = () => {
  return (
    <div className="container-fluid">
      <div className="col-md-12 contact">
        <nav>
          <div className="row">
            <div className="col-md-3 brand">
            </div>
         
          </div>
        </nav>
        <div className="main-part">
          <h3 className="text-center">CONTACT</h3>
          <h1 className="text-center">INFORMATION</h1>
          <hr />
          <div className="row">
            <div className="col-md-3 mx-auto text-center box1 wow animated fadeInUp">
              <i className="fas fa-map-marker-alt"></i>
              <h2>OUR ADDRESS</h2>
              <p>22 Royal Street, Sundance Avenue</p>
              <p>Near Juhu Beach, Mumbai</p>
              <p>235161, India</p>
            </div>
            <div className="col-md-3 mx-auto text-center box2 wow animated fadeInUp" style={{ animationDelay: '0.3s' }}>
              <i className="fas fa-phone"></i>
              <h2>OUR PHONES</h2>
              <p>Phone: 9687426304</p>
              <p>Mobile: +91 999999999</p>
              <p>Fax: +91 916-415-4545</p>
            </div>
            <div className="col-md-3 mx-auto text-center box3 wow animated fadeInUp" style={{ animationDelay: '0.6s' }}>
              <i className="fas fa-clock"></i>
              <h2>OPENING HOURS</h2>
              <p>Mon - Fri : 08:00 am - 10:00 pm</p>
              <p>Sat : 09:00 am - 11:00 pm</p>
              <p>Sun : 11:00 am - 12:00 pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
