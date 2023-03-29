import './App.css';
import './styles.css'
import React from 'react';
import Header from './components/Header'
import About from './components/About';
import Contacts from './components/Contacts';
import PortfolioPage from './components/PortfolioPage';

function App() {
  return (
    <div className="App">
      <Header />
      <div ><img className='EntryImage' src="/images/profile.jpg"/></div>
      <div id="about" className="App-section"><About /></div>
      <hr />
      <div id="portfolio" className="App-section"><PortfolioPage /></div>
      <hr />
      <div id="contacts" className="App-section"><Contacts /></div>
    </div>
  );
}

export default App;
