import { Component } from 'react';
import { Link } from 'react-router-dom';
// import './Home.css';
import './About.css';

export default class About extends Component {
  
  render() {
    return (
      <div className="About">
        <h1>About us</h1>

        {/* <ul>
          <li>Tis </li>
          <li>Taylor</li>
          <li>Christiane</li>
          <li>Austi</li>
        </ul> */}

        <h3> Tis</h3>
        <img src="" alt="" class="portaits"/>
        <p> this is my about me. write here! </p>

        <h3> Taylor</h3>
        <img src="" alt="" class="portaits"/>
        <p> this is my about me. write here! </p>

        <h3> Christiane</h3>
        <img src="" alt="" class="portaits"/>
        <p> this is my about me. write here! </p>

        <h3> Austi</h3>
        <img src="" alt="" class="portaits"/>
        <p>this is my about me. write here! </p>
       


      </div>
    );
  }

}
