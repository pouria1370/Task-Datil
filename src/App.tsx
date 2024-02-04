import './App.css';
import UserPanel from './container/UserPanel';
import AppContextProvider from './context/app-context';

function App() {
  return (
    <AppContextProvider>
    <div className="Apps">
     <UserPanel/>
    </div>
    </AppContextProvider>
  );
}

export default App;
