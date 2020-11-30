import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import Features from './components/features';
import About from './components/about';
import Services from './components/services';
import Gallery from './components/gallery';
import Testimonials from './components/testimonials';
import Contact from './components/contact';
import JsonData from './data/data.json';
import { Fab } from '@material-ui/core';
import WhatsApp from '@material-ui/icons/WhatsApp';
import Instagram from '@material-ui/icons/Instagram';
import Facebook from '@material-ui/icons/Facebook';


export class App extends Component {
  state = {
    landingPageData: {},
    height: window.innerHeight,
    width: window.innerWidth,
  }
  getlandingPageData() {
    this.setState({ landingPageData: JsonData })
  }

  handleResize = (e) => {
    this.setState({ height: window.innerHeight });
    this.setState({ width: window.innerWidth });
   };

  componentDidMount() {
    this.getlandingPageData();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
   } 

  render() {
    return (
      <>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <div style={{ position: 'fixed', display: 'flex', flexDirection: 'column', top: '60%', right: '1%', zIndex: 1}}>
          <div style={{marginBottom: 10}}>
            <a target="_blank"
              rel="noopener noreferrer"
              href="https://whats.link/whatsappdocealho">
              <Fab size='large' style={{ backgroundColor: '#cd8de5' }}>
                <WhatsApp style={{ color: 'white', fontSize: 30 }} />
              </Fab>
            </a>
          </div>
          <div style={{marginBottom: 10}}>
            <a target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/docealhooficial/">
              <Fab size='large' style={{ backgroundColor: '#cd8de5' }}>
                <Facebook style={{ color: 'white', fontSize: 30 }} />
              </Fab>
            </a>
          </div>
          {/* {this.state.width}
          {this.state.height} */}
          <div>
            <a target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/docealho">
              <Fab size='large' style={{ backgroundColor: '#cd8de5' }}>
                <Instagram style={{ color: 'white', fontSize: 30 }} />
              </Fab>
            </a>
          </div>
        </div>
        <Features data={this.state.landingPageData.Features} />
        <About data={this.state.landingPageData.About} />
        <Services data={this.state.landingPageData.Services} />
        <Gallery />
        {/* <Testimonials data={this.state.landingPageData.Testimonials} /> */}
        <Contact data={this.state.landingPageData.Contact} />
      </>
    )
  }
}

export default App;
