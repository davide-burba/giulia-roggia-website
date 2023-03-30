import React from 'react';
import "../styles.css";

function Contacts() {
  return (
    <section id="contacts">
      <h2>Contacts</h2>
      <div className='TextSection'>
        <p>
          If you're interested in working with me or would like to see more of my 
          work, feel free to reach out!
          <ul>
            <li>Email: <a href="mailto: giuliaroggia@outlook.it"> giuliaroggia@outlook.it </a></li>
            <li>Instagram: <a href="https://www.instagram.com/giulia_roggia__/"> giulia_roggia__ </a></li>
          </ul>
        </p>
      </div>
    </section>
  );
}

export default Contacts;
