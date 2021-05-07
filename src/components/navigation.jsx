import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" style={{paddingBottom: 0, paddingTop: 0}} href="#page-top">
              <img src="img/Doce-Alho-Header.png" width="200" className="img-responsive" alt="" />
            </a>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#features" className="page-scroll">
                  Estratégia
                </a>
              </li>
              <li>
                <a href="#about" className="page-scroll">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#services" className="page-scroll">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#portfolio" className="page-scroll">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCHsKUVqV-YM6nsF0KBS0Fag/featured" target="_blank" className="page-scroll">
                  Receitas
                </a>
              </li>
              {/* <li>
                <a href="#testimonials" className="page-scroll">
                  Testimonials
                </a>
              </li> */}
              <li>
                <a href="#contact" className="page-scroll">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
