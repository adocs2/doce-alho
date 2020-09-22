import React, { Component } from "react";

export class Services extends Component {
  render() {
    return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Nossos Produtos</h2>
            <p>
              Atualmente contamos com esses produtos para venda:
            </p>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div  key={`${d.name}-${i}`} className="col-md-12" style={{alignContent: 'center'}}>
                    {" "}
                    <img src={d.img} style={{ width: '300', height: '300'}} />
                    <div className="service-desc">
                      <h3 style={{alignSelf: 'center'}}>{d.name}</h3>
                      <p style={{alignSelf: 'center'}}>{d.text}</p>
                      <p style={{alignSelf: 'center'}}>{d.price}</p>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
        <div className="section-title">
            <p>
              Mais produtos em breve!
            </p>
            <p>
              Entre em contato caso deseje comprar dos nossos produtos
            </p>
          </div>
      </div>
    );
  }
}

export default Services;
