import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { shaq, bwmap, worldmap } from '../assets';

const Hero = () => {
  return (
    <>
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
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto
        sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`absolute inset-0 sm:top-[200px] top-[100px]
          lg:top-[100px] xl:top-[30%] ${styles.paddingX}
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`} style={{ marginLeft: '10%' }}>
          <div className="flex flex-col justify-center items-center mt-5 mr-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div className="ml-0 sm:ml-4">
            <h1 className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}>
              Pelamourgues{' '}
              <span className="sm:text-battleGray sm:text-[90px]
                text-eerieBlack text-[50px] font-mova
                font-extrabold uppercase">
                Antoine
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-6 text-eerieBlack space-y-3`}> {/* Augmenté mt-4 à mt-6 et space-y-2 à space-y-3 */}
              <span className="block">Ingénieur Machine Learning</span>
              <span className="block">Habite à Lyon</span>
              <span className="block">
                <i className="fa fa-phone" aria-hidden="true"></i>&nbsp;
                06.93.53.25.52
              </span>
              <span className="block">
                <i className="fa fa-envelope" aria-hidden="true"></i>&nbsp;
                antoinepela@gmail.com
              </span>
            </p>
          </div>

          <div
            className="w-screen flex flex-col items-start
            justify-center sm:-ml-[3rem] xxs:mt-4"></div>

          <div></div>
        </div>

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

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
        <div>
          <img
            className="absolute bottom-[0px] ml-[50vw]
            lg:ml-[75vw] md:ml-[60vw] xmd:ml-[60vw] 2xl:ml-[83vw]
            sm:h-[100vh] md:h-[80vh] xl:h-[90vh] transform -translate-x-20"
            src={shaq}
            alt="antoine"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
