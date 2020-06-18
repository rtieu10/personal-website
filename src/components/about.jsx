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
                  <div className="col-lg-4 ml-auto"><p className="lead"> I am Rachel Tieu, a rising junior at Hunter College. I am majoring in Computer Science, and planning on minoring in Mathematics. This summer I will be participating in the New Technologists Program at Microsoft.
                                                                         I am currently participating in the
                                                                         <a href= "https://www.thewitproject.com/"> WiT Project </a> to build a web application for YearUp, a non-profit organization, using Python and its frameworks such as Django. </p></div>
                  <div className="col-lg-4 mr-auto"><p className="lead"> Alongside technology, I am also passionate about non-profit work and using technology for social good. Outside of school, I volunteer as a teaching assistant through <a href="https://www.microsoft.com/en-us/teals"> TEALS</a>, a Microsoft philanthropies program.
                                                                         I am passionate about increasing diveristy in the field of technology. I belive technology is powerful and has the ability to amplify the voices underrepresented groups. </p></div>
              </div>


          </div>
      </section>

    );

  }
}

export default About
