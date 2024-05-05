import React from 'react';
import backgroundImage from '../assets/background.jpg'; // Import the background image

const HomeAboutUs = () => {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div>
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg">
          Casa Authentica Real Estate Agency stands out for its focused approach to real estate consultancy. With a dedicated team of professionals, Casa Authentica offers expert advice and guidance to clients navigating the complexities of the real estate market. Their client-centric approach prioritizes understanding individual needs, tailoring solutions, and building long-term relationships. By leveraging their expertise and market insights, Casa Authentica aims to provide valuable services that instill trust and deliver positive outcomes for their clients.
        </p>
      </div>
    </div>
  );
}

export default HomeAboutUs;
