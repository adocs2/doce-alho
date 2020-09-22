import React, { Component } from "react";

export class Services extends Component {
  render() {
    return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Nossos Produtos</h2>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div
                    key={`${d.name}-${i}`}
                    className="col-md-12"
                    style={{ alignContent: "center" }}
                  >
                    {" "}
                    <img src={d.img} style={{ width: "300", height: "300" }} />
                    <div className="service-desc">
                      <h3 style={{ alignSelf: "center" }}>{d.name}</h3>
                      <p style={{ alignSelf: "center" }}>{d.text}</p>
                      <p style={{ alignSelf: "center" }}>{d.price}</p>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
        <div>
          <p style={{ fontSize: 18 }}>Mais produtos em breve!</p>
          <p style={{ fontSize: 20 }}>
            Vendas através do nosso email na área de contato do site ou via
            WhatsApp clicando no ícone logo abaixo
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://whats.link/whatsappdocealho"
          >
            <i
              style={{
                color: "#fff",
                fontSize: 30,
                width: 48,
                height: 48,
                marginTop: 10,
                border: 2,
              }}
              className="fa fa-whatsapp"
            ></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Services;
