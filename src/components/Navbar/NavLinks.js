import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Import the WhatsApp icon from Font Awesome

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#about">
                About
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#services">
                Services
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/">
                Portfolio
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/contact#contact">
                Contact Us
            </HashLink>
            <HashLink className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/#portfolio">
                Demo our products
            </HashLink>
            <a href="https://wa.me/918778548240?text=Hello%20How%20can%20I%20help%20you%20?" target="_blank" className="whatsapp-icon" style={{ color: '#25D366', textDecoration: 'none' }}>
    <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{ color: '#25D366' }} />
</a>


        </>
    )
}

export default NavLinks;
