import React from 'react';
import avatar from '../img/avatar.PNG';   //importing image to be used on webpage
import resume from './RachelTieu-resume.pdf';

class Header extends React.Component{
  render(){
    return(
      <header className="masthead bg-primary text-white text-center">
              <div className="container d-flex align-items-center flex-column">
                  <img className="masthead-avatar mb-5" src= {avatar} alt="" />
                  <h1 className="masthead-heading text-uppercase mb-0">Rachel Tieu</h1>
                  <div className="divider-custom divider-light">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon"><i className="fa fa-star"></i></div>
                      <div className="divider-custom-line"></div>
                  </div>
                  <p className="masthead-subheading font-weight-light mb-0">Programmer - Teaching Assistant - Aspiring PM</p>
                  <br/>
                  <br/>
              </div>
              <div class="row mt-2">
                 <div class="col-md-4 text-center">
                   <a class="mx-3 c-nav-link btn btn-dark btn-lg text-center pl-3" href={resume} download> Resume </a>
                 </div>

                 <div class="col-md-4 text-center">
                   <a class="mx-3 c-nav-link btn btn-dark btn-lg text-center pl-3" href="https://github.com/rtieu10"> Github </a>
                 </div>

                 <div class="col-md-4 text-center">
                   <a class="mx-3 c-nav-link btn btn-dark btn-lg text-center pl-3" href="https://www.linkedin.com/in/racheltieu/"> Linkedin </a>
                 </div>
              </div>

          </header>

    );

  }

}

export default Header
