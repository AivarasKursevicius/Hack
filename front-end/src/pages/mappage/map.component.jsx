import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '120%',
  height: '600px',
  margin: '0 25px 0 50px',
};

const center = {
  lat: -25.274399,
  lng: 133.775131
};

class Map extends Component {
  render() {
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyAFh1CM1cLQzlwpt7GDhufyCgwxmdh8I1Y"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={5}
        >
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
}

export default Map;