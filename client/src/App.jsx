import { RouterProvider } from 'react-router'
import React from 'react';
import { router } from './Router';

const App = () => {
  return (
    <>
     <RouterProvider router={router} />
    </>
  );
}

export default App;