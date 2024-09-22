import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import Banner from './components/banner/Banner';
import Promo from './components/promo/Promo';
import Ngo from './components/ngo/ngo'; // Import the Ngo component
import ResellForm from './components/ResellForm/ResellForm';

function App() {
    return (
        <Router> {/* Wrapping the entire application in Router */}
            <NavBar /> {/* Navigation bar */}
            <Routes> {/* Define routes here */}
                <Route path="/" element={<><Banner /><Promo /></>} /> {/* Home route with Banner and Promo */}
                <Route path="/ngo" element={<Ngo />} /> {/* NGO page route */}
                <Route path="/resellform" element={<ResellForm />} /> {/* Resell form route */}
            </Routes>
            <Footer /> {/* Footer */}
        </Router>
    );
}

export default App;
