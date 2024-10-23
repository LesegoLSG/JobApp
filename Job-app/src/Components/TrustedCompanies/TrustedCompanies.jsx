import React, { useRef } from "react";
import companies from "./TrsutedCompaniesData";
import { motion } from "framer-motion";
import { headerVariant, cardVariant } from "../Reusables/AnimationVariants";

const TrustedCompanies = () => {
  const sliderRef = useRef();

  return (
    <section className="container mx-auto py-16" id="TrustedCompanies">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">
        <motion.div
          className="text-start"
          variants={headerVariant}
          initial="hidden"
          whileInView="visible"
        >
          <h1 className="h1">Trusted by</h1>
          <p className="mt-2 subtitle">
            We are proud to be associated with these esteemed companies
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="flex items-center justify-center mt-12 scrollbar-hide">
          <div
            ref={sliderRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          >
            {companies.map((company, index) => (
              <motion.div
                className="flex-shrink-0 p-4 snap-start"
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={cardVariant(index)}
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-24 object-contain hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
