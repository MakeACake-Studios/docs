import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
    return (
        <header className={clsx('hero', styles.heroBanner)}>
            <div className="container">
                {/*<img*/}
                {/*    src="/img/logo.png"*/}
                {/*    alt="MakeABuilders"*/}
                {/*    style={{maxHeight: '150px', marginBottom: '1.5rem'}}*/}
                {/*/>*/}
                <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
                    MakeABuilders
                </Heading>
                <p className="hero__subtitle">
                    Documentation
                    <br />
                    <small>Подробная документация по проектам MaceACake Studios</small>
                </p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/start">
                        Начать исследовать
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home(): ReactNode {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Главная | ${siteConfig.title}`}
            description={siteConfig.tagline}>
            <HomepageHeader />
        </Layout>
    );
}