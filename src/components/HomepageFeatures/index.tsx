import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: ReactNode;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Классическое выживание',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                Наслаждайтесь игрой в её первозданном виде. Наш сервер MakeABuilders
                сфокусирован на ванильном выживании без лишних плагинов и доната,
                влияющего на игровой баланс.
            </>
        ),
    },
    {
        title: 'Дружное комьюнити',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>
                Мы тщательно отбираем игроков через заявки, чтобы создать уютную
                и безопасную атмосферу для общения, совместных проектов и масштабных построек.
            </>
        ),
    },
    {
        title: 'Свобода творчества',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                Объединяйтесь в города, стройте сложные механизмы, участвуйте в экономике
                и ивентах. На сервере приветствуется реализация самых смелых архитектурных идей!
            </>
        ),
    },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
