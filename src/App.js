import {useState} from 'react'
import './App.css';
import Grids from './components/Grids';
import Header from './components/Header';
import Main from './components/Main'

function App() {
  const handleChangeSearch = (e) =>{
    setInput(e.target.value)
  }
  const [input, setInput] = useState("");
  return (
      <Main>
        <Header handleChangeSearch={handleChangeSearch}/>
        <Grids search={input}/>
      </Main>
  );
}

export default App;
