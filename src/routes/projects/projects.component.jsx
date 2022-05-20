
const Projects = () => {
    return (
        <div className='projects-container'>
            <section className="projects-navbar-container">

            </section>
            <section className='monsters-rolodex' >
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
            <h3>Features</h3>
            <ul>
                <li>Class based views</li>
                <l1>Hooks</l1>
                <li>Components</li>
                <li>State Change</li>
                <li>Search Box</li>
                <li>Monsters: https://robohash.org/</li>
                <li>JSON Data: https://jsonplaceholder.typicode.com/users</li>
            </ul>
        </section>
        </div>
    )
}

export default Projects;