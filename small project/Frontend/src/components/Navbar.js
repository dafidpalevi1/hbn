import React from 'react'

export default function Navbar() {
  return (
    <div><nav className="navbar bg-info mb-2" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
    <img src="https://hbn.co.id/wp-content/uploads/elementor/thumbs/logo_HBN-removebg-preview-pnp49l40lmt1fixzjtoos9v7lg9al72i6szj6lw6b6.png" />
      {/* <a className="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
      </a> */}
  
      <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  
    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <a className="navbar-item">
          Home
        </a>

        <a className="navbar-item">
          Paket Hemat
        </a>

        <a className="navbar-item">
          Paket Mantap
        </a>

        <a className="navbar-item">
          Paket Jitu
        </a>

        <a className="navbar-item">
          Internet
        </a>

        <a className="navbar-item">
          Internet + TV
        </a>

        <a className="navbar-item">
          Internet + STB Android
        </a>

        <a className="navbar-item">
          TV
        </a>
  
        <a className="navbar-item">
          Kontak
        </a>

        <a className="navbar-item">
              Bantuan
        </a>

        <a className="navbar-item">
              Tentang
        </a>
  
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">
            More
          </a>
  
          <div className="navbar-dropdown">
            <a className="navbar-item">
              About
            </a>
            <a className="navbar-item">
              Jobs
            </a>
            <hr className="navbar-divider"/>
            <a className="navbar-item">
              Report an issue
            </a>
          </div>
        </div>
      </div>
  
   
    </div>
  </nav></div>
  )
}
