import React from 'react';

export default ({experienceLinks}) =>{
    return(
      <section className="page-section text-secondary mb-0" id="experience">
          <div className="container">

              <h2 className="page-section-heading text-center text-uppercase text-secondary">Experience</h2>

              <div className="divider-custom">
                  <div className="divider-custom-line"></div>
                  <div className="divider-custom-icon"><i className="fa fa-star"></i></div>
                  <div className="divider-custom-line"></div>
              </div>

              <div className="row">
                   {
                      experienceLinks && experienceLinks.map(({experience_title, subtitle, description, imgsrc, copyright, project_link}, index) =>      //passing our portfolio prop correctly
                        //one portfolio prop

                        <div class="row py-5">
                          <div class="col-lg-5 my-auto">
                            <img class= "d-block mx-auto" src={imgsrc}>
                          </div>

                          <div class="col-lg-7 my-auto">
                            <p className = "text-secondary"> {experience_title} </p>
                          </div>


                        // <div className="col-md-6 col-lg-4 mb-5">
                        //     <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal">
                        //         <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        //
                        //             <div className="portfolio-item-caption-content text-center text-secondary"> <p> { description } </p> </div>
                        //         </div>
                        //
                        //         <div className="portfolio-caption">
                        //           <img src= {imgsrc} alt="" height = "300" width = "300"/>
                        //
                        //           <h4> { title } </h4>
                        //           <p className="text-muted"> { subtitle } </p>
                        //           <p> {copyright} </p>
                        //         </div>
                        //     </div>
                        // </div>


                      )


                    }
              </div>


          </div>
      </section>

    );

  }
