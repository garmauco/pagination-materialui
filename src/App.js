import {useState} from 'react'
import './App.css';
import Grids from './components/Grids';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  }
}))


function App() {
  const handleChangeSearch = (e) =>{
    setInput(e.target.value)
  }
  const [input, setInput] = useState("");
  const classes = useStyles()
  return (
      <main>
        {/* Hero unit */}
        <Header handleChangeSearch={handleChangeSearch}/>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
          <Typography variant="h1" color="inherit" noWrap>
            Álbumes
          </Typography>
          </Container>
          <Grids search={input}/>
        </div>
      </main>
  );
}

export default App;
