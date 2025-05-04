import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Register from './components/Register';
import LoginPage from './components/LoginPage';
import Hero from './components/Hero';
import News from './components/News';
import AsiaNews from './components/AsiaNews';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<Home />}>
          <Route path='' element={<Hero />} />
          <Route path='sport' element={<News />} />
          <Route path='sport/football' element={<AsiaNews />}/>
        </Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
