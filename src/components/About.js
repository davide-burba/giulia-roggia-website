import React from 'react';
import '../styles.css';

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className='TextSection'>
        <p>
          Hi, my name is Giulia Roggia and I am a professional illustrator and 
          painter. I have been creating art for over [Number of Years] years, and 
          my work has been featured in various galleries and publications.
        </p>
        <p>
          My art style is heavily influenced by [Art Style/Influences], and I 
          specialize in [Types of Art/Mediums]. I am constantly pushing the 
          boundaries of my craft and experimenting with new techniques and 
          mediums.
        </p>
        <p>
          When I'm not creating art, you can usually find me 
          [Other Interests/Hobbies]. If you're interested in working with me or 
          would like to see more of my work, feel free to 
          [Contact Link/Information].
        </p>
      </div>
    </section>
  );
}

export default About;
