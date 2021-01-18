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
import logo from './img/carefree-logo.png'
//import "css/bootstrap.min.css";

// Modal.setAppElement('#root')

function App() {

  const portfolioLinks =[

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
      title: 'Carefree',
      subtitle: 'React, TypeScript, HTML, CSS, Redux',
      imgsrc : "https://raw.githubusercontent.com/rtieu10/carefree/master/carefree/src/img/logoColorTransparent.png",
      description: <div> A website that strives to increase accessibility and transparency for young adults who are new to navigating the field of health care.</div>,
      project_link: "https://github.com/rtieu10/carefree",
    },

    {
      title: 'Sustainabites',
      subtitle: 'Swift',
      imgsrc : "https://www.flaticon.com/svg/vstatic/svg/706/706173.svg?token=exp=1610929056~hmac=77652e2210b722311e7806ec7f651337",
      description: <div> An iOS app that promotes sustainable living by allowing users to search for recipes that use ingredients they have at home. </div>,
      project_link: "https://github.com/rtieu10/Sustainabites",
      copyright:<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    }


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
