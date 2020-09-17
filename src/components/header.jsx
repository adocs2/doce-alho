import React, { Component } from "react";
import bg7 from '../img/intro-bg7.JPG'
import bg6 from '../img/intro-bg6.JPG'
import bg5 from '../img/intro-bg5.JPG'
import bg4 from '../img/intro-bg4.JPG'

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bg: bg4,
      bgArray: [bg7, bg6, bg5, bg4],
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