import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Universities from './components/universityList.js';
import CreateUniversity from './components/addUniversity.js';

class App extends Component {
  state = {
    universities: [{
                      "alpha_two_code": "US",
                      "name": "Abilene Christian University",
                      "country": "United States",
                      "domain": "acu.edu",
                      "web_page": "http://www.acu.edu/"
                  },
                  {
                      "alpha_two_code": "US",
                      "name": "Adelphi University",
                      "country": "United States",
                      "domain": "adelphi.edu",
                      "web_page": "http://www.adelphi.edu/"
                  },
                  {
                      "alpha_two_code": "US",
                      "name": "Agnes Scott College",
                      "country": "United States",
                      "domain": "agnesscott.edu",
                      "web_page": "http://www.agnesscott.edu/"
                  },
                  {
                      "alpha_two_code": "US",
                      "name": "Aiken Technical College",
                      "country": "United States",
                      "domain": "atc.edu",
                      "web_page": "http://www.atc.edu/"
                  },
                  {
                      "alpha_two_code": "US",
                      "name": "Air Force Institute of Technology",
                      "country": "United States",
                      "domain": "afit.af.mil",
                      "web_page": "http://www.afit.af.mil/"
                  },
                  {
                      "alpha_two_code": "US",
                      "name": "Alabama A&amp;M University",
                      "country": "United States",
                      "domain": "aamu.edu",
                      "web_page": "http://www.aamu.edu/"
                  },
                  {
                      "alpha_two_code": "US",
                      "name": "Alabama State University",
                      "country": "United States",
                      "domain": "alasu.edu",
                      "web_page": "http://www.alasu.edu/"
                  },
                  {
                      "alpha_two_code": "US",
                      "name": "Alamo Colleges",
                      "country": "United States",
                      "domain": "aloma.edu",
                      "web_page": "http://www.alamo.edu/"
                  },
                  {
                      "alpha_two_code": "US",
                      "name": "Albertson College of Idaho",
                      "country": "United States",
                      "domain": "acofi.edu",
                      "web_page": "http://www.acofi.edu/"
                  },
                  {
                      "alpha_two_code": "US",
                      "name": "Albion College",
                      "country": "United States",
                      "domain": "albion.edu",
                      "web_page": "http://www.albion.edu/"
                  },
                  {
                      "alpha_two_code": "US",
                      "name": "Alfred University",
                      "country": "United States",
                      "domain": "alfred.edu",
                      "web_page": "http://www.alfred.edu/"
                  },
                  {
                      "alpha_two_code": "US",
                      "name": "Allegheny College",
                      "country": "United States",
                      "domain": "alleg.edu",
                      "web_page": "http://www.alleg.edu/"
                  },
                  {
                      "alpha_two_code": "US",
                      "name": "Allentown College of Saint Francis de Sales",
                      "country": "United States",
                      "domain": "allencol.edu",
                      "web_page": "http://www.allencol.edu/"
                  }]
  }

  render() {
    return (
      <div className="App">
        <div className="display-2">
          <h1>University Search</h1>
        </div>
        <div className="uni-list">
          <Universities universities={this.state.universities}
          />
          <CreateUniversity />
        </div>
      </div>
    );
  }
}

export default App;
