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
                  <div className="col-lg-4 ml-auto"><p className="lead"> I am Rachel Tieu, a junior at Hunter College. I am majoring in Computer Science with a minor in Mathematics. In the upcoming summer, I will be a Global Technology Analyst at Bank of America. This past summer I participated in the New Technologists Program at Microsoft where I built a web application called <a href="https://github.com/rtieu10/carefree"> Carefree </a>.
                                                                         I was previously a fellow at the
                                                                         <a href= "https://www.thewitproject.com/"> WiT Project </a> where I built a web application for YearUp, a non-profit organization, using Python </p></div>
                  <div className="col-lg-4 mr-auto"><p className="lead">  and its frameworks such as Django. Alongside technology, I am also passionate about non-profit work and using technology for social good. Outside of school, I volunteer as a teaching assistant through <a href="https://www.microsoft.com/en-us/teals"> TEALS</a>, a Microsoft philanthropies program.
                                                                         I am passionate about increasing diversity in the field of technology. I believe technology is powerful and has the ability to amplify the voices underrepresented groups. </p></div>
              </div>


          </div>
      </section>

    );

  }
}

export default About
