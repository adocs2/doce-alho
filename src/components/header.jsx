import React, { Component } from "react";

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bg: 'img/intro-bg4.JPG',
      bgArray: ['img/intro-bg7.JPG', 'img/intro-bg6.JPG', 'img/intro-bg5.JPG', 'img/intro-bg4.JPG'],
      index: 0,
    }
  }

  backgroudCarrossel = () => {
    const interval = setInterval(() => {
      setTimeout(() => {document.getElementById("intro-header").style.opacity = 0}, 4000);
      let { bgArray, index } = this.state
      if (index < 4) {
        this.setState({ bg: bgArray[index] })
        this.setState({ index: index + 1 })
        document.getElementById("intro-header").style.opacity = 1;
      } else {
        this.setState({ bg: bgArray[0] })
        document.getElementById("intro-header").style.opacity = 1;
        this.setState({ index: 1 })
      }
    }, 5000);
  }

  componentDidMount = () => {
    document.getElementById("intro-header").style.opacity = 1;
    this.backgroudCarrossel()
  }

  render() {
    return (
      <header id="header">
        <div id="intro-header" className="intro" style={{
          backgroundImage: `url(${this.state.bg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }} >
          <div className="overlay">
            <div className="container">
              <div className="col-md-12 col-md-offset-4 intro-text" style={{ alignContent: "center", paddingTop: 200, paddingBottom: 200, paddingLeft: 0, paddingRight: 0 }}>
                <img src="img/Doce-Alho-Branco.png" style={{ alignSelf: 'center' }} width="400" className="img-responsive" alt="" />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;