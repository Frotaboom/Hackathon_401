import Topbar from '../components/topbar/topbar'
import { useMemo } from "react"
import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api'
import './home.css'
import LocationPicker from '../components/locationpicker/locationpicker'
import Calendar from '../components/calendar/calendar'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBXMPE83Uf0uTU7vN-JxjiiSgJO7H5hKP4",
  });
  return (
    <div>
      <div className="home">
          <Topbar/>
      </div>
      {isLoaded && <Map/>}
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <LocationPicker/>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={5.9}>
          <Calendar/>
        </Grid>
      </Grid>
      
    </div>
  )
  
}

function Map() {
  const center = useMemo(() => ({ lat: 53.5232, lng: -113.5263 }), []);

  return (
    <GoogleMap zoom={15} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
}