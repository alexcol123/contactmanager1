import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Nuevo Contact Manager" by="Henry Munoz Mosquera" />

        <Contact
          name="Paca Garmenty"
          email="pacagarmenty@yahoo.com"
          phone="804-874-8874"
        />

        <Contact
          name="Lupe Rocha"
          email="LupeRocha@yahoo.com"
          phone="800-468-7399"
        />

            <Header branding="Noticias Manager" by="Luis  Perez" />


                  <Contact
          name="Jina Garmenty"
          email="pacagarmenty@yahoo.com"
          phone="804-874-8874"
        />

        <Contact
          name="Martha Rocha"
          email="LupeRocha@yahoo.com"
          phone="800-468-7399"
        />
      </div>
    );
  }
}

export default App;
