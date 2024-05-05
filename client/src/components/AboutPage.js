import React from 'react';
import backgroundImage from '../assets/home.png';

const AboutPage = () => {
  return (
    <div  className='mt-12' >
    <div className="bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container mx-auto px-4 py-8 text-center text-gray-700">
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p>
            At Casa Authentica, our mission is to uphold the highest standards of
            professionalism, integrity, and quality of service. We are committed
            to providing the best go-to personalized real estate solutions in
            Africa and beyond. Our goal is to establish relationships that
            transcend transactions, making our clients feel like partners in
            their real estate journey.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
          <p>
            Casa Authentica aspires to be Africa’s premier gateway to the world of
            real estate. We strive to be the trusted destination for investors
            seeking reliability, stability, security, and high returns on their
            investments. Through exemplary delivery times and service, unwavering
            transparency, and fostering mutual trust, we aim to cultivate
            long-term partnerships with our clients. Together, we envision a
            future where every real estate endeavor is met with confidence,
            assurance, and success.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Join Us on this Journey</h3>
          <p>
            At Casa Authentica, we invite you to join us on this journey of
            excellence and growth. Whether you're looking to buy, sell, or invest
            in real estate, we are here to guide you every step of the way.
            Experience the Casa Authentica difference and unlock unparalleled
            opportunities in the dynamic world of real estate.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutPage;
