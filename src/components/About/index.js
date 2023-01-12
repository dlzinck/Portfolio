import React from 'react';
import aboutImage from '../../assets/cover/profilepic.jpg';


function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
        <img src={aboutImage} alt="profile piture of myself"></img>
        </div>
        <p>
          Former trucker turned developer. Learn to code right? I 
          have finished the 12-week Full-Stack Web Developer
          Bootcamp at the University of Arizona where our
          instructors taught us the latest industry-driven
          full-stack MERN curriculum.
        </p>
        <p>
          Since 2016 I have driven an 18 wheeler across the United
          States delivering freight and customer service. That all
          changed in early 2022 once I began my journey into a new
          career as a developer.
        </p>
        <p>
          Instead of driving on the open road in my captain's
          chair I now use a different kind of chair, Secret Labs
          to be exact. I spend a lot of time learning about this
          new career path and developing the skills needed to
          excel wherever my path takes me. When I am not in my new
          captain’s chair I spend my time reading, playing the
          ocasional video games, going to the gym, and yes I still
          go on the occasional long drives!
        </p>
      </div>
    </section>
  );
}

export default About;
