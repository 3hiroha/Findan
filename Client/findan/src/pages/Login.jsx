import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { Form, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom' ;
import axios from "axios";
import { AuthContext } from '../Context/AuthContext';



const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': '#E0E3E7',
            '--TextField-brandBorderHoverColor': '#B2BAC2',
            '--TextField-brandBorderFocusedColor': '#6F7E8C',
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: 'var(--TextField-brandBorderColor)',
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderHoverColor)',
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            '&:before, &:after': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            '&:before': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
    },
  });

const Login = () => {
    const [inputs,setInputs] = useState({
      username:"",
      email:"",
      password:"",
    });
    const [err,setError] = useState(null);

    const navigate = useNavigate();

    const { login } = useContext(AuthContext);
    


    const handleChange = e =>{
      setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    }
    const handleSumbit = async e =>{
      e.preventDefault();
      try{
        login(inputs);
        navigate("/");
      }catch(err){ 
        
        setError(err.response.data); 
        
      }
    };

    const outerTheme = useTheme();

  return (
    
    <div className='auth'>
        <h1>
            Login
        </h1>
        <form>
        <ThemeProvider theme={customTheme(outerTheme)}>
        <TextField required label="Username" variant="standard" name='username' onChange={handleChange} />
        <TextField required label="Password" variant="standard" name='password' onChange={handleChange} />

      </ThemeProvider>

        <Button onClick={handleSumbit} variant="contained" size='large' endIcon={<SendIcon />}>
         Login
        </Button>
        {err &&<p>{err}</p>}
        <span>Don't Have an account?
            <Link to="/register">Register</Link>
        </span>
        </form>
        
        
    </div>
    
  )
}

export default Login