import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import SocialMediaIcons from "./SocialMediaIcons";
import { motion } from "framer-motion";
import { cardVariant } from "../Reusables/AnimationVariants";

const MapContactDetails = () => {
  return (
    <motion.div
      className="w-full h-auto md:w-2/3 shadow-lg rounded-lg bg-white"
      variants={cardVariant(0)}
      initial="hidden"
      whileInView="visible"
    >
      <div className="w-full h-80 flex justify-center items-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1729486153536!6m8!1m7!1s6h_1CC5XJ31V9cXL36wAQA!2m2!1d-26.25830027575898!2d27.84614806873784!3f96.58!4f0!5f0.7820865974627469"
          className="w-full h-full"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/* contact details */}
      <div className="w-full h-auto p-4">
        <h3 className="h3 my-2">Our location to Head Quaters</h3>
        <p className="text-gray-800">1376 Matlomo Street, Moletsane Soweto</p>
        <div className="space-y-6">
          {/* Call */}
          <div className="flex justify-start items-center gap-x-6 mt-4 ">
            <div className="flex justify-center items-center rounded-full p-2 bg-blue-100 shadow-lg">
              <FaPhoneVolume className="text-action" size={25} />
            </div>

            <div>
              <p className="subtitle">Call our support centre</p>
              <p>064 037 3089</p>
            </div>
          </div>
          {/* Email */}
          <div className="flex justify-start items-center gap-x-6">
            <div className="flex justify-center items-center rounded-full p-2 bg-blue-100 shadow-lg">
              <MdEmail className="text-action" size={25} />
            </div>
            <div>
              <p className="subtitle">Email our support centre</p>
              <p>lesegomhlongo78@gmail.com</p>
            </div>
          </div>
        </div>
        <SocialMediaIcons />
      </div>
    </motion.div>
  );
};

export default MapContactDetails;
