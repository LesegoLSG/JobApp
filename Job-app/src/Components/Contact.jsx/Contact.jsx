import React from 'react';
import { IoLogoWhatsapp,IoLogoFacebook,IoLogoInstagram,IoLogoLinkedin  } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="bg-gray-100 py-16 " id="Contact">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-2xl font-extrabold text-gray-900">Get <span className="text-secondary">in touch</span></h2>
        <p className="mt-4 text-lg text-gray-600">Feel free to reach out to me via any of these platforms:</p>
      </div>
      <div className="mt-12 flex justify-center space-x-6">
        <a
          href="https://wa.me/your_whatsapp_number"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-gray-900 transition duration-300"
        >
          <IoLogoWhatsapp className="text-4xl" />
        </a>
        <a
          href="https://www.facebook.com/your_facebook_profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-gray-900 transition duration-300"
        >
          <IoLogoFacebook className="text-4xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/your_linkedin_profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-gray-900 transition duration-300"
        >
          <IoLogoLinkedin  className="text-4xl" />
        </a>
        <a
          href="https://www.instagram.com/your_instagram_profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-gray-900 transition duration-300"
        >
          <IoLogoInstagram className="text-4xl" />
        </a>
        <a
          href="https://www.instagram.com/your_instagram_profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-gray-900 transition duration-300"
        >
          <FaXTwitter className="text-4xl" />
        </a>
      </div>
    </div>
  </section>
  )
}

export default Contact