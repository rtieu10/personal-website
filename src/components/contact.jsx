import React from 'react';

class Contact extends React.Component{
  render(){
    return(
      <section className="contact-section" id="contact">
          <div className="container">

              <h2 className="contact-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>

              <div className="divider-custom">
                  <div className="divider-custom-line"></div>
                  <div className="divider-custom-icon"><i className="fa fa-star"></i></div>
                  <div className="divider-custom-line"></div>
              </div>

              <div className="row">
                  <div className="col-lg-12 text-center">
                      <p style={{fontSize: '22px'}}> Email: rachel.tieu02@myhunter.cuny.edu </p>
                      <p style={{fontSize: '22px'}}> Cell: 718-683-2011 </p>
                  </div>
              </div>
          </div>
      </section>

    );
  }
}

export default Contact
