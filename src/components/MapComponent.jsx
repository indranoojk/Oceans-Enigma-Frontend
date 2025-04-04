import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapComponent = ({ locations }) => {
  const mapContainerStyle = { width: "100%", height: "400px" };

  // Set default center (first location) or fallback to (0,0)
  const center = locations.length > 0 ? locations[0] : { lat: 0, lng: 0 };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao">
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={3}>
        {locations.map((loc, index) => (
          <Marker key={index} position={loc} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
