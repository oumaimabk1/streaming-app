import React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import Stepper from './components/stepper';
import RegistrationStepper from './pages/Registration';
function App() {
  return (
    <div className='App'>
      <RegistrationStepper />
    </div>
  );
}

export default App;
