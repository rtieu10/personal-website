import React from 'react';
// import logo from './logo.svg';
import header from './img/header.png';
import avatar from './img/avatar.PNG';   //importing image to be used on webpage
import resume from './components/Rachel_Tieu-resume.pdf'
import './App.css';
import Portfolio from './components/portfolio'   //the portfolio React component

function App() {

  const portfolioLinks =[

    {
      title: 'Python Calculator',
      subtitle: 'Tkinter GUI, Python',
      imgsrc : "https://image.flaticon.com/icons/svg/887/887066.svg",
      copyright:<div>Icons made by <a href="https://www.flaticon.com/authors/smalllikeart" title="smalllikeart">smalllikeart </a>
       from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    },

    {
      title: 'WiT Project',
      subtitle: 'Django, Python, HTML, CSS',
      imgsrc : "https://image.flaticon.com/icons/svg/1508/1508843.svg",
      copyright:<div>Icons made by <a href="https://www.flaticon.com/authors/mynamepong" title="mynamepong">mynamepong</a>
                from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    },

    {
      title: 'Super 1665',
      subtitle: 'React, JavaScript, HTML, CSS',
      imgsrc : "https://image.flaticon.com/icons/svg/2912/2912600.svg",
      copyright:<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik </a>
       from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    },

  ]

  return (
  // <div classNamename="NavBar">
  //   <ul>
  //     <li> <a href="home.asp"> Home </a> </li>
  //     <li> <a href="aboutme.asp"> About Me </a> </li>
  //     <li> <a href="resume.asp"> Resume </a> </li>
  //     <li> <a href="contactme.asp"> Contact Me </a> </li>
  //   </ul>
  // </div>
<body>
<div className="Portfolio">
  <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
           <div className="container">
               <a className="navbar-brand js-scroll-trigger" href="#page-top">
                  <img className="header-photo" src={ header } alt=""/>
               </a><button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu <i className="fa fa-bars"></i></button>
               <div className="collapse navbar-collapse" id="navbarResponsive">
                   <ul className="navbar-nav ml-auto">
                       <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">About</a></li>
                       <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">Portfolio</a></li>
                       <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">Contact</a></li>
                   </ul>
               </div>
           </div>
       </nav>

       <header className="masthead bg-primary text-white text-center">
               <div className="container d-flex align-items-center flex-column">
                   <img className="masthead-avatar mb-5" src= {avatar} alt="" />
                   <h1 className="masthead-heading text-uppercase mb-0">Rachel Tieu</h1>
                   <div className="divider-custom divider-light">
                       <div className="divider-custom-line"></div>
                       <div className="divider-custom-icon"><i className="fa fa-star"></i></div>
                       <div className="divider-custom-line"></div>
                   </div>
                   <p className="masthead-subheading font-weight-light mb-0">Programmer - Teaching Assistant - Aspiring Designer</p>
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


       <Portfolio portfolioLinks={portfolioLinks}> </Portfolio>

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


       <div className="copyright py-4 text-center text-white">
           <div className="container">
              <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/rtieu10"><i class="fab fa-github fa-2x"></i></a><a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/racheltieu/"><i class="fab fa-linkedin-in fa-lg"></i></a><a className="btn btn-outline-light btn-social mx-1" href="malito:rachel.tieu02@myhunter.cuny.edu"><i class="far fa-envelope fa-lg"></i></a>
           </div>
       </div>

       <div className="scroll-to-top d-lg-none position-fixed">
           <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top"><i class="fab fa-linkedin-in"></i></a>
       </div>

       <div className="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-labelledby="portfolioModal1Label" aria-hidden="true">
           <div className="modal-dialog modal-xl" role="document">
               <div className="modal-content">
                   <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                       <span aria-hidden="true"><i className="fa fa-times"></i></span>
                   </button>
                   <div className="modal-body text-center">
                       <div className="container">
                           <div className="row justify-content-center">
                               <div className="col-lg-8">

                                   <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal1Label">{ portfolioLinks.title }</h2>

                                   <div className="divider-custom">
                                       <div className="divider-custom-line"></div>
                                       <div className="divider-custom-icon"><i className="fa fa-star"></i></div>
                                       <div className="divider-custom-line"></div>
                                   </div>
                                   <img className="img-fluid rounded mb-5" src="assets/img/portfolio/cabin.png" alt="" />
                                   <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                   <button className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times fa-fw"></i>Close Window</button>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>

       <div className="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-labelledby="portfolioModal2Label" aria-hidden="true">
           <div className="modal-dialog modal-xl" role="document">
               <div className="modal-content">
                   <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                       <span aria-hidden="true"><i className="fa fa-times"></i></span>
                   </button>
                   <div className="modal-body text-center">
                       <div className="container">
                           <div className="row justify-content-center">
                               <div className="col-lg-8">

                                   <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal2Label">Tasty Cake</h2>

                                   <div className="divider-custom">
                                       <div className="divider-custom-line"></div>
                                       <div className="divider-custom-icon"><i className="fa fa-star"></i></div>
                                       <div className="divider-custom-line"></div>
                                   </div>
                                   <img className="img-fluid rounded mb-5" src="assets/img/portfolio/cake.png" alt="" />
                                   <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                   <button className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times fa-fw"></i>Close Window</button>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>

       <div className="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-labelledby="portfolioModal3Label" aria-hidden="true">
           <div className="modal-dialog modal-xl" role="document">
               <div className="modal-content">
                   <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                       <span aria-hidden="true"><i className="fa fa-times"></i></span>
                   </button>
                   <div className="modal-body text-center">
                       <div className="container">
                           <div className="row justify-content-center">
                               <div className="col-lg-8">

                                   <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal3Label">Circus Tent</h2>

                                   <div className="divider-custom">
                                       <div className="divider-custom-line"></div>
                                       <div className="divider-custom-icon"><i className="fa fa-star"></i></div>
                                       <div className="divider-custom-line"></div>
                                   </div>
                                   <img className="img-fluid rounded mb-5" src="assets/img/portfolio/circus.png" alt="" />
                                   <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                   <button className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times fa-fw"></i>Close Window</button>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>

       <div className="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-labelledby="portfolioModal4Label" aria-hidden="true">
           <div className="modal-dialog modal-xl" role="document">
               <div className="modal-content">
                   <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                       <span aria-hidden="true"><i className="fa fa-times"></i></span>
                   </button>
                   <div className="modal-body text-center">
                       <div className="container">
                           <div className="row justify-content-center">
                               <div className="col-lg-8">

                                   <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal4Label">Controller</h2>

                                   <div className="divider-custom">
                                       <div className="divider-custom-line"></div>
                                       <div className="divider-custom-icon"><i className="fa fa-star"></i></div>
                                       <div className="divider-custom-line"></div>
                                   </div>
                                   <img className="img-fluid rounded mb-5" src="assets/img/portfolio/game.png" alt="" />
                                   <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                   <button className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times fa-fw"></i>Close Window</button>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>

       <div className="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-labelledby="portfolioModal5Label" aria-hidden="true">
           <div className="modal-dialog modal-xl" role="document">
               <div className="modal-content">
                   <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                       <span aria-hidden="true"><i className="fa fa-times"></i></span>
                   </button>
                   <div className="modal-body text-center">
                       <div className="container">
                           <div className="row justify-content-center">
                               <div className="col-lg-8">

                                   <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal5Label">Locked Safe</h2>

                                   <div className="divider-custom">
                                       <div className="divider-custom-line"></div>
                                       <div className="divider-custom-icon"><i className="fa fa-star"></i></div>
                                       <div className="divider-custom-line"></div>
                                   </div>
                                   <img className="img-fluid rounded mb-5" src="assets/img/portfolio/safe.png" alt="" />
                                   <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                   <button className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times fa-fw"></i>Close Window</button>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>

       <div className="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-labelledby="portfolioModal6Label" aria-hidden="true">
           <div className="modal-dialog modal-xl" role="document">
               <div className="modal-content">
                   <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                       <span aria-hidden="true"><i className="fa fa-times"></i></span>
                   </button>
                   <div className="modal-body text-center">
                       <div className="container">
                           <div className="row justify-content-center">
                               <div className="col-lg-8">

                                   <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal6Label">Submarine</h2>

                                   <div className="divider-custom">
                                       <div className="divider-custom-line"></div>
                                       <div className="divider-custom-icon"><i className="fa fa-star"></i></div>
                                       <div className="divider-custom-line"></div>
                                   </div>
                                  <img className="img-fluid rounded mb-5" src="assets/img/portfolio/submarine.png" alt="" />
                                   <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                   <button className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times fa-fw"></i>Close Window</button>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
      </div>
    </body>
  );
}

export default App;
