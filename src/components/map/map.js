import React, { Component } from "react";
import { compose } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

const MapWithAMarker = compose(
  withScriptjs,
  withGoogleMap
)(props => {
  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 12.934533, lng: 77.626579 }}
    >
      {props.markers.map(marker => {
        const onClick = props.onClick.bind(this, marker);
        return (
          <Marker
            key={marker.id}
            onClick={onClick}
            position={{ lat: marker.latitude, lng: marker.longitude }}
          >
            {props.selectedMarker === marker && (
              <InfoWindow>
                <div>{marker.desc}</div>
              </InfoWindow>
            )}
            }
          </Marker>
        );
      })}
    </GoogleMap>
  );
});

export default class ShelterMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shelters: [],
      selectedMarker: false
    };
  }
  componentDidMount() {
    let locationDetails = [
      {
        id: 1,
        desc: `Koramangala, Bangalore, Karnataka, India`,
        latitude: 12.934533,
        longitude: 77.626579
      },
      {
        id: 2,
        desc: `Whitefield Karnataka`,
        latitude: 12.99435,
        longitude: 77.75852
      },
      {
        id: 3,
        desc: `Mysure`,
        latitude: 12.30844,
        longitude: 76.653931
      },
      {
        id: 4,
        desc: `Nandi Hills Karnataka`,
        latitude: 15.50028,
        longitude: 76.603027
      },
      {
        id: 5,
        desc: `Ramanagara`,
        latitude: 12.934533,
        longitude: 77.626579
      }
    ];

    this.setState({ shelters: locationDetails });
  }
  handleClick = (marker, event) => {
    console.log({ marker });
    this.setState({ selectedMarker: marker });
  };
  render() {
    return (
      <MapWithAMarker
        selectedMarker={this.state.selectedMarker}
        markers={this.state.shelters}
        onClick={this.handleClick}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}
