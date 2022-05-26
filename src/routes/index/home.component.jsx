import Footer from "../footer/footer.component";

import './home.styles.scss'

const Home = () => {
    return (
        <div className="page-container">
          <section className="section-container">
            <div className="home-content-one">
              <h1>I'm Michael</h1>
              <p>Your Humble Software Developer</p>
            </div>
          </section>
          <section className="section-container">
            <div className="home-content-two">
              <p className='quote-header'>Favourite Quote</p>
              <h2 className='quote'>" Progress is never linear "</h2>
              <p className='quote-author'>Dr. Angela Yu</p>
              <h2>About Me</h2>
              <p>
                Based out of Southern Ontario, I'm looking for a REACT software developer job. I enjoy working with the REACT library
                while still continuously learning and growing as a developer. One of my biggest assets is I love to learn!
              </p>
            </div>
          </section>
          <section className="section-container">
            <div className="home-content-three">
              <h1>Skills</h1>
              <div className="skills-container">
                <div className="skills-header">
                  <h2>Web Development</h2>
                </div>
                <div className="skills">
                  <p>HTML5</p>
                  <p>CSS3</p>
                  <p>SASS</p>
                  <p>Native JavaScript</p>
                  <p>Python</p>
                  <p>PHP</p>
                </div>
                <div className="skills-header">
                  <h2>Web Frameworks</h2>
                </div>
                <div className="skills">
                  <p>REACT</p>
                  <p>Node.js</p>
                  <p>Django</p>
                  <p>Flask</p>
                </div>
                <div className="skills-header">
                  <h2>Databases</h2>
                </div>
                <div className="skills">
                  <p>SQL</p>
                  <p>SQLite</p>
                  <p>Firebase</p>
                </div>
              </div>
            </div>
          </section>
          <section className="section-container">
            <div className="home-content">
    
            </div>
          </section>
          <Footer />
        </div>
    );
};

export default Home;