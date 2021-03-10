import React, { Component } from "react";

export class Services extends Component {
  render() {
    return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Nossos Produtos</h2>
            <p style={{ fontSize: 18 }}>Mais produtos em breve!</p>
            <p style={{ fontSize: 20 }}>
              Vendas através do nosso email na área de contato do site ou pelo Whatsapp. Enviamos para todo Brasil!
          </p>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                <div
                  className="col-md-4"
                  key={`${d.name}-${i}`}
                  style={{ alignContent: "center" }}
                >
                  {" "}
                  <img src={d.img} style={{ width: d.width, height: d.height }} />
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
      </div>
    );
  }
}

export default Services;
