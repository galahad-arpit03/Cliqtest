"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { missionVisionData } from './featuresData';

export default function MissionVision() {
  return (
    <section className="bg-[#050505] py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {missionVisionData.map((item) => (
            <motion.div 
              key={item.id}
              id={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: item.delay }}
              className="bg-[#0A0A0A] border border-white/10 rounded-md p-8 md:p-10 relative overflow-hidden group shadow-2xl"
            >
              {item.id === "mission" && (
                 <div className={`absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-to-bl ${item.bgGradientFrom} to-transparent pointer-events-none`} />
              )}
              {/* {item.id === "vision" && (
                 <div className={`absolute top-0 left-0 w-[50%] h-[100%] bg-gradient-to-br ${item.bgGradientFrom} to-transparent pointer-events-none`} />
              )} */}
              
              <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">
                {item.titlePrefix} <span className={`text-transparent bg-clip-text bg-gradient-to-r ${item.gradientFrom} ${item.gradientTo}`}>{item.titleHighlight}</span>
              </h2>
              
              <p className="text-white/60 text-[14px] leading-relaxed relative z-10">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
