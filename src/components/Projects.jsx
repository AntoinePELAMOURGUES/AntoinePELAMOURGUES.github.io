import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { github, pineapple, pineappleHover } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const ProjectCard = ({
  id,
  name,
  description,
  image,
  repo,
  demo,
  index,
  active,
  handleClick,
}) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[170px] h-[420px] cursor-pointer card-shadow transition-all duration-500`}
      onClick={() => handleClick(id)}
    >
      {/* Image de fond grisée si non active */}
      <div
        className="absolute top-0 left-0 z-10 bg-jetLight h-full w-full opacity-[0.5] rounded-[24px]"
      ></div>

      <img
        src={image}
        alt={name}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />

      {/* --- ETAT FERMÉ (Titre vertical) --- */}
      {active !== id ? (
        <div className="flex items-center justify-start pr-[4.5rem]">
          <h3
            className="font-extrabold font-beckman uppercase w-[200px] h-[30px] whitespace-nowrap sm:text-[27px] text-[18px] text-timberWolf tracking-[1px] absolute z-0 lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0] leading-none z-20"
          >
            {name}
          </h3>
        </div>
      ) : (
        /* --- ETAT OUVERT (Détails) --- */
        <>
          <div
            className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(20,20,20,0.8)] backdrop-blur-sm rounded-b-[24px] z-20"
          >
            {/* Condition : N'affiche la bulle GitHub QUE si un lien repo existe */}
            {repo && (
              <div className="absolute inset-0 flex justify-end m-3">
                <div
                  onClick={() => window.open(repo, '_blank')}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer sm:opacity-[0.9] opacity-[0.8] hover:scale-110 transition-transform"
                >
                  <img
                    src={github}
                    alt="source code"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            )}

            <h2
              className="font-bold sm:text-[32px] text-[24px] text-white uppercase font-beckman sm:mt-0 -mt-[1rem]"
            >
              {name}
            </h2>
            <p
              className="text-gray-300 sm:text-[14px] text-[12px] max-w-3xl sm:leading-[24px] leading-[18px] font-poppins tracking-[1px] mt-2 mb-4"
            >
              {description}
            </p>

            {/* Bouton Live Demo (si le lien demo existe) */}
            {demo && (
              <button
                className="live-demo flex justify-between sm:text-[16px] text-[14px] text-timberWolf font-bold font-beckman items-center py-5 pl-2 pr-3 whitespace-nowrap gap-1 sm:w-[138px] sm:h-[50px] w-[125px] h-[46px] rounded-[10px] glassmorphism hover:bg-white hover:text-black transition duration-[0.2s] ease-in-out"
                onClick={() => window.open(demo, '_blank')}
                onMouseOver={() => {
                  document
                    .querySelector(`.btn-icon-${index}`)
                    .setAttribute('src', pineappleHover);
                }}
                onMouseOut={() => {
                  document
                    .querySelector(`.btn-icon-${index}`)
                    .setAttribute('src', pineapple);
                }}
              >
                <img
                  src={pineapple}
                  alt="pineapple"
                  className={`btn-icon-${index} sm:w-[34px] sm:h-[34px] w-[30px] h-[30px] object-contain`}
                />
                LIVE DEMO
              </button>
            )}
          </div>
        </>
      )}
    </motion.div>
  );
};

const Projects = () => {
  // ICI : On définit 'project-1' comme actif par défaut
  const [active, setActive] = useState('project-1');

  return (
    <div className="-mt-[8rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Portfolio</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Projets Clés.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-taupe text-[18px] max-w-3xl leading-[30px] text-justify"
        >
          Une sélection de projets illustrant ma capacité à concevoir et déployer des architectures Data complexes. 
          Du traitement de données sensibles (Investigation) à l'industrialisation de modèles IA, 
          chaque projet démontre une maîtrise de la <strong>Modern Data Stack</strong> et une approche orientée résultats.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              {...project}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
