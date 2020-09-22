import React, { Component } from "react";
import axios from 'axios';
require('dotenv').config();

export class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      instagram_media: ''
    }
  }

  getInstagramMedia = async () => {
    await axios.get('https://graph.instagram.com/me/media?fields=id, media_url, caption, permalink&access_token=' + process.env.REACT_APP_INSTA_TOKEN)
      .then(response => {
        let media = response.data.data.filter(media => {
          if (!media.media_url.includes("video")) {
            return media
          }
        })
        this.setState({ instagram_media: media })
      })
      .catch(error => { console.log(error) })
    console.log(this.state.instagram_media);
  }

  componentDidMount = () => {
    this.getInstagramMedia()
  }

  render() {
    let { instagram_media } = this.state
    return (
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Instagram</h2>
            <p>
              Nos siga no Instagram e aprenda a harmonizar sua vida com o Alho Negro!
            </p>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/docealho/">
              <i style={{
                color: '#cd8de5',
                fontSize: 30,
                width: 48,
                height: 48,
                marginTop: 10,
                border: 2,
              }} className="fa fa-instagram"></i>
            </a>
          </div>
          {instagram_media ? <>
            <div className="row">
              <div className="portfolio-items">
                {instagram_media.map(function (item, i) {
                  if (i < 9) {
                    return <><div key={i} className="col-sm-6 col-md-4 col-lg-4">
                      <div className="portfolio-item">
                        <div className="hover-bg">
                          {" "}
                          <a
                            target="_blank" rel="noopener noreferrer"
                            href={item.permalink}
                            title={item.caption}
                            data-lightbox-gallery="gallery1"
                          >
                            <div className="hover-text">
                              <h4>{item.caption}</h4>
                            </div>
                            <img
                              src={item.media_url}
                              style={{ width: '100%', height: '400', display: 'block' }}
                              alt={item.caption}
                            />{" "}
                          </a>{" "}
                        </div>
                      </div>
                    </div> </>
                  }
                })}

              </div>
            </div></> : <></>}
        </div>
      </div >
    );
  }
}

export default Gallery;
