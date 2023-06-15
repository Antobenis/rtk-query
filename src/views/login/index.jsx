import * as React from 'react';
import { Field, Form, Formik, FormikProps, useField, useFormik } from 'formik';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CustomInput from 'components/input/CustomInput';
import * as Yup from 'yup';
import AuthValidiation from 'components/validiation/authvalidiation';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const SignIn = () => {

  const SignupSchema = Yup.object().shape({


    email: Yup.string().email('Invalid email').required('Required'),

  });

  const initialValues = {
    email: '',
    password: ''
  }




  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={4}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={8} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>

            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            {/* <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}> */}
            <Formik

              initialValues={{
                email: '',
              }}

              validationSchema={SignupSchema}

              onSubmit={values => {
                // same shape as initial values
                console.log(values, 'values');
              }}

            >
              {(errors, touched) => (
                <Form className='login-input' >
                  <Field name="email" type="email" />

                  {errors.email && touched.email ? <div>{errors.email}</div> : null}
                  <Field
                    name="password"
                    sx={{ mt: 4 }}
                    label="Password"
                    type="password"
                    placeholder="password"
                    component={CustomInput}
                  // fullWidth
                  // iconEnd={<ErrorOutlineIcon />}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                  <Copyright sx={{ mt: 5 }} />
                </Form>
              )}

            </Formik>
            {/* </Box> */}
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
export default SignIn;