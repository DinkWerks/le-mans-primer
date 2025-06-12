import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Cars from './pages/Cars';
import Track from './pages/Track';

function App() {
  const [contentPath, setContentPath] = useState('Home');

  const handleSetContentPath = (path) => {
    setContentPath(path);
  }

  function setContent() {
    switch (contentPath) {
      case "Home":
        return <Home />;
      case "About":
        return <About />;
      case "Cars":
        return <Cars/>;
      case "Track":
          return <Track/>;
      default:
        return <Home />;
    }
  }
  return (
    <div className="App">
      <header className='app-header mt-2 mb-2 shadow-lg bg-gradient-to-r from-red-800 via-red-500 to-red-800'>
        <Navbar handleSetContentPath={handleSetContentPath} />
      </header>
      <div>
        {setContent()}
      </div>
    </div>
  );
}

export default App;
