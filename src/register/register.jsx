import { useContext, useState } from "react";
import "./register.scss";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { auth } from "../firebase";
import Alert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function Register () {
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("")
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false)
  const {dispatch} = useContext(AuthContext)
  const theme = createTheme();

  const handleLogin = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({type:"LOGIN", payload:user})
        setSuccess(true);
        setTimeout(() => setRedirect(true), 2000);
      })
      .catch((er) => {
        setErrorMsg(er.message);
        setError(true);
        setSuccess(false);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <ModeEditOutlineIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          {error && <Alert severity="error">{errorMsg}</Alert>}
          {success && <Alert severity="success">Successfully Created Account, Redirecting</Alert>}
          {redirect && <Navigate to="/" />}
          <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

