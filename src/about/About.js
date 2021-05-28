import { Component } from 'react';
import './About.css';

export default class About extends Component {

  render() {
    return (
      <div className="About">
        <h1>About us</h1>

        <div className="border">
          <div className="container">

            <div className="person">
              <h3> Tis</h3>
              <img src="/ports/tis.jpg" alt='Tis' className="portraits" />
              <p> this is my about me. write here! this is my about me. write here! this is my about me. write here!
              this is my about me. write here! this is my about me. write here! this is my about me. write here!
          this is my about me. write here! this is my about me. write here! this is my about me. write here! </p>
            </div>

            <div className="person">
              <h3> Taylor</h3>
              <img src="/ports/taylor.jpg" alt='Taylor' className="portraits" />
              <p> this is my about me. write here! this is my about me. write here! this is my about me. write here!
              this is my about me. write here! this is my about me. write here! this is my about me. write here!
          this is my about me. write here! this is my about me. write here! this is my about me. write here! </p>
            </div>

            <div className="person">
              <h3> Christiane</h3>
              <img src="/ports/christiane.jpg" alt='Christiane' className="portraits" />
              <p> this is my about me. write here! this is my about me. write here! this is my about me. write here!
              this is my about me. write here! this is my about me. write here! this is my about me. write here!
          this is my about me. write here! this is my about me. write here! this is my about me. write here! </p>
            </div>

            <div className="person">
              <h3> Austi</h3>
              <img src="/ports/austi.jpg" alt='Austi' className="portraits" />
              <p>this is my about me. write here! this is my about me. write here! this is my about me. write here!
              this is my about me. write here! this is my about me. write here! this is my about me. write here!
          this is my about me. write here! this is my about me. write here! this is my about me. write here! </p>
            </div>

          </div>
        </div>

      </div>
    );
  }

}
