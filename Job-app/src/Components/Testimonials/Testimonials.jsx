import React, { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import testimonialData from "./TestimonialData"; // assuming an array of testimonial objects
import { motion } from "framer-motion";
import { headerVariant, cardVariant } from "../Reusables/AnimationVariants";

// Testimonial main section
const Testimonial = () => {
  const [showMore, setShowMore] = useState(false);

  // Show the first 3 testimonials by default
  const displayedTestimonials = showMore
    ? testimonialData
    : testimonialData.slice(0, 3);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="container mx-auto flex flex-col items-center  py-10 px-5">
      {/* Heading */}
      <motion.div
        className="w-full max-w-6xl"
        variants={headerVariant}
        initial="hidden"
        whileInView="visible"
      >
        <h1 className="h1">Client stories</h1>
        <h3 className="subtitle mt-1">Hear what others say</h3>
      </motion.div>

      {/* Testimonials grid */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl mt-10">
        {displayedTestimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            variants={cardVariant(index)}
          >
            <TestimonialCard key={index} singleTestimonial={testimonial} />
          </motion.div>
        ))}
      </div>

      {/* View More text */}
      {testimonialData.length > 3 && (
        <div className="w-full text-end max-w-6xl">
          <p
            onClick={handleShowMore}
            className="mt-4 text-blue-500 hover:underline cursor-pointer"
          >
            {showMore ? "View Less" : "View More"}
          </p>
        </div>
      )}
    </div>
  );
};

export default Testimonial;
