import React from "react";

const Port = () => (
  <div>
    <div className="container">
  <div className="row">
    <div className="col-md-12">
      <h1 className="head-bar"><i className="fa fa-book"></i> Portfolio</h1>
    </div>
  </div>
  <div className="row">
    <div className="col-md-4">
      <div className="card">
        <img className="card-img-top" src={require("./photos/pwgenerator.png")} alt="Thumbnail" />
        <div className="caption text-center">
          <h3>Password Generator</h3>
          <p>In this project, I used Javascript to help a user generate a password based on their chosen criteria. Users can choose the length of their password.</p>
          <p>
            <a href="https://github.com/steppinonland/Password_Generator" className="btn btn-primary thumbnail-button" role="button">View Details</a>   
          </p>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
        <img className="card-img-top" src={require("./photos/quiz.png")} alt="Thumbnail" />
        <div className="caption text-center">
          <h3>Javascript Code Quiz</h3>
          <p>In this project, a user can test their Javascript skills! Be careful - if you choose the wrong answer, you'll have less time to complete the quiz!</p>
          <p>
            <a href="https://steppinonland.github.io/JavaScript_Game/" className="btn btn-primary thumbnail-button" role="button">Take Quiz</a>   
          </p>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
        <img className="card-img-top" src={require("./photos/workday.png")} alt="Thumbnail" />
        <div className="caption text-center">
          <h3>Workday Scheduler</h3>
          <p>Are you working from home and need help planning out your workday? My website can help you stay on track, with interactive color-coding features. The user can save their information into their browser's local storage.</p>
          <p>
            <a href="https://steppinonland.github.io/Workday_Scheduler/" className="btn btn-primary thumbnail-button" role="button">View Page</a>   
          </p>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="card">
        <img className="card-img-top" src={require("./photos/weather.png")} alt="Thumbnail" />
        <div className="caption text-center">
          <h3>The Landgraf Weather Service</h3>
          <p>Hey, what's the weather up to? Head on over to the Landgraf Weather Service to obtain comprehensive weather information for any major city around the world!</p>
          <p>
            <a href="https://github.com/steppinonland/LandgrafWeatherService" className="btn btn-primary thumbnail-button" role="button">View Details</a>   
          </p>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="card">
        <img className="card-img-top" src={require("./photos/perfectpark.png")} alt="Thumbnail" />
        <div className="caption text-center">
          <h3>Perfect Park</h3>
          <p>Craving adventure? This app, called Pefect Park, leverages the National Park Service's API, along with weather and Google Maps, to provide comprehensive National Park information, across all 50 states and territories.</p>
          <p>
            <a href="https://perfectpark1.github.io/PerfectPark/" className="btn btn-primary thumbnail-button" role="button">Visit Page</a>   
          </p>
        </div>
      </div>
    </div>
    <div className="card mb-3">
  <img className="card-img-top" src={require("./photos/orchard.png")} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Orchard</h5>
    <p className="card-text">Gardening is all the rage lately. Plus, folks have less spending money. Why not sell what you grow? With Orchard, you can track and manage the plants that you grow, and then track the price as well as the expiration dates. Put your best fruit forward with Orchard.</p>
    <a href="https://orchard-market.herokuapp.com/" className="btn btn-primary thumbnail-button" role="button">Visit Page</a> 
  </div>
</div>
<div className="card">
  <div className="card-body">
    <h5 className="card-title">Note Taking App</h5>
    <p className="card-text">Need to take some notes? Head on over to this note taking app and write down the most ground breaking notes ever.</p>
    <a href="https://ground-breaker-note-taker.herokuapp.com/" className="btn btn-primary thumbnail-button" role="button">Take Notes</a>   
  </div>
  <img className="card-img-bottom" src={require("./photos/note.png")} alt="Card image cap" />
</div>
  </div>
</div>
  </div>
);

export default Port;
