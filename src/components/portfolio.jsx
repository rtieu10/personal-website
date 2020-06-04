import React from 'react'

//file stores all the components of the porfolio part of the homepage

export default ({portfolioLinks}) => {
  return (

    <section className="portfolio-section portfolio bg-primary" id="portfolio">
        <div className="container">

            <h2 className="portfolio-section-heading text-center text-uppercase text-white mb-0">Portfolio</h2>

            <div className="divider-custom divider-light">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fa fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>

            <div className="row">
              {
                portfolioLinks && portfolioLinks.map(({title, subtitle, description, imgsrc, copyright}, index) =>      //passing our portfolio prop correctly
                  //one portfolio prop
                  <div className="col-md-6 col-lg-4 mb-5">
                      <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal">
                          <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                              <div className="portfolio-item-caption-content text-center text-white"><i className="fa fa-plus fa-3x"></i></div>
                          </div>

                          <div className="portfolio-caption">
                            <img src= {imgsrc} alt="" height = "300" width = "300"/>

                            <h4> { title } </h4>
                            <p className="text-muted"> { subtitle } </p>
                            <p> { description } </p>
                            <p> {copyright} </p>
                          </div>
                      </div>
                  </div>


                )


              }

            </div>
        </div>
    </section>


  )

}
