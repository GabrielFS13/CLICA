import { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {

  const [msg, setMsg] = useState('')
  
  const altera = (resp) =>{
    if(resp){
      setMsg("Pronto, vamos casar semana que vem.")
    }else{
      setMsg('')
    }
  }
  
  return (
    <div className="App">
      <h1>Namora cmg?</h1>
      <Button resp={true} func={altera}>Sim</Button>
      <Button resp={false} func={altera}>Não</Button>
      <div>{msg}</div>
    </div>
  );
}

export default App;
