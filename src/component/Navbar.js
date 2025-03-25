import React,{useState} from 'react'

import PropTypes from 'prop-types'//this is import for impt boz should not give err



// on line 5 i am sending props in function argument so i can catch it in app.js component
 function Navbar(props) {
  return (
    <div>
       <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
     {/* on line 10 here i have sent props to component in app.js  */}
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="Textform.js">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="About.js">{props.abouttext}</a>
        </li>   
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
      <input className="form-check-input" onClick={props.togglemode} type="checkbox" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Darkmode</label>
</div>
    </div>
  </div>
  </nav>
    </div>
  )
}


// now i am putting check to props title and about text
//that they can not be number
//we can this  aslo call props  with type string
Navbar.propTypes={
  title:PropTypes.string,
  abouttext:PropTypes.string
}

// we do use tis when we dont set props value 
Navbar.defaultProps = {
  title: 'Stranger',
  abouttext: 'About Us' 
};

export default Navbar;