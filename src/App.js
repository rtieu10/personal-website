import React, {useState} from 'react';
// import logo from './logo.svg';
// import header from './img/header.png';
import avatar from './img/avatar.PNG';   //importing image to be used on webpage
import resume from './components/Rachel_Tieu-resume.pdf';
import './App.css';
import Portfolio from './components/portfolio';   //the portfolio React component
// import Modal from 'react-modal';
import Modal from "react-bootstrap/Modal";
import PortfolioModal from './components/portfolio_modal'
import NavBar from './components/NavBar'
import Header from './components/header'
import About from './components/about'
import Contact from './components/contact'
import Footer from './components/footer'
//import "css/bootstrap.min.css";

// Modal.setAppElement('#root')

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

  // const [modalIsOpen, setModalIsOpen] = useState(false);
  // const rootElement = document.getElementById("root");


  return (

<body>
<div className="Portfolio">

       <NavBar />

       <Header />

       <About />

       <Portfolio portfolioLinks={portfolioLinks}> </Portfolio>

       <Contact />

       <Footer />

       <div className="scroll-to-top d-lg-none position-fixed">
           <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top"><i class="fab fa-linkedin-in"></i></a>
       </div>

       <PortfolioModal />
       
       // <div className="portfolio-modal modal fade" id="portfolioModal" tabindex="-1" role="dialog" aria-labelledby="portfolioModal1Label" aria-hidden="true">
       //     <div className="modal-dialog modal-xl" role="document">
       //         <div className="modal-content">
       //             <button className="close" type="button" data-dismiss="modal" aria-label="Close">
       //                 <span aria-hidden="true"><i className="fa fa-times"></i></span>
       //             </button>
       //             <div className="modal-body text-center">
       //                 <div className="container">
       //                     <div className="row justify-content-center">
       //                         <div className="col-lg-8">
       //
       //                             <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal1Label">{ portfolioLinks.title }</h2>
       //
       //                             <div className="divider-custom">
       //                                 <div className="divider-custom-line"></div>
       //                                 <div className="divider-custom-icon"><i className="fa fa-star"></i></div>
       //                                 <div className="divider-custom-line"></div>
       //                             </div>
       //                             <img className="img-fluid rounded mb-5" src="assets/img/portfolio/cabin.png" alt="" />
       //                             <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
       //                             <button className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times fa-fw"></i>Close Window</button>
       //                         </div>
       //                     </div>
       //                 </div>
       //             </div>
       //         </div>
       //     </div>
       // </div>

    //    <div className="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-labelledby="portfolioModal2Label" aria-hidden="true">
    //        <div className="modal-dialog modal-xl" role="document">
    //            <div className="modal-content">
    //                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
    //                    <span aria-hidden="true"><i className="fa fa-times"></i></span>
    //                </button>
    //                <div className="modal-body text-center">
    //                    <div className="container">
    //                        <div className="row justify-content-center">
    //                            <div className="col-lg-8">
    //
    //                                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal2Label">Tasty Cake</h2>
    //
    //                                <div className="divider-custom">
    //                                    <div className="divider-custom-line"></div>
    //                                    <div className="divider-custom-icon"><i className="fa fa-star"></i></div>
    //                                    <div className="divider-custom-line"></div>
    //                                </div>
    //                                <img className="img-fluid rounded mb-5" src="assets/img/portfolio/cake.png" alt="" />
    //                                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
    //                                <button className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times fa-fw"></i>Close Window</button>
    //                            </div>
    //                        </div>
    //                    </div>
    //                </div>
    //            </div>
    //        </div>
    //    </div>
    //
    //    <div className="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-labelledby="portfolioModal3Label" aria-hidden="true">
    //        <div className="modal-dialog modal-xl" role="document">
    //            <div className="modal-content">
    //                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
    //                    <span aria-hidden="true"><i className="fa fa-times"></i></span>
    //                </button>
    //                <div className="modal-body text-center">
    //                    <div className="container">
    //                        <div className="row justify-content-center">
    //                            <div className="col-lg-8">
    //
    //                                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal3Label">Circus Tent</h2>
    //
    //                                <div className="divider-custom">
    //                                    <div className="divider-custom-line"></div>
    //                                    <div className="divider-custom-icon"><i className="fa fa-star"></i></div>
    //                                    <div className="divider-custom-line"></div>
    //                                </div>
    //                                <img className="img-fluid rounded mb-5" src="assets/img/portfolio/circus.png" alt="" />
    //                                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
    //                                <button className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times fa-fw"></i>Close Window</button>
    //                            </div>
    //                        </div>
    //                    </div>
    //                </div>
    //            </div>
    //        </div>
    //    </div>
    //
    //    <div className="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-labelledby="portfolioModal4Label" aria-hidden="true">
    //        <div className="modal-dialog modal-xl" role="document">
    //            <div className="modal-content">
    //                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
    //                    <span aria-hidden="true"><i className="fa fa-times"></i></span>
    //                </button>
    //                <div className="modal-body text-center">
    //                    <div className="container">
    //                        <div className="row justify-content-center">
    //                            <div className="col-lg-8">
    //
    //                                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal4Label">Controller</h2>
    //
    //                                <div className="divider-custom">
    //                                    <div className="divider-custom-line"></div>
    //                                    <div className="divider-custom-icon"><i className="fa fa-star"></i></div>
    //                                    <div className="divider-custom-line"></div>
    //                                </div>
    //                                <img className="img-fluid rounded mb-5" src="assets/img/portfolio/game.png" alt="" />
    //                                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
    //                                <button className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times fa-fw"></i>Close Window</button>
    //                            </div>
    //                        </div>
    //                    </div>
    //                </div>
    //            </div>
    //        </div>
    //    </div>
    //
    //    <div className="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-labelledby="portfolioModal5Label" aria-hidden="true">
    //        <div className="modal-dialog modal-xl" role="document">
    //            <div className="modal-content">
    //                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
    //                    <span aria-hidden="true"><i className="fa fa-times"></i></span>
    //                </button>
    //                <div className="modal-body text-center">
    //                    <div className="container">
    //                        <div className="row justify-content-center">
    //                            <div className="col-lg-8">
    //
    //                                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal5Label">Locked Safe</h2>
    //
    //                                <div className="divider-custom">
    //                                    <div className="divider-custom-line"></div>
    //                                    <div className="divider-custom-icon"><i className="fa fa-star"></i></div>
    //                                    <div className="divider-custom-line"></div>
    //                                </div>
    //                                <img className="img-fluid rounded mb-5" src="assets/img/portfolio/safe.png" alt="" />
    //                                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
    //                                <button className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times fa-fw"></i>Close Window</button>
    //                            </div>
    //                        </div>
    //                    </div>
    //                </div>
    //            </div>
    //        </div>
    //    </div>
    //
    //    <div className="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-labelledby="portfolioModal6Label" aria-hidden="true">
    //        <div className="modal-dialog modal-xl" role="document">
    //            <div className="modal-content">
    //                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
    //                    <span aria-hidden="true"><i className="fa fa-times"></i></span>
    //                </button>
    //                <div className="modal-body text-center">
    //                    <div className="container">
    //                        <div className="row justify-content-center">
    //                            <div className="col-lg-8">
    //
    //                                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal6Label">Submarine</h2>
    //
    //                                <div className="divider-custom">
    //                                    <div className="divider-custom-line"></div>
    //                                    <div className="divider-custom-icon"><i className="fa fa-star"></i></div>
    //                                    <div className="divider-custom-line"></div>
    //                                </div>
    //                               <img className="img-fluid rounded mb-5" src="assets/img/portfolio/submarine.png" alt="" />
    //                                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
    //                                <button className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times fa-fw"></i>Close Window</button>
    //                            </div>
    //                        </div>
    //                    </div>
    //                </div>
    //            </div>
    //        </div>
    //    </div>
    //   </div>
    // </body>
  );
}

export default App;
