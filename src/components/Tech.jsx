import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubTextLight}>My skills</p> */}
        <h2 className={styles.sectionHeadTextLight}>Mes compétences</h2>
      </motion.div>

      <p className="text-justify text-lg text-timberWolf mt-10">
        En tant qu'ingénieur en machine learning, je combine une expertise approfondie dans les bibliothèques de machine learning telles que Scikit-learn, Keras et TensorFlow avec des compétences en orchestration et déploiement, utilisant des outils comme Docker, Kubernetes et MLflow pour créer des solutions robustes et évolutives, allant de l'analyse de données à la mise en production de modèles performants.
      </p>

      <div className="flex flex-wrap justify-center gap-10 mt-20">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
