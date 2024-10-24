import React from "react";
import ContactForm from "./ContactForm";
import MapContactDetails from "./MapContactDetails";
import { motion } from "framer-motion";
import { headerVariant } from "../Reusables/AnimationVariants";
// Contact section for the landing page
const Contact = () => {
  return (
    <section className="container mx-auto py-16" id="Contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
        <motion.div
          className="text-center"
          variants={headerVariant} //header animation
          initial="hidden"
          whileInView="visible"
        >
          <h1 className="h1">Get in touch</h1>
          <h3 className="mt-4 subtitle">
            Feel free to reach out to me via any of these platforms:
          </h3>
        </motion.div>

        {/* Main section */}
        <div className="w-full h-auto flex flex-col md:flex-row justify-center gap-4 mt-6">
          {/* Map section */}
          <MapContactDetails />

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
