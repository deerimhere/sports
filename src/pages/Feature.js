// src/components/Feature.js
import React, { useState } from 'react';
import './Feature.css';
import { motion, AnimatePresence } from 'framer-motion';

const Feature = ({ title, description, details, animation, delay }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div 
      className="feature" 
      data-aos={animation} 
      data-aos-delay={delay}
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <AnimatePresence>
        {showDetails && (
          <motion.div
            className="details"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {details}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Feature;
