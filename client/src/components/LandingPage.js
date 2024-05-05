import React from 'react';
import backgroundImage from '../assets/background.jpg'; // Import the background image
import '../App.css'; // Import CSS file for styling
import AboutPage from './AboutPage';
import Contact from './ContactPage';

const redirectToAboutPage = () => {
  // Logic to redirect to the About page
  window.location.href = '/about';
};

const LandingPage = () => {
  return (
    <div>
    <div className='mt-9'>
      
      <div className="new-page">
        <div className="overlay">
          
          <h2 className='mt-6'>Casa Authentica Limited</h2>
          <p className='mt-6' >Expert for all your real estate needs</p>
          {/* Button with onClick event handling */}
          <button 
            className="bg-brown-500 hover:bg-brown-600 text-beige-100 font-bold py-2 px-4 rounded-full mt-12"
            onClick={redirectToAboutPage} // Call redirectToAboutPage function on click
          >
            Explore  More
          </button>
        </div>
        <img src={backgroundImage} alt="Background" className="background-image" />
      </div>
    </div>
    <AboutPage/>
    <Contact/>
    </div>
  );
}

export default LandingPage;
