import React from 'react'
import './locationpicker.css'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

export default function locationpicker() {
  return (
    <div>
      <Grid container spacing={6} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
            <span className="logo2">Create Schedule</span>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                End Time
              </InputLabel>
              <NativeSelect
                defaultValue={30}
                inputProps={{
                  name: 'end',
                  id: 'uncontrolled-native',
                }}
              >
                <option value={8.5}>8:00 AM</option>
                <option value={8.5}>8:30 AM</option>
                <option value={8.5}>9:00 AM</option>
                <option value={8.5}>9:30 AM</option>
                <option value={8.5}>10:00 AM</option>
                <option value={8.5}>10:30 AM</option>
                <option value={8.5}>11:00 AM</option>
                <option value={8.5}>11:30 AM</option>
                <option value={8.5}>12:00 PM</option>
                <option value={8.5}>12:30 PM</option>
                <option value={8.5}>1:00 PM</option>
                <option value={8.5}>1:30 PM</option>
                <option value={8.5}>2:00 PM</option>
                <option value={8.5}>2:30 PM</option>
                <option value={8.5}>3:00 PM</option>
                <option value={8.5}>3:30 PM</option>
                <option value={8.5}>4:00 PM</option>
                <option value={8.5}>4:30 PM</option>
                <option value={8.5}>5:00 PM</option>
                <option value={8.5}>5:30 PM</option>
                <option value={8.5}>6:00 PM</option>
                <option value={8.5}>6:30 PM</option>
                <option value={8.5}>7:00 PM</option>
                <option value={8.5}>7:30 PM</option>
                <option value={8.5}>8:00 PM</option>
                <option value={8.5}>8:30 PM</option>
                <option value={8.5}>9:00 PM</option>
              </NativeSelect>
            </FormControl>
        </Grid>

        <Grid item xs={6}>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Start Time
              </InputLabel>
              <NativeSelect
                defaultValue={30}
                inputProps={{
                  name: 'start',
                  id: 'uncontrolled-native',
                }}
              >
                <option value={8.5}>8:00 AM</option>
                <option value={8.5}>8:30 AM</option>
                <option value={8.5}>9:00 AM</option>
                <option value={8.5}>9:30 AM</option>
                <option value={8.5}>10:00 AM</option>
                <option value={8.5}>10:30 AM</option>
                <option value={8.5}>11:00 AM</option>
                <option value={8.5}>11:30 AM</option>
                <option value={8.5}>12:00 PM</option>
                <option value={8.5}>12:30 PM</option>
                <option value={8.5}>1:00 PM</option>
                <option value={8.5}>1:30 PM</option>
                <option value={8.5}>2:00 PM</option>
                <option value={8.5}>2:30 PM</option>
                <option value={8.5}>3:00 PM</option>
                <option value={8.5}>3:30 PM</option>
                <option value={8.5}>4:00 PM</option>
                <option value={8.5}>4:30 PM</option>
                <option value={8.5}>5:00 PM</option>
                <option value={8.5}>5:30 PM</option>
                <option value={8.5}>6:00 PM</option>
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
              <NativeSelect
                defaultValue={30}
                inputProps={{
                  name: 'end',
                  id: 'uncontrolled-native',
                }}
              >
                <option value={8.5}>8:00 AM</option>
                <option value={8.5}>8:30 AM</option>
                <option value={8.5}>9:00 AM</option>
                <option value={8.5}>9:30 AM</option>
                <option value={8.5}>10:00 AM</option>
                <option value={8.5}>10:30 AM</option>
                <option value={8.5}>11:00 AM</option>
                <option value={8.5}>11:30 AM</option>
                <option value={8.5}>12:00 PM</option>
                <option value={8.5}>12:30 PM</option>
                <option value={8.5}>1:00 PM</option>
                <option value={8.5}>1:30 PM</option>
                <option value={8.5}>2:00 PM</option>
                <option value={8.5}>2:30 PM</option>
                <option value={8.5}>3:00 PM</option>
                <option value={8.5}>3:30 PM</option>
                <option value={8.5}>4:00 PM</option>
                <option value={8.5}>4:30 PM</option>
                <option value={8.5}>5:00 PM</option>
                <option value={8.5}>5:30 PM</option>
                <option value={8.5}>6:00 PM</option>
                <option value={8.5}>6:30 PM</option>
                <option value={8.5}>7:00 PM</option>
                <option value={8.5}>7:30 PM</option>
                <option value={8.5}>8:00 PM</option>
                <option value={8.5}>8:30 PM</option>
                <option value={8.5}>9:00 PM</option>
              </NativeSelect>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Days</FormLabel>
            <FormGroup aria-label="position" row>
              <FormControlLabel
                value="1"
                control={<Checkbox />}
                label="M"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value = "2" 
                control={<Checkbox />}
                label="T"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="3"
                control={<Checkbox />}
                label="W"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="4"
                control={<Checkbox />}
                label="R"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="5"
                control={<Checkbox />}
                label="F"
                labelPlacement="bottom"
              />
              <Button variant="contained" endIcon={<SendIcon />}>
                Submit
              </Button>
            </FormGroup>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  )
}
