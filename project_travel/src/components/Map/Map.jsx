// src/components/Map/Map.jsx

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Paper, Typography, useMediaQuery } from '@mui/material';
import Rating from '@mui/material/Rating';
import useStyles from './styles.js';

// Fix for missing marker icons in Leaflet
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Map = ({ coords, places = [], weatherData = [] }) => {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:600px)');
  const center = [coords.lat, coords.lng];

  return (
    <div className={classes.mapContainer}>
      <MapContainer center={center} zoom={13} scrollWheelZoom style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Places */}
        {places.map((place, i) => (
          <Marker key={i} position={[Number(place.latitude), Number(place.longitude)]}>
            <Popup>
              {matches ? (
                <Paper elevation={3} className={classes.paper}>
                  <Typography variant="subtitle2" gutterBottom>
                    {place.name}
                  </Typography>
                  <img
                    src={
                      place.photo
                        ? place.photo.images.large.url
                        : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
                    }
                    alt={place.name}
                    className={classes.pointer}
                    style={{ width: '100px', borderRadius: '5px' }}
                  />
                  <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                </Paper>
              ) : (
                <Typography variant="subtitle2">{place.name}</Typography>
              )}
            </Popup>
          </Marker>
        ))}

        {/* Weather (optional) */}
        {weatherData?.list?.length > 0 &&
          weatherData.list.map((data, i) => (
            <Marker key={i} position={[data.coord.lat, data.coord.lon]}>
              <Popup>
                <img
                  src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                  alt="Weather Icon"
                  height="70px"
                />
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
};

export default Map;
