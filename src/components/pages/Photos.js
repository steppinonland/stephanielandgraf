import React from "react";
import "./photos.css"

const Photos = () => (
  <div>
    <div className="jumbotron">
    <h1>Photo Gallery</h1>
</div>
<div className="row-g"> 
  <div className="column-g">
    <div className="o-overlay">
    <img src={require("./photos/clouds.jpg")} className="image-overlay" alt="clouds"/>
    <div className="overlay">
        <div className="texto">These are clouds</div>
    </div>
    </div>
    <div className="o-overlay">
    <img src={require("./photos/healthcarephoto.jpg")} className="image-overlay" alt="health"/>
    <div className="overlay">
        <div className="texto">healthcare!</div>
    </div>
    </div>
    <div className="o-overlay">
        <img src={require("./photos/political.jpg")} className="image-overlay" alt="politics"/>
        <div className="overlay">
            <div className="texto">me doing politics!</div>
        </div>
    </div>
  </div>
  <div className="column-g">
    <div className="o-overlay">
        <img src={require("./photos/polpic2.JPG")} className="image-overlay" alt="activism"/>
        <div className="overlay">
            <div className="texto">heeeres another photo</div>
        </div>
        </div>
    <div className="o-overlay">
    <img src={require("./photos/polpic3.JPG")} className="image-overlay" alt="political"/>
    <div className="overlay">
        <div className="texto">3rd political picture</div>
    </div>
    </div>
    <div className="o-overlay">
    <img src={require("./photos/ppl.jpg")} className="image-overlay" alt="campaign"/>
    <div className="overlay">
        <div className="texto">hangin out</div>
    </div>
    </div>
  </div>  
  <div className="column-g">
      <div className="o-overlay">
    <img src={require("./photos/clouds.jpg")} className="image-overlay" alt="clouds"/>
    <div className="overlay">
        <div className="texto">These are clouds</div>
    </div>
    </div>
    <div className="o-overlay">
    <img src={require("./photos/wfh.JPG")} className="image-overlay" alt="working"/>
    <div className="overlay">
        <div className="texto">workin from home!</div>
    </div>
    </div>
    <div className="o-overlay">
    <img src={require("./photos/austinbaidas.jpg")} className="image-overlay" alt="organizer"/>
    <div className="overlay">
        <div className="texto">i'm doin politics!</div>
    </div>
    </div>
  </div>
</div>


  </div>
);

export default Photos;
