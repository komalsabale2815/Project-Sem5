import React from 'react';
import './Banner.css'; // Import the CSS file
import homebg from '../../assets/Home.png'; // Adjust the path according to your directory structure
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate(); // Create a navigate function

    // Function to handle NGO button click
    const handleNgoClick = () => {
        navigate('/ngo'); // Navigate to the /ngo route
    };

    // Function to handle Resell button click
    const handleResellClick = () => {
        navigate('/resellform'); // Navigate to the /resellform route
    };

    return (
        <div
            className='promo-section'
            style={{ backgroundImage: `url(${homebg})` }} // Apply the background image
        >
            <button onClick={handleNgoClick} className='ngo-button'>
                Donate to the NGO
            </button>
            <button onClick={handleResellClick} className='resell-button'>
                Resell Form
            </button>
        </div>
    );
}

export default Banner;
