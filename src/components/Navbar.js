import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
const styles={
  button:{
    height: '15px',
    border: '2px solid black',
    borderRadius: '24px',
    backgroundColor: 'gray',
    margin: '0px 5px'
  },
  button1:{
    height: '15px',
    border: '2px solid black',
    borderRadius: '24px',
    backgroundColor: 'purple',
    margin: '0px 5px'
  },
  button2:{
    height: '15px',
    border: '2px solid black',
    borderRadius: '24px',
    backgroundColor: 'red',
    margin: '0px 5px'
  },
  button3:{
    height: '15px',
    border: '2px solid black',
    borderRadius: '24px',
    backgroundColor: 'white',
    margin: '0px 5px'
  }
};
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/about'>About</Link>
          </li>
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}

      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        {/* <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/> */}
        <button style={styles.button3} onClick={props.toggleMode3}></button>
        <button style={styles.button} onClick={props.toggleMode}></button>
        <button style={styles.button1} onClick={props.toggleMode1}></button>
        <button style={styles.button2} onClick={props.toggleMode2}></button>
        <label className="form-check-label" for="flexSwitchCheckDefault">Enable Modes</label>
      </div>
      </div>
    </div>
  </nav>
  )
}
Navbar.propTypes={
    title:PropTypes.string.isRequired
}
Navbar.defaultProps={
    title:'SetTitle'
};