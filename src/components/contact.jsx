import React, { Component } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
require("dotenv").config();

export class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }
  toastSucess = () => toast.success("Mensagem enviada com sucesso!");
  toastFailed = () => toast.error("Erro ao enviar a mensagem");
  sendEmail = () => {
    let { name, email, message } = this.state;
    if (name !== "" && (email !== "") & (message !== "")) {
      axios
        .post("https://api.emailjs.com/api/v1.0/email/send", {
          service_id: process.env.REACT_APP_SERVICE_ID,
          template_id: process.env.REACT_APP_TEMPLATE_ID,
          user_id: process.env.REACT_APP_USER_ID,
          template_params: {
            from_name: name,
            to_email: email,
            message: message,
          },
        })
        .then((res) => {
          this.setState({ name: "" });
          this.setState({ email: "" });
          this.setState({ message: "" });
          this.toastSucess();
        })
        .catch(() => {
          this.toastFailed();
        });
    }
  };
  onChangeName = (name) => {
    console.log(process.env);
    this.setState({ name: name.target.value });
  };
  onChangeEmail = (email) => {
    this.setState({ email: email.target.value });
  };
  onChangeMessage = (message) => {
    this.setState({ message: message.target.value });
  };
  render() {
    let { name, email, message } = this.state;
    return (
      <div>
        <ToastContainer />
        <div id="contact">
          <div className="container">
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <h2>Entre em contato</h2>
                  <p>Entre em contato caso tenha interesse!</p>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div>
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        value={name}
                        onChange={this.onChangeName}
                        placeholder="Nome"
                        required="required"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        value={email}
                        onChange={this.onChangeEmail}
                        placeholder="Email"
                        required="required"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    value={message}
                    onChange={this.onChangeMessage}
                    rows="4"
                    placeholder="Mensagem"
                    required
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button
                  onClick={this.sendEmail}
                  className="btn btn-custom btn-lg"
                >
                  Enviar Mensagem
                </button>
              </div>
            </div>
            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h3>Informações para contato:</h3>
                {/* <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Endereço
                  </span>
                  {this.props.data ? this.props.data.address : "loading"}
                </p> */}
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Telefone
                  </span>{" "}
                  {this.props.data ? this.props.data.phone : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>{" "}
                  {this.props.data ? this.props.data.email : "loading"}
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <ul>
                    {/* <li>
                      <a
                        target="_blank" href={this.props.data ? this.props.data.facebook : "/"}
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href={this.props.data ? this.props.data.twitter : "/"}>
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li> */}
                    <li>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={this.props.data ? this.props.data.whatsapp : "/"}
                      >
                        <i className="fa fa-whatsapp"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={this.props.data ? this.props.data.instagram : "/"}
                      >
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
