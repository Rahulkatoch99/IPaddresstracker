import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const MapInfo = (props) => {
  console.log(props);
  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
  };

  const style = {
    width: "100%",
    height: "100%",
    position: "sticky",
  };
  return (
    <Map
      //   containerStyle={containerStyle}
      google={props.google}
      zoom={14}
      style={style}
      center={{
        lat: props.lat,
        lng: props.lng,
      }}
    >
      {/* <Marker onClick={onMarkerClick} name={"Current location"} /> */}

      {/* <InfoWindow onClose={onInfoWindowClose}>
        <div>
          <h1>{this.state.selectedPlace.name}</h1>
        </div>
      </InfoWindow> */}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBh-9v1iGONd6sOVoDlPPmv14VUEXE2ifg",
})(MapInfo);
