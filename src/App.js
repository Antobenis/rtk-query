import React, { Suspense } from 'react';
import { Routes, Route,Navigate } from 'react-router-dom';
import Progress from "lazy-loading/prgress"
import CircularIndeterminate from 'lazy-loading/loading';

const SignUp = React.lazy(() => import('views/signup'));
const Login = React.lazy(() => import('views/login'));

function App() {
  return (
    <>
      <Suspense fallback={
        <div className='lazy-loading'>
          <Progress />
          <CircularIndeterminate />
        </div>
      }>
        <Routes>
          <Route element={<Navigate to="/login" replace />} path='/' />
          <Route element={<Login />} path='/login' />
          <Route element={<SignUp />} path='/signup' />
        </Routes>

      </Suspense>
    </>
  );
}

export default App;
