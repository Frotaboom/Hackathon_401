import React from 'react'
import { useState, useContext } from "react";
import './locationpicker.css'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import {collection, addDoc} from "firebase/firestore"
import { db } from "../../firebase";
import { AuthContext } from "../../auth/AuthContext";

export default function LocationPicker( setData ) {
  const [state,setState] = useState({title:'Engineering Teaching and Learning Complex (ETLC) University of Alberta Edmonton, Alberta, Canada T6G 2V4', startTime:'08:00', endTime:'08:00'})
  const [checkboxState,setCheckBoxState] = useState({1:0, 2:0, 3:0, 4:0, 5:0})
  const {currentUser} = useContext(AuthContext);

  const handleChange = ({ target }) => {
    const {name, value} = target;
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCheckBoxChange = ({target}) => {  
    const {name} = target;
    setCheckBoxState((prevState) => ({
      ...prevState,
      [name]: 1 - prevState[name]
    }))
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    state.user = currentUser
    //setData({...state, ...checkboxState});
    await addDoc(collection(db,"events"),{...state, ...checkboxState});
  };

  return (
    <div>
      <Grid container spacing={6} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
            <span className="logo2">Create Schedule</span>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Building
              </InputLabel>
              <NativeSelect
                inputProps={{name: 'title'}}
                onChange = {handleChange}
              >
                <option value={"Engineering Teaching and Learning Complex (ETLC)"}>ETLC</option>
                <option value={"CCIS"}>CCIS</option>
                <option value={"Education"}>Education</option>
                <option value={"SUB"}>SUB</option>
                <option value={"Tory Lecture"}>Tory Lecture</option>
              </NativeSelect>
            </FormControl>
        </Grid>

        <Grid item xs={6}>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Start Time
              </InputLabel>
              <NativeSelect onChange = {handleChange} inputProps={{name: 'startTime'}}>
                <option value={"08:00"}>8:00 AM</option>
                <option value={"08:30"}>8:30 AM</option>
                <option value={"09:00"}>9:00 AM</option>
                <option value={"09:30"}>9:30 AM</option>
                <option value={"10:00"}>10:00 AM</option>
                <option value={"10:30"}>10:30 AM</option>
                <option value={"11:00"}>11:00 AM</option>
                <option value={"11:30"}>11:30 AM</option>
                <option value={"12:00"}>12:00 PM</option>
                <option value={"12:30"}>12:30 PM</option>
                <option value={"13:00"}>1:00 PM</option>
                <option value={"13:30"}>1:30 PM</option>
                <option value={"14:00"}>2:00 PM</option>
                <option value={"14:30"}>2:30 PM</option>
                <option value={"15:00"}>3:00 PM</option>
                <option value={"15:30"}>3:30 PM</option>
                <option value={"16:00"}>4:00 PM</option>
                <option value={"16:30"}>4:30 PM</option>
                <option value={"17:00"}>5:00 PM</option>
                <option value={"17:30"}>5:30 PM</option>
                <option value={"18:00"}>6:00 PM</option>
              </NativeSelect>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                End Time
              </InputLabel>
              <NativeSelect onChange = {handleChange} inputProps={{name: 'endTime'}}>
                <option value={"08:00"}>8:00 AM</option>
                <option value={"08:30"}>8:30 AM</option>
                <option value={"09:00"}>9:00 AM</option>
                <option value={"09:30"}>9:30 AM</option>
                <option value={"10:00"}>10:00 AM</option>
                <option value={"10:30"}>10:30 AM</option>
                <option value={"11:00"}>11:00 AM</option>
                <option value={"11:30"}>11:30 AM</option>
                <option value={"12:00"}>12:00 PM</option>
                <option value={"12:30"}>12:30 PM</option>
                <option value={"13:00"}>1:00 PM</option>
                <option value={"13:30"}>1:30 PM</option>
                <option value={"14:00"}>2:00 PM</option>
                <option value={"14:30"}>2:30 PM</option>
                <option value={"15:00"}>3:00 PM</option>
                <option value={"15:30"}>3:30 PM</option>
                <option value={"16:00"}>4:00 PM</option>
                <option value={"16:30"}>4:30 PM</option>
                <option value={"17:00"}>5:00 PM</option>
                <option value={"17:30"}>5:30 PM</option>
                <option value={"18:00"}>6:00 PM</option>
                <option value={"18:30"}>6:30 PM</option>
                <option value={"19:00"}>7:00 PM</option>
                <option value={"19:30"}>7:30 PM</option>
                <option value={"20:00"}>8:00 PM</option>
                <option value={"20:30"}>8:30 PM</option>
                <option value={"21:00"}>9:00 PM</option>
              </NativeSelect>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Days</FormLabel>
            <FormGroup aria-label="position" row>
              <FormControlLabel
                name="1"
                control={<Checkbox />}
                label="M"
                labelPlacement="bottom"
                onChange = {handleCheckBoxChange}
              />
              <FormControlLabel
                name = "2" 
                control={<Checkbox />}
                label="T"
                labelPlacement="bottom"
                onChange = {handleCheckBoxChange}
              />
              <FormControlLabel
                name="3"
                control={<Checkbox />}
                label="W"
                labelPlacement="bottom"
                onChange = {handleCheckBoxChange}
              />
              <FormControlLabel
                name="4"
                control={<Checkbox />}
                label="R"
                labelPlacement="bottom"
                onChange = {handleCheckBoxChange}
              />
              <FormControlLabel
                name="5"
                control={<Checkbox />}
                label="F"
                labelPlacement="bottom"
                onChange = {handleCheckBoxChange}
              />
              <Button variant="contained" onClick={handleSubmit} endIcon={<SendIcon />}>
                Submit
              </Button>
            </FormGroup>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  )
}
