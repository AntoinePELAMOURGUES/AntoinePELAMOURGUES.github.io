import { motion } from 'framer-motion';
import { styles } from '../styles';
import { bwmap } from '../assets';

const Hero = () => {
  return (
    <>
      {/* --- BACKGROUND MAPS --- */}
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover opacity-80" 
          // J'ai ajouté opacity-80 pour assombrir un peu le fond et faire ressortir le texte
        />
      </div>

      {/* --- MAIN SECTION --- */}
      <section className="relative flex w-full h-screen mx-auto overflow-hidden justify-center items-center">
        
        {/* --- CENTRAL CARD CONTAINER --- */}
        {/* Ce bloc crée un fond noir semi-transparent pour garantir la lisibilité */}
        <div className="z-10 bg-black/60 backdrop-blur-sm p-8 sm:p-12 rounded-2xl shadow-2xl border border-gray-700 max-w-5xl mx-4 flex flex-col items-center text-center">
            
            {/* NAME */}
            <h1 className={`${styles.heroHeadText} text-white font-poppins uppercase tracking-tighter`}>
              Pelamourgues{' '}
              <span className="text-[#915eff] sm:text-[80px] text-[50px] font-mova font-extrabold uppercase drop-shadow-lg">
                Antoine {/* J'ai mis une couleur accent (violet tech) ou tu peux mettre 'text-white' si tu préfères tout blanc */}
              </span>
            </h1>

            {/* TITLE & TAGLINE */}
            <div className="mt-6 flex flex-col items-center gap-4">
              <h2 className="font-bold text-[22px] sm:text-[36px] uppercase tracking-widest text-gray-200">
                Lead Cloud Consultant <span className="text-[#915eff]">|</span> Snowflake & AWS
              </h2>
              
              {/* Ligne séparatrice horizontale */}
              <div className="w-24 h-1 bg-[#915eff] rounded-full my-2"></div>

              <p className="text-[16px] sm:text-[20px] italic leading-relaxed text-gray-300 max-w-3xl">
                "De l'investigation criminelle à l'architecture Data : <br className="hidden sm:block"/>
                Je transforme des données brutes en décisions stratégiques."
              </p>

              {/* TECH STACK BADGES */}
              {/* Badges Blancs/Gris pour ressortir sur le fond noir */}
              <div className="flex flex-wrap justify-center gap-3 mt-6 mb-6">
                {['Snowflake', 'dbt', 'AWS', 'Python', 'Docker'].map((tech) => (
                  <span key={tech} className="bg-white/10 border border-white/20 text-white py-2 px-4 rounded-full text-[14px] font-medium tracking-wide hover:bg-white/20 transition-all">
                    {tech}
                  </span>
                ))}
              </div>

              {/* CONTACT INFO */}
              <div className="flex flex-col sm:flex-row gap-6 text-[16px] font-semibold text-gray-300">
                <span className="flex items-center gap-2 justify-center hover:text-white transition-colors cursor-pointer">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  06.51.38.98.38
                </span>
                <span className="hidden sm:block text-gray-600">|</span>
                <span className="flex items-center gap-2 justify-center hover:text-white transition-colors cursor-pointer">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  antoinepela@gmail.com
                </span>
              </div>
            </div>
        </div>

        {/* --- SCROLL MOUSE ANIMATION --- */}
        <div className="absolute bottom-10 w-full flex justify-center items-center z-20">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-gray-400 flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-white mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
