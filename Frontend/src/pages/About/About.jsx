function About() {
    return (
        <div className="mt-2">
            <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl dark:text-white text-center">
                About This Project
            </h2>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                This is a simple personal finance management tool developed as a side project to explore React and modern web development practices.
            </p> 
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                The goal is to provide a user-friendly interface for tracking expenses, managing budgets, and summarizing financial data.
                <br/>
                Frontend: 
                &nbsp;React, 
                &nbsp;Javascript, 
                &nbsp;TailwindCSS, 
                &nbsp;ShadCN, 
                <br/>
                Backend: 
                &nbsp;ASP.NET, 
                &nbsp;PostgresSQL
            </p>
            <div>
                <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl dark:text-white text-center">
                    About Me
                </h2>
                <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                    Hi, I&apos;m Aryan Shrestha, a passionate developer with an interest in creating intuitive and efficient applications. 
                    I enjoy working on side projects to expand my skills and explore new technologies. 
                    This project is a reflection of my enthusiasm for learning and my commitment to building useful tools that 
                    make everyday tasks easier.
                </p>
                <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                    Check out my other projects on 
                    <a href="https://github.com/ashrest16" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer"> GitHub</a>.
                </p>
            </div>
        </div>        
    )
}

export default About;
