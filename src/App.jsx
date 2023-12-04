import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './home';
import Portfolio from './portfolio';
import SideProjects from './side-projects';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path="/sideprojects" element={<SideProjects />} />
    </Routes>
  );
}

export default App;
