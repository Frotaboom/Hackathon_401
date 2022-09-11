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
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBXMPE83Uf0uTU7vN-JxjiiSgJO7H5hKP4",
  });
  const [data, setData] = useState({})
  const {currentUser} = useContext(AuthContext)
  var markers = []

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



  const fetchLatLong = async (address) => {
    console.log('Making a query to google maps')
    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0])
    return { lat, lng }
  };


  useEffect(()=>{
    var n = data.length
    if (n !== undefined || n > 0){
      var locations = new Set()
      for (var element of data){
        if (element.title!==undefined){
          locations.add(element.title)
        }
      }
    }

    if (locations !== undefined){
      for (let location of locations){
        fetchLatLong(location).then((PromiseResult)=>{
          markers.push(PromiseResult)
        })
      }
    }
    
  })

  return (
    <div>
      <div className="home">
          <Topbar/>
      </div>
      {isLoaded && <Map markers={markers}/>}
      <Grid container spacing={2} rowSpacing = {2}>
        <Grid item xs={6}>
          <LocationPicker setData = {setData}/>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={5.9}>
          <Calendar data={data}/>
        </Grid>
      </Grid>
      
    </div>
  )
  
}

function Map({markers}) {
  const center = { lat: 53.5232, lng: -113.5263 }
  console.log(markers[0])
  return (
    <GoogleMap zoom={15} center={center} mapContainerClassName="map-container">
      {markers.length>0 && <Marker position={center} />}
    </GoogleMap>
  );
}