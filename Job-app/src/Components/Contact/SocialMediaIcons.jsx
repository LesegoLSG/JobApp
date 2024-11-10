import React from "react";
import {
  IoLogoWhatsapp,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
//Social media for contact form
const SocialMediaIcons = () => {
  return (
    <div className=" flex justify-start space-x-6 mt-12 mx-2">
      {/* WhatsApp icon */}
      <a
        href="https://wa.me/your_whatsapp_number"
        target="_blank"
        rel="noopener noreferrer"
        className="text-action hover:text-gray-900 transition duration-300"
      >
        <IoLogoWhatsapp size={25} />
      </a>
      {/* Facebook icon */}
      <a
        href="https://www.facebook.com/your_facebook_profile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-action hover:text-gray-900 transition duration-300"
      >
        <IoLogoFacebook size={25} />
      </a>
      {/* Linkedin icon */}
      <a
        href="https://www.linkedin.com/in/your_linkedin_profile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-action hover:text-gray-900 transition duration-300"
      >
        <IoLogoLinkedin size={25} />
      </a>
      {/* Instagram icon */}
      <a
        href="https://www.instagram.com/your_instagram_profile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-action hover:text-gray-900 transition duration-300"
      >
        <IoLogoInstagram size={25} />
      </a>
      {/* Twitter icon */}
      <a
        href="https://twitter.com/your_twitter_profile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-action hover:text-gray-900 transition duration-300"
      >
        <FaXTwitter size={25} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
