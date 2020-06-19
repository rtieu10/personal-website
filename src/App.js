import React, {useState} from 'react';
// import logo from './logo.svg';
// import header from './img/header.png';
import './App.css';
import Portfolio from './components/portfolio';   //the portfolio React component
//import Modal from "react-bootstrap/Modal";
import PortfolioModal from './components/portfolio_modal'
import NavBar from './components/NavBar'
import Header from './components/header'
import About from './components/about'
import Contact from './components/contact'
import Footer from './components/footer'
import PortfolioList from './components/PortfolioList'
//import "css/bootstrap.min.css";

// Modal.setAppElement('#root')

function App() {

  const portfolioLinks =[

    {
      title: 'Python Calculator',
      subtitle: 'Tkinter GUI, Python',
      imgsrc : "https://image.flaticon.com/icons/svg/887/887066.svg",
      description: <div>  A simple four func calculator with an interactive GUI, made with Python and Tkinter</div>,
      project_link: "https://github.com/rtieu10/simplecalc",
      copyright:<div>Icons made by <a href="https://www.flaticon.com/authors/smalllikeart" title="smalllikeart">smalllikeart </a>
       from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    },

    {
      title: 'WiT Project',
      subtitle: 'Django, Python, HTML, CSS',
      imgsrc : "https://image.flaticon.com/icons/svg/1508/1508843.svg",
      description: <div> A Django application created for YearUp in order to streamline the process of mentor matching. </div>,
      project_link: "https://github.com/TheWITProject/MentorApp",
      copyright:<div>Icons made by <a href="https://www.flaticon.com/authors/mynamepong" title="mynamepong">mynamepong </a>
                from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    },

    {
      title: 'Super 1665',
      subtitle: 'React, JavaScript, HTML, CSS',
      imgsrc : "https://image.flaticon.com/icons/png/512/2912/2912657.png",
      description: <div> A website created for Super1665 Laundromat, in order to market and grow their business. </div>,
      project_link: "https://github.com/rtieu10/super1665-website",
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

</div>
</body>

  );
}

export default App;
