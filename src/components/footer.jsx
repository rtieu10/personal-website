import React from 'react';

class Footer extends React.Component{
  render(){
    return(

      <div className="copyright py-4 text-center text-white">
          <div className="container">
             <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/rtieu10">
                <i class="fab fa-github fa-2x"></i>
             </a>

             <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/racheltieu/">
                 <i class="fab fa-linkedin-in fa-lg"></i>
             </a>

             <a className="btn btn-outline-light btn-social mx-1" href="malito:rachel.tieu02@myhunter.cuny.edu">
                 <i class="far fa-envelope fa-lg"></i>
             </a>

          </div>
      </div>




    );


  }

}

export default Footer
