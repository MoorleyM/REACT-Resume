import Footer from "../footer/footer.component";
import './projects.styles.scss'

import ProjectsNavigation from "../navigation/projects-navbar/projects-navbar.component";

const Projects = () => {
    return (
        <div className='projects-container'>
            <section className="projects-navbar-container">
                <ProjectsNavigation />
            </section>
            <section className='resume-website'>
                <div className='resume-header'>
                    <h2>Resume Website</h2>
                    <p>
                        This website was created with REACT and SASS. Recently updated to show
                        I'm capable of writing and understanding the library/framework. Website
                        used to be written in Flask. Before that it was written in basic HTML, CSS, 
                        and Native Javascript
                    </p>
                    <a href='https://github.com/MoorleyM/REACT-Resume'>Code on Github Here</a>
                </div>
            </section>
            <section className='monsters-rolodex' >
                <div className='content-header'>
                    <h2>Monsters Rolodex</h2>
                    <p>
                        Monsters Rolodex is a project that uses JSON data to fill in the 
                        monsters id, name and email located at 
                        https://jsonplaceholder.typicode.com/users. 
                        The monsters pictures come from https://robohash.org/ while inserting
                        a number which came from the id in JSON data. Also impliments a 
                        search bar that filters the monsters based on which letter that's 
                        input within that search bar.
                    </p>
                </div>
                <div className='content-content'>
                    <h3>Features</h3>
                    <ul>
                        <li>Class based views</li>
                        <li>Routes</li>
                        <li>Hooks</li>
                        <li>Components</li>
                        <li>State Change</li>
                        <li>Search Box</li>
                        <li>Monsters: https://robohash.org/</li>
                        <li>JSON Data: https://jsonplaceholder.typicode.com/users</li>
                    </ul>
                </div>
            </section>
            <section className='shop-project' >
                <div className='content-header'>
                    <h2>Clothing Shop</h2>
                    <p>
                        Clothing shop was created to show many different skill levels. 
                        Currently still being upgraded with more features. Features still
                        to come is a Payment Gateway, Profiles, Nested Routes with the 
                        second Navbar and a Message system integrated with a Firebase Database.
                        File: shop-data.js was used to create product Data within Firebase.
                    </p>
                </div>
                <div className='content-content'>
                    <h3>Features</h3>
                    <ul>
                        <li>Arrow Functions</li>
                        <li>UseEffects</li>
                        <li>Full Cart Logic System</li>
                        <li>Checkout System</li>
                        <li>Use Effect</li>
                        <li>Firebase Database</li>
                        <li>Async and Await Functionality</li>
                        <li>Routes</li>
                        <li>Hooks</li>
                        <li>Components</li>
                        <li>State Change</li>
                        <li>Image API</li>
                        <li>Product Data Integrated into Firebase</li>
                    </ul>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Projects;