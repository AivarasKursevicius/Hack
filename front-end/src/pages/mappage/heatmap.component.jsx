import React ,{Component} from "react";
import { Map, GoogleApiWrapper, HeatMap } from "google-maps-react";

const divStyle = {
  width: "100%",
  height: "70%"
}
class MapHeat extends Component {

  render() {
    const gradient = [
      "rgba(0, 255, 255, 0)",
      "RGBA(147,236,80,0.7)",
      "RGBA(209,236,80,0.7)",
      "RGBA(255,236,80,0.7)",
      "RGBA(255,198,80,0.7)",
      "RGBA(255,132,80,0.7)",
      "rgba(191, 0, 31, 0.7)",
      "rgba(255, 0, 0, 0.8)"
    ];

    const setSpot = (t, map, coord) => {
      const { latLng } = coord;
    
      this.props.setCurCoordinates({lat: latLng.lat(), lng: latLng.lng()})
    }

    return (
      <div className="map-container" style={divStyle}>
        <Map
          google={this.props.google}
          className={"map"}
          zoom={5}
          initialCenter={this.props.center}
          onReady={this.handleMapReady}
          onClick={setSpot}
        >
          <HeatMap
            gradient={gradient}
            positions={this.props.data}
            opacity={1}
            radius={40}
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAFh1CM1cLQzlwpt7GDhufyCgwxmdh8I1Y",
  libraries: ["visualization"]
})(MapHeat);