import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contatcs from './pages/Contacts/Contatcs';
import About from './pages/About/About';
import './App.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Contacts" element={<Contatcs/>}/>
                <Route path="About" element={<About />}/>
            </Routes>
        </Router>
    );
};

export default App;
