import './App.css';
import Home from './Pages/Home'
import Welcome from './Pages/Welcome'
import Artists from './Pages/Artists'
import Songs from './Pages/Songs'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Playlist from './Pages/Playlist';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/artists" element={<Artists/>} />
          <Route path="/welcome" element={<Welcome/>} />
          <Route path="/songs" element={<Songs/>} />
          <Route path="/playlist" element={<Playlist/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
