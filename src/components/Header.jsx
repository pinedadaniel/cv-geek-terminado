import React from "react";
import '../styles/HeaderStyles.css';

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
      <header className="Header">
        <div className="Header__container">
        <h1 className="Header__titulo" >Mi Portafolio</h1>
          <nav className="Header__menu">
            <ul>
              <li>
                <a className="Header__link" href="#">
                  Portafolio
                </a>
              </li>
              <li>
                <a className="Header__link" href="#eventos">
                  Experiencia
                </a>
              </li>
              <li>
                <a className="Header__link" href="#contacto">
                  Trabajemos Juntos
                </a>
              </li>
            </ul>
          </nav>
        </div>
        </header>
        <section className="Header__hero">
          <div className="Header__hero-container">
            <h1>
              Hola soy <strong>Juan Gustavo Zuleta</strong> <br /> desarrollador
              <strong>FrontEnd</strong> con <br /> enfásis en{" "}
              <strong>JavaScript</strong>
            </h1>
            <img
              className="Header__hero-image"
              src="https://eafitrequisitos.s3.us-east-2.amazonaws.com/john.png"
              alt="Imagen principal del sitio"
            />
          </div>
        </section>
        </React.Fragment>
    );
  }
}

export default Header;
