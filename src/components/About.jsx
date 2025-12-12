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
        // Si tes cartes sont sur fond foncé, garde bg-jetLight et text-white.
        // Si tu veux des cartes claires, change bg-jetLight par bg-white et le texte en noir.
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-eerieBlack`}>MON PARCOURS</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        // ICI : Couleur gris foncé (#5c5c5c) pour être lisible sur le BLANC
        className="mt-4 text-[#5c5c5c] text-[18px] max-w-6xl leading-[30px] text-justify">
        
        {/* Titre en gras et noir */}
        <span className='font-extrabold text-black text-[20px] block mb-4'>
          De l'investigation criminelle à l'architecture Data.
        </span>

        Mon profil est atypique, et c'est ma plus grande force. Pendant 13 ans en tant que <strong>Chef de groupe PJ (Gendarmerie)</strong>, j'ai piloté des investigations complexes où la précision de l'information était vitale.
        <br /><br />
        Aujourd'hui, j'ai transposé cette rigueur analytique et ce leadership opérationnel vers le <strong>Cloud Computing</strong> et le <strong>Data Engineering</strong>.
        Je ne me contente pas de coder : je structure, je sécurise et je valorise la donnée pour la rendre intelligible.
        <br /><br />
        Expert certifié <strong>Snowflake</strong> et <strong>AWS</strong>, je combine une maîtrise technique de la "Modern Data Stack" avec une capacité éprouvée à gérer des équipes et des projets critiques. Mon objectif ? Transformer vos données brutes en décisions stratégiques.
      </motion.p>

      {/* Les cartes de compétences */}
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
