import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import SongDetails from './components/SongDetails';
import SongList from './components/SongList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Redux Movies</h1>
        <div className="container"> 
          <SongList />
          <SongDetails />
        </div>
      </div>
    );
  }
}

export default App;