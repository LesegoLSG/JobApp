import React from "react";
import ServiceCard from "./ServiceCard";
import ServiceData from "./ServiceData";
import { motion } from "framer-motion";
import { cardVariant, headerVariant } from "../Reusables/AnimationVariants";

const OurServices = () => {
  return (
    <motion.section
      className="container mx-auto h-auto py-20 "
      id="Services"
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Header Section */}
      <motion.div
        className="text-center mb-12"
        variants={headerVariant}
        initial="hidden"
        whileInView="visible"
        exit="exit"
      >
        <h1 className="h1">What we do</h1>
        <h3 className="mt-4 subtitle">
          Let's help you find the job of your dreams
        </h3>
      </motion.div>
      {/* Services Grid */}
      <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-4">
        {ServiceData.map((singleService, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            variants={cardVariant(index)}
            exit={{ opacity: 0, y: 50 }}
          >
            <ServiceCard key={singleService.id} singleService={singleService} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default OurServices;
