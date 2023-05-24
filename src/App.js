import './App.css';
import Login from './components/Login/Login';
import './App.css'
import Alert from './components/Alert/Alert';
import { useState } from 'react';

function App() {
  const [alerta, setAlerta] = useState ("")
  return (
    <div className="App">
      <Login setAlerta={setAlerta}/>
      <Alert 
        mensaje ={alerta.message}
        color = {alerta.color}
      />
    </div>
  );
}

export default App;
