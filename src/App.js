import React,{useState} from'react';
import './App.css';
import Header from './Header';
import Welcome from './Welcome';

function App() {
  const [name, setName] = useState('')


  return (
    <div className="App">
      <Header name={name}/>
      <Welcome onNameChange={setName} />
    </div>
  );
}

export default App;
