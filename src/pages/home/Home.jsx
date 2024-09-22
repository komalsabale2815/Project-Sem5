import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Ensure that your CSS file is correctly imported

export default function Home() {
    const navigate = useNavigate(); // Initialize useNavigate hook
    function goToNgo(){
      navigate('/pages/ngo'); // Navigate to the /ngo route
    } 


    return (
        <div className="container">
            <nav>
                <div className="button-container">
                    <button className="button">Sell</button>
                    <button className="button">Earn</button>
                    <button className="button">Guide</button>
                    <button className="button">Contact</button>
                    <button onClick={goToNgo} className="ngo-button">
                        Donate to the NGO
                    </button>
                </div>
            </nav>
        </div>
    );
}
