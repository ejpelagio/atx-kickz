import React from 'react';
import Main from '../containers/Main';
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
export default class Home extends React.Component {
    render(){
        

        return (
        	<div>
        
        <section className="engine"><a rel="external" href="https://mobirise.com">Web Page Creator</a></section><section className="mbr-section mbr-section-hero mbr-section-full mbr-parallax-background mbr-section-with-arrow" id="header1-1" style={{backgroundImage: 'url(assets/images/mbr-2000x1334.jpg)'}}>
          <div className="mbr-overlay" style={{opacity: '0.3', backgroundColor: 'rgb(0, 0, 0)'}} />
          <div className="mbr-table-cell">
            <div className="container">
              <div className="row">
                <div className="mbr-section col-md-10 col-md-offset-1 text-xs-center">
                  <h1 className="mbr-section-title display-1">ATX-KICKS</h1>
                  <p className="mbr-section-lead lead">Austin's hub for sharing, discovering, and trading sneakers.&nbsp;</p>
                    <div className="mbr-section-btn">
                      <Link to="/MyKicks">
                        <a className="btn btn-lg btn-primary" href="/MyKicks" style={{marginRight:"1em"}}>UPLOAD</a>
                      </Link>
                      
                      <Link to="/Marketplace">  
                        <a className="btn btn-lg btn-white btn-white-outline" href="/Marketplace">BROWSE</a>
                      </Link>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mbr-arrow mbr-arrow-floating" aria-hidden="true"><a href="#contacts1-9"><i className="mbr-arrow-icon" /></a></div>
        </section>
        <section className="mbr-section mbr-section-md-padding mbr-footer footer1" id="contacts1-9" style={{backgroundColor: 'rgb(46, 46, 46)', paddingTop: 90, paddingBottom: 30}}>
          <div className="container">
            <div className="row">
              <div className="mbr-footer-content col-xs-12 col-md-3">
                <div><img src="assets/images/Shoe_iconATX_192x81.png" /></div>
              </div>
              <div className="mbr-footer-content col-xs-12 col-md-3">
                <p><strong>Address</strong><br />
                  12812 Serafy Ct<br />Austin, TX 78753</p>
              </div>
              <div className="mbr-footer-content col-xs-12 col-md-3">
                <p><strong>Contacts</strong><br />
                  Email: atx-kicks@gmail.com<br />
                  Phone: +1 (0) 000 0000 001<br />
                  Fax: +1 (0) 000 0000 002</p>
              </div>
              <div className="mbr-footer-content col-xs-12 col-md-3">
                <p><br /><br /></p>
              </div>
            </div>
          </div>
        </section>
        <footer className="mbr-small-footer mbr-section mbr-section-nopadding" id="footer1-2" style={{backgroundColor: 'rgb(50, 50, 50)', paddingTop: '1.75rem', paddingBottom: '1.75rem'}}>
          <div className="container">
            <p className="text-xs-center">Copyright (c) 2017 ATX-Kicks.</p>
          </div>
        </footer>
        <input name="animation" type="hidden" />
      </div>
        );
    }
}
