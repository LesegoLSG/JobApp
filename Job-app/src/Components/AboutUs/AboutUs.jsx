import React from "react";
import { motion } from "framer-motion";
import {
  cardVariant,
  headerVariant,
  popUpVariant,
} from "../Reusables/AnimationVariants";

const AboutUs = () => {
  return (
    <motion.section
      className="container mx-auto bg-[#EAF0F1] py-16"
      id="AboutUs"
      viewport={{ once: false, amount: 0.3 }} // Trigger animation when 30% is visible
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          className="text-start mb-12"
          variants={headerVariant}
          initial="hidden"
          whileInView="visible"
        >
          <h2 className="h1">Why choose us</h2>
          <p className="subtitle mt-4">
            We are committed to delivering the best products and services to our
            clients. Our team of experts is passionate about making a
            difference.
          </p>
        </motion.div>

        {/* About Us Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <motion.div
            className="relative group"
            variants={cardVariant(0)}
            initial="hidden"
            whileInView="visible"
          >
            <img
              src="https://images.pexels.com/photos/1181438/pexels-photo-1181438.jpeg"
              alt="Our Team"
              className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 transform group-hover:scale-105"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="text-gray-900"
            variants={cardVariant(1)}
            initial="hidden"
            whileInView="visible"
          >
            <h3 className="h3">Who We Are</h3>
            <p className="text-base leading-relaxed">
              We are a team of dedicated professionals with a passion for
              excellence. Our mission is to empower businesses and individuals
              through innovative technology solutions and exceptional customer
              service.
            </p>
            <p className="mt-4 text-base leading-relaxed">
              Our journey began with a simple goal: to create a meaningful
              impact. Over the years, we have grown into a trusted partner for
              businesses of all sizes, always keeping our values of integrity,
              collaboration, and innovation at the core of everything we do.
            </p>
          </motion.div>
        </div>

        {/* Additional Section - Our Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-16">
          {/* Text Section */}
          <motion.div
            className="text-gray-900 order-2 md:order-1"
            variants={cardVariant(3)}
            initial="hidden"
            whileInView="visible"
          >
            <h3 className="h3">Our Values</h3>
            <p className="text-base leading-relaxed">
              At the heart of our company lies a set of core values that drive
              us forward: Innovation, Commitment, and Integrity. These values
              shape every decision we make and ensure that we deliver the
              highest quality solutions to our clients.
            </p>
            <p className="mt-4 text-base leading-relaxed">
              We believe in fostering a culture of respect, inclusivity, and
              creativity, where every team member is encouraged to contribute
              their unique talents and ideas.
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative group order-1 md:order-2"
            variants={cardVariant(2)}
            initial="hidden"
            whileInView="visible"
          >
            <img
              src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Our Values"
              className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 transform group-hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutUs;
