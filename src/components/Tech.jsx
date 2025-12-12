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
        <p className={styles.sectionSubTextLight}>Mon arsenal technique</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies & Outils.</h2>
      </motion.div>

      <div className="w-full flex justify-center">
        <p className="text-justify text-[17px] text-timberWolf mt-4 max-w-3xl leading-[30px]">
          Ma boîte à outils est calibrée pour la <strong>Modern Data Stack</strong>. 
          Je privilégie des technologies robustes et scalables. 
          De l'infrastructure Cloud (<strong>AWS, Snowflake</strong>) à l'ingénierie des données (<strong>Python, SQL, dbt</strong>), 
          je maîtrise la chaîne de valeur complète. J'intègre également les pratiques <strong>DevOps</strong> (Docker, CI/CD) 
          pour garantir que les modèles et pipelines ne restent pas des prototypes, mais deviennent des produits fiables en production.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            {/* J'ajoute le nom de la techno en dessous pour que ce soit clair, 
                car certains logos se ressemblent */}
            <div className="text-center mt-2 text-timberWolf text-sm font-semibold">
                {technology.name}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, 'tech');
