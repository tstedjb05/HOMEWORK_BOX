import React, { Component } from 'react';
import './App.css';

import {SelectBox} from './SelectBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="hero is-info is-large">
          { /* <!-- Hero header: will stick at the top -->*/ }
          <div className="hero-head">
            <header className="nav">
              <div className="container">
                <div className="nav-left">
                  <a className="nav-item">
                    <img src="http://www.tentaclesgallery.com/wp-content/uploads/2014/05/url.png" alt="Logo" />
                  </a>
                </div>
                <span className="nav-toggle">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <div className="nav-right nav-menu">
                  <a className="nav-item is-active">
                    Home
                  </a>
                  <a className="nav-item">
                    Examples
                  </a>
                  <a className="nav-item">
                    Documentation
                  </a>
                  <span className="nav-item">
                    <a className="button is-info is-inverted">
                      <span className="icon">
                        <i className="fa fa-github"></i>
                      </span>
                      <span>Download</span>
                    </a>
                  </span>
                </div>
              </div>
            </header>
          </div>

          {/* <!-- Hero content: will be in the middle --> */}
          <div className="hero-body">
            <SelectBox />
          </div>

          {/* <!-- Hero footer: will stick at the bottom --> */}
          <div className="hero-foot">
            <nav className="tabs is-boxed is-fullwidth">
              <div className="container">
                <ul>
                  <li className="is-active"><a>Overview</a></li>
                  <li><a>Modifiers</a></li>
                  <li><a>Grid</a></li>
                  <li><a>Elements</a></li>
                  <li><a>Components</a></li>
                  <li><a>Layout</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
