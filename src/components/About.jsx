import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[8rem]">
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h2 className={styles.sectionHeadText}>Introduction</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-3 text-[#5c5c5c] text-[18px] leading-[30px] text-justify">
        Passionné par l'analyse des données, j'ai transformé ma carrière d'enquêteur de police judiciaire en un parcours dédié à l'ingénierie des données. Spécialisé dans la lutte contre la criminalité organisée et les atteintes graves aux personnes, j'ai découvert le monde des données après une formation d'analyste criminel. Rapidement à l'aise avec le traitement des datas, j'ai souhaité approfondir mes connaissances et reprendre mes études. Après 18 mois de formation auprès de l'école Datascientest, partenaire de l'École des Mines Paris | PSL, j'ai obtenu mon diplôme de niveau 7 intitulé Ingénieur / Chef de projet IA, spécialisé en tant qu'ingénieur Machine Learning. Au cours de cette formation, j'ai acquis des compétences solides en machine learning, notamment dans l'utilisation de bibliothèques telles que TensorFlow et Scikit-learn, ainsi que dans la mise en œuvre de modèles de classification et de régression. Je suis déterminé à utiliser mes compétences en machine learning pour résoudre des problèmes complexes et contribuer à des projets innovants.
      </motion.p>

      <div className="mt-10 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
