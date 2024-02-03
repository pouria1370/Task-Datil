import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import UserPanel from './container/UserPanel';
import { AppContext } from './context/app-context';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { log } from 'console';

function App() {
  const [theme,setTheme] = useState<any>()
  const ctx = useContext(AppContext)
 
  useEffect(() => {
   const currentTheme = createTheme({
    palette:{
      primary:{
        main:ctx?.theme.primary
      }
    }
   })
   setTheme(currentTheme)
  }, [ctx?.theme])
  console.log(ctx);
  
  return (
    <ThemeProvider theme={theme}>
    <div className="Apps">
     <UserPanel/>
    </div>
    </ThemeProvider>
  );
}

export default App;
