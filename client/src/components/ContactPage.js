import React from 'react';
import facebookLogo from '../assets/fblogo.jpg';
import twitterLogo from '../assets/xlogo.jpg';
import instagramLogo from '../assets/iglogo.jpg';
import phoneIcon from '../assets/phonelogo.jpg';
import backgroundImage from '../assets/home.png'; // Import the background image

const Contact = () => {
  return (
    <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* <div className="py-8 flex flex-col items-center justify-center"> */}
        <h2 className="text-3xl font-bold mb-4">Talk to Us Today</h2>

        <div className="grid grid-cols-2 gap-8 p-8 rounded-lg bg-white">
          {/* Social media logos column */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <img src={facebookLogo} alt="Facebook" className="w-8 h-8 mr-2" />
              <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F" className="text-blue-500 hover:text-blue-700">CasaAuthenticaLtd</a>
            </div>
            <div className="flex items-center">
              <img src={twitterLogo} alt="Twitter" className="w-8 h-8 mr-2" />
              <a href="https://twitter.com/home" className="text-blue-500 hover:text-blue-700">CasaAuthenticaLtd</a>
            </div>
            <div className="flex items-center">
              <img src={instagramLogo} alt="Instagram" className="w-8 h-8 mr-2" />
              <a href="https://www.instagram.com/accounts/login/" className="text-blue-500 hover:text-blue-700">CasaAuthenticaLtd</a>
            </div>
            <div className="flex items-center">
              <img src={phoneIcon} alt="Phone" className="w-8 h-8 mr-2" />
              <p className="text-lg"></p>
            </div>
          </div>

          {/* Form column */}
          <div className="flex flex-col justify-center">
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="John Doe" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="example@example.com" />
              </div>
              <div className="mb-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Send
                </button>
              </div>
            </form>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Contact;
