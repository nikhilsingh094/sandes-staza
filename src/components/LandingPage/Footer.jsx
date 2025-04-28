import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="bg-gray-100 border-t border-gray-300">
      <div className="flex flex-col md:flex-row py-12 px-4 md:px-24">
        
        <div className="md:w-2/3 flex flex-col items-start space-y-6">
          <div className="mt-3">
            <img
              src="assets/images/Digital_India.webp"
              alt="Digital India"
              className="w-1/3 md:w-1/12"
            />
          </div>
          <h5 className="text-xl font-bold pt-5 md:pt-0">About</h5>
          <p className="max-w-[90%] md:max-w-[60%]">
            Sandes, an initiative by the Government of India under Atma Nirbhar Bharat, is a platform to facilitate government officials and citizens to securely exchange messages.
          </p>
          <div className="flex gap-4 mt-3">
            <a href="#" className="text-blue-600"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
            <a href="#" className="text-blue-800"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
            <a href="#" className="text-blue-400"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
          </div>
        </div>

        <div className="md:w-1/3 flex flex-col items-start space-y-6 pt-10 md:pt-0">
          <h5 className="text-xl font-bold">Explore Sandes</h5>
          <ul className="list-none space-y-2">
            <li><a href="#" className="text-dark hover:text-blue-600">Home</a></li>
            <li><a href="#" className="text-dark hover:text-blue-600">Features</a></li>
            <li><a href="#" className="text-dark hover:text-blue-600">Download the app</a></li>
          </ul>

          <h5 className="text-xl font-bold pt-6">Contact Us</h5>
          <ul className="list-none space-y-2">
            <li className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              support-sandes@nic.in
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faGlobe} className="mr-2" />
              www.nic.in
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-orange-500 text-white text-center py-3 text-sm md:text-base">
        Site Designed, Developed and Maintained by National Informatics Center, Ministry of Electronics and IT, Government of India
      </div>
    </div>
  );
}

export default Footer;
