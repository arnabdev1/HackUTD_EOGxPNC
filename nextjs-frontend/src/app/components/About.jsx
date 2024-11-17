import AnimatedButton  from "./Button";
import TextAnim from "./TextAnim";
import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";


const About = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  const inViewAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5, ease: "easeOut" } },
  };
  return (
    <section ref={sectionRef} className=" text-white py-10 min-h-screen">
      {/* Hero Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={inViewAnimation}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          
          <TextAnim/>
        </h1>
        <p className="text-lg md:text-xl mb-8">
          HydroGuard empowers lease operators with real-time detection and
          predictive insights for hydrate formation, ensuring optimal production
          and minimizing downtime.
        </p>
      </motion.div>

      {/* Feature Grid */}
<motion.div
        initial="hidden"
        whileInView="visible"
        variants={inViewAnimation}
        viewport={{ once: true }}
        className=" grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16"
      >        
      <div className="hover:scale-120 transition-all duration-200 bg-white bg-opacity-10 p-6 rounded-lg shadow-lg ">
          <h2 className="text-2xl font-semibold mb-4">Real-Time Detection</h2>
          <p>
            Monitor gas injection and valve performance to instantly detect
            hydrate blockages and prevent production loss.
          </p>
        </div>
        <div className="hover:scale-120 transition-all duration-200 bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Predictive Insights</h2>
          <p>
            Leverage historical and current data to forecast hydrate formation
            and take action before issues arise.
          </p>
        </div>
        <div className="hover:scale-120 transition-all duration-200 bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Enhanced Efficiency</h2>
          <p>
            Reduce costly well shutdowns and improve overall pipeline management
            with cutting-edge technology.
          </p>
        </div>
      </motion.div>

      {/* Call to Action */}
 <motion.div
        initial="hidden"
        whileInView="visible"
        variants={inViewAnimation}
        viewport={{ once: true }}
        className="text-center mt-16"
      >        <p className="text-xl mb-4">
          Join us in transforming oil and gas operations with smarter and safer
          solutions.
        </p>
      </motion.div>
      <motion.a
        href="https://github.com/Bradknock/HackUTD_EOGxPNC"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center px-24 py-3 text-white rounded-lg"
        initial="hidden"
        whileInView="visible"
        variants={inViewAnimation}
        viewport={{ once: true }}
      >
  <img 
    src="https://www.logo.wine/a/logo/GitHub/GitHub-Logo.wine.svg" 
    alt="GitHub Logo" 
    className="h-14 w-14 bg-slate-200 mr-4 rounded-full hover:border-2 hover:border-slate-200" 
  />
      </motion.a>


    </section>
  );
};

export default About;
