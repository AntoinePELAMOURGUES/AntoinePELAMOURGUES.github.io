import { motion } from 'framer-motion'; // Assure-toi que c'est bien importé
import { styles } from '../styles'; // Vérifie le chemin de tes styles
import { bwmap, worldmap } from '../assets'; // Vérifie tes imports d'images

const Hero = () => {
  return (
    <>
      {/* --- BACKGROUND MAPS --- */}
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>

      {/* --- MAIN SECTION --- */}
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden">
        
        <div
          className={`absolute inset-0 sm:top-[200px] top-[100px] 
          lg:top-[100px] xl:top-[25%] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start 
          justify-start gap-3`} 
          style={{ marginLeft: '5%' }}> {/* J'ai réduit la marge pour équilibrer sans la photo */}

          {/* --- DECORATIVE LINE (Le trait vertical) --- */}
          <div className="flex flex-col justify-center items-center mt-5 mr-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a]" />
            <div className="w-1 sm:h-80 h-40 bw-gradient" />
          </div>

          {/* --- TEXT CONTENT --- */}
          <div className="ml-0 sm:ml-4 max-w-3xl"> {/* Ajout max-w-3xl pour que le texte ne soit pas trop large */}
            
            {/* NAME */}
            <h1 className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}>
              Pelamourgues{' '}
              <span className="sm:text-battleGray sm:text-[80px] 
                text-eerieBlack text-[50px] font-mova 
                font-extrabold uppercase">
                Antoine
              </span>
            </h1>

            {/* TITLE & TAGLINE */}
            <div className={`${styles.heroSubText} mt-6 text-eerieBlack`}>
              <h2 className="font-bold text-[24px] sm:text-[32px] uppercase tracking-wider text-battleGray mb-4">
                Lead Cloud Consultant <br className="sm:hidden"/> | Snowflake & AWS
              </h2>
              
              <p className="text-[16px] sm:text-[18px] italic leading-relaxed border-l-4 border-battleGray pl-4 mb-6 text-opacity-80">
                "De l'investigation criminelle à l'architecture Data : <br className="hidden sm:block"/>
                Je transforme des données brutes en décisions stratégiques."
              </p>

              {/* TECH STACK BADGES */}
              <div className="flex flex-wrap gap-3 mb-8">
                {['Snowflake', 'dbt', 'AWS', 'Python', 'Docker'].map((tech) => (
                  <span key={tech} className="bg-eerieBlack text-white py-1 px-3 rounded-md text-[14px] font-medium tracking-wide shadow-lg">
                    {tech}
                  </span>
                ))}
              </div>

              {/* CONTACT INFO */}
              <div className="flex flex-col sm:flex-row gap-4 text-[16px] font-semibold text-eerieBlack opacity-90">
                <span className="flex items-center gap-2">
                  <i className="fa fa-phone text-battleGray" aria-hidden="true"></i>
                  06.51.38.98.38
                </span>
                <span className="hidden sm:block">|</span>
                <span className="flex items-center gap-2">
                  <i className="fa fa-envelope text-battleGray" aria-hidden="true"></i>
                  antoinepela@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* --- SCROLL MOUSE ANIMATION (Conservée) --- */}
        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center">
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
