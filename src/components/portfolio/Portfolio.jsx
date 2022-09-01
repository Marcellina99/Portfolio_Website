import React from 'react'
import './portfolio.css'
// import IMG1 from '../../assets/secondpic.jpg'
// import IMG2 from '../../assets/thirdpic.jpg'
// import IMG3 from '../../assets/fourthpic.jpg'
// import IMG4 from '../../assets/fifthpic.jpg'
// import IMG5 from '../../assets/sixthpic.jpg'
// import IMG6 from '../../assets/seventhpic.jpg'

const Portfolio = () => {
  return (
   <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio__container">
      <article className='portfolio__item'>
        {/* <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
        </div> */}
          <h3>E-commerce Store</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Marcellina99/E-commerceStore" className='btn' target='_blank'>Github</a>
          <a href="https://github.com/Marcellina99/E-commerceStore" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          </article>

      <article className='portfolio__item'>
        {/* <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
        </div> */}
          <h3>Fashion Blog</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Marcellina99/FashionBlog_CI-CD" className='btn' target='_blank'>Github</a>
          <a href="https://github.com/Marcellina99/FashionBlog_CI-CD" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
         </article>

      <article className='portfolio__item'>
        {/* <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
        </div> */}
          <h3>Convenience Store</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Marcellina99/ConvenienceStore" className='btn' target='_blank'>Github</a>
          <a href="https://github.com/Marcellina99/ConvenienceStore" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          </article>

      <article className='portfolio__item'>
        {/* <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
        </div> */}
          <h3>Activity Tracker</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Marcellina99/Activity-Tracker" className='btn' target='_blank'>Github</a>
          <a href="https://github.com/Marcellina99/Activity-Tracker" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
         </article>

      <article className='portfolio__item'>
        {/* <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
        </div> */}
          <h3>Writing Blog</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Marcellina99/UnwindWithJindu" className='btn' target='_blank'>Github</a>
          <a href="https://github.com/Marcellina99/UnwindWithJindu" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          </article>

      <article className='portfolio__item'>
        {/* <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
        </div> */}
          <h3>Recruiting Application</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Marcellina99/decaswift" className='btn' target='_blank'>Github</a>
          <a href="https://github.com/Marcellina99/decaswift" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
           </article>
    </div>
   </section>
  )
}

export default Portfolio