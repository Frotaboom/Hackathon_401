import Topbar from '../components/topbar/topbar'
import { useMemo } from "react"
import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api'
import './home.css'
import LocationPicker from '../components/locationpicker/locationpicker'
import Calendar from '../components/calendar/calendar'
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { useState, useEffect, useContext} from 'react'
import { onSnapshot, collection } from 'firebase/firestore';
import { db } from '../firebase';
import { AuthContext } from '../auth/AuthContext';
export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBXMPE83Uf0uTU7vN-JxjiiSgJO7H5hKP4",
  });
  const [data, setData] = useState({})
  const {currentUser} = useContext(AuthContext)
  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "events"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        list = list.filter((x) => JSON.stringify(x.user.email) === JSON.stringify(currentUser.email) )
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);


  return (
    <div>
      <div className="home">
          <Topbar/>
      </div>
      {isLoaded && <Map/>}
      <Grid container spacing={2} rowSpacing = {2}>
        <Grid item xs={6}>
          <LocationPicker/>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={5.9}>
          <Calendar data={data}/>
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