import React from 'react';

class About extends React.Component{
  render(){
    return(
      <section className="page-section text-secondary mb-0" id="about">
          <div className="container">

              <h2 className="page-section-heading text-center text-uppercase text-secondary">About</h2>

              <div className="divider-custom">
                  <div className="divider-custom-line"></div>
                  <div className="divider-custom-icon"><i className="fa fa-star"></i></div>
                  <div className="divider-custom-line"></div>
              </div>

              <div className="row">
                  <div className="col-lg-4 ml-auto"><p className="lead">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
                  <div className="col-lg-4 mr-auto"><p className="lead">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p></div>
              </div>


          </div>
      </section>

    );

  }
}

export default About
