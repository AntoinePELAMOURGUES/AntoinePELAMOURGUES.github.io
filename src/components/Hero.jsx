import { motion } from "framer-motion";
import { styles } from "../styles";
import { shaq, bwmap, worldmap } from "../assets";

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
              <span className="sm:text-battleGray sm:text-[80px]
                text-eerieBlack text-[50px] font-mova
                font-extrabold uppercase">
                Antoine
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-6 text-eerieBlack space-y-3`}>
              <span className="block">Ingénieur Machine Learning</span>
              <span className="block">Habite à Lyon</span>
              <span className="block">
                <i className="fa fa-phone" aria-hidden="true"></i>&nbsp;
                06.51.38.98.38
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
          flex justify-center items-center hidden-on-small-screens">
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

        {/* Conteneur image + cercle */}
        <div
          className="absolute hidden-on-small-screens"
          style={{
            right: "100px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10
          }}
        >
          {/* Cercle rotatif */}
          <motion.div
            className="absolute"
            style={{
              width: "330px",
              height: "330px",
              borderRadius: "50%",
              border: "4px solid transparent",
              borderTopColor: "#c7c6c6",
              top: "-4%",
              left: "-4%",
              transform: "translate(-50%, -50%)"
            }}
            animate={{
              rotate: [0, 360]
            }}
            transition={{
              duration: 4, // Augmentez cette valeur pour ralentir la rotation
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Image */}
          <img
            src={shaq}
            alt="antoine"
            className="relative"
            style={{
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              display: "block"
            }}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
