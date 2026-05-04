import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Документация',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Архитектура системы, модель данных, сценарии использования и технический стек TourClub.
      </>
    ),
    link: '/docs/docs/intro',
    linkLabel: 'Открыть документацию',
  },
  {
    title: 'API Reference',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Интерактивная документация REST API: походы, заявки, оплаты — с примерами запросов и ответов.
      </>
    ),
    link: '/docs/api',
    linkLabel: 'Открыть API Reference',
  },
  {
    title: 'Сценарии',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Подача заявки, обработка организатором, отметка об оплате — основные пользовательские сценарии.
      </>
    ),
    link: '/docs/docs/scenarios/uc-01',
    linkLabel: 'Открыть сценарии',
  },
];

function Feature({Svg, title, description, link, linkLabel}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <Link className="button button--outline button--primary button--sm" to={link}>
          {linkLabel}
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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