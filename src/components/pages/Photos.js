import React from "react";
import "./photos.css"

const Photos = () => (
  <div className="space">
    <h1>Photo Gallery</h1>
<div className="row-g"> 
  <div className="column-g">
    <div className="o-overlay">
    <img src={require("./photos/check.jpeg")} className="image-overlay" alt="clouds"/>
    <div className="overlay">
        <div className="texto">In college, I won $1,000 in a business pitch competition! It was sort of a "Shark Tank" type of event. Our idea was to create an app that would allow users to rack up deals at local restaurants and attractions every time they volunteer at a local charity or nonprofit. </div>
    </div>
    </div>
    <div className="o-overlay">
    <img src={require("./photos/healthcarephoto.jpg")} className="image-overlay" alt="health"/>
    <div className="overlay">
        <div className="texto">This is my family, and most of my family members work in healthcare. This is my family and I at my sister's medical school.</div>
    </div>
    </div>
    <div className="o-overlay">
        <img src={require("./photos/political.jpg")} className="image-overlay" alt="politics"/>
        <div className="overlay">
            <div className="texto">In college, I visited Washington, D.C. with other students and we spoke to members of Congress about environmental issues. We spoke to them about the importance of passing legislation that protects the environment.</div>
        </div>
    </div>
  </div>
  <div className="column-g">
    <div className="o-overlay">
        <img src={require("./photos/polpic2.JPG")} className="image-overlay" alt="activism"/>
        <div className="overlay">
            <div className="texto">Women's March, January 2020</div>
        </div>
        </div>
    <div className="o-overlay">
    <img src={require("./photos/polpic3.JPG")} className="image-overlay" alt="political"/>
    <div className="overlay">
        <div className="texto">Women's March, January 2020. Myself along with other volunteers for the José Garza campaign for District Attorney.</div>
    </div>
    </div>
    <div className="o-overlay">
    <img src={require("./photos/ppl.jpg")} className="image-overlay" alt="campaign"/>
    <div className="overlay">
        <div className="texto">In the winter of 2019, I worked as a Finance Organizer for a City Council Campaign in Chicago. This is me and some other folks at one of our campaign events!</div>
    </div>
    </div>
  </div>  
  <div className="column-g">
      <div className="o-overlay">
    <img src={require("./photos/meandrocks.JPG")} className="image-overlay" alt="clouds"/>
    <div className="overlay">
        <div className="texto">This was taken at the Milton Reimer State Park. I absolutely love exploring in nature.</div>
    </div>
    </div>
    <div className="o-overlay">
    <img src={require("./photos/wfh.JPG")} className="image-overlay" alt="working"/>
    <div className="overlay">
        <div className="texto">Action shot of me coding!</div>
    </div>
    </div>
    <div className="o-overlay">
    <img src={require("./photos/presentation.jpeg")} className="image-overlay" alt="organizer"/>
    <div className="overlay">
        <div className="texto">In college, I was Vice President of our Student Entrepreneurship Club. In my senior year, I attended and entrepreneruship conference and gave a speech with another woman about the importance of female entrepreneurship.</div>
    </div>
    </div>
  </div>
</div>


  </div>
);

export default Photos;
