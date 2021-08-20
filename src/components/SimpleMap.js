import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import personalImg from '../img/personal-img.jpeg';

const AnyReactComponent = ({ text }) => <div className='marker'>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 40.85239188769644,
      lng: -73.97285809762684
    },
    zoom: 15
  };

  render() {
    return (
      <div className='personal-description'>
        <div className='personal-left'>
          <img className='personal-img' src={personalImg} alt='Joe Chen Phone: 8622218627'></img>
          <p>Joe Chen</p>
          <p>手机：862-221-8627</p>
          <p>微信：joechen8627</p>
          <p>电邮：josephchenbusiness@gmail.com</p>
          <p>公司：Weichert Realtors</p>
          <p>办公地址：310 Main St, Fort Lee, NJ 07024</p>
        </div>
      
      {/*  Important! Always set the container height explicitly */}
      <div style={{ height: '100vh', width: '70%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyB5Egq_lv62BJ9Fotxj3GUa5Q6yAAJ5piY' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={40.85239188769644}
            lng={-73.97285809762684}
            text="Office"
          />
        </GoogleMapReact>
      </div>
      </div>

    );
  }
}

export default SimpleMap;
