import React from 'react';
import backgroundImage from '../assets/home.png'; // Import the background image

const ServicesPage = () => {
  const services = [
    {
      title: 'Consultancy Services',
      description: 'Expert advice and guidance on buying, selling, renting, or investing in properties. Market analysis, property valuation, investment advice, and legal and financial assistance.',
    },
    {
      title: 'Property Listing and Marketing',
      description: 'Help with listing properties for sale or rent, and creating effective marketing strategies. Professional photography, videography, and detailed property descriptions.',
    },
    {
      title: 'Buyer/Tenant Representation',
      description: 'Assistance in finding suitable properties based on specific requirements, preferences, and budget. Property viewings, negotiation, and valuable insights throughout the process.',
    },
    {
      title: 'Property Management',
      description: 'Comprehensive management services for investment properties. Finding tenants, collecting rent, handling maintenance and repairs, and ensuring legal compliance.',
    },
    {
      title: 'Relocation Assistance',
      description: 'Guidance on local neighborhoods, schools, amenities, and services. Assistance in finding suitable properties and coordinating relocation logistics.',
    },
  ];

  return (
    
    <div className="services-page" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', padding: '50px' }}>
      <h2 className="text-3xl text-black  text-center font-semibold mb-6">Our Services</h2>
      <div className="services-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="service-box p-6 bg-brown-500  border-black-500 rounded-lg">
            <h3 className="text-xl  font-semibold mb-2">{service.title}</h3>
            <p className="text-brown-300">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
