import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom w-100 shadow-sm sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold text-success" href="#">PRONALFRUT</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#seccion-frutas">Frutas</a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link text-primary fw-bold" 
                href="/Proyecto-react/sprint_2.docx" 
                download="sprint_2.docx"
              >
                Sprint 2 📄
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#seccion-contacto">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
