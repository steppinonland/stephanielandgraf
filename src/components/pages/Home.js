import React from "react";

const Home = () => (
  <div>
    <div className="col-md-12">
              <div className="welcome-content text-center">
                    <h1> Stephanie Landgraf</h1>
                    <h2>Fullstack Software Developer</h2>
                    <h2 class="email">Email: stlandgraf1234@gmail.com</h2>
                    <p>To know more about me, please visit my profiles below:</p>
              </div>
               <p className="sm-buttons">
                 <a href="https://www.linkedin.com/in/stlandgraf/" className="btn btn-primary social-button"><i className="fa fa-linkedin"></i> Linkedin</a>
                 <a href="https://github.com/steppinonland" className="btn btn-dark social-button"><i className="fa fa-github"></i> Github</a>
                 <a href="https://stackoverflow.com/users/13771890/stephanie-landgraf" className="btn btn-secondary social-button"><i className="fa fa-stack-overflow"></i> Stack Overflow</a>
               </p>
        </div>
  </div>
);

export default Home;
