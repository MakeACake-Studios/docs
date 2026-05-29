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
            <img
                src="/img/logo-dev-new.png"
                alt="MakeABuilders"
                style={{maxHeight: '150px', marginBottom: '1.5rem'}}
            />
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
            <main className="container margin-vert--xl">
                <div className="row">
                    <div className={clsx("col col--10 col--offset-1", styles.contentSection)}>
                        <Heading as="h2">Привет!</Heading>
                        <p>
                            И добро пожаловать в официальную документацию по проекту MakeABuilders.
                            Здесь сосредоточена основная информация о нашем сервере: фишки,
                            различные механики, общая информация о проектах итп. Присаживайся
                            поудобнее, а мы начинаем!
                        </p>

                        <Heading as="h2">MakeABuilders! Today!</Heading>
                        <p><em>Или "Тот самый сервер, что ты искал!"</em></p>

                        <p>
                            Наш главный, и самый первый проект. Родился из желания некого наларта
                            учить джаву и писать плагины для маинкрафт серверов. В данный момент
                            закрыт на вайп.
                        </p>

                        <hr />

                        <div className="text--center margin-vert--lg">
                            <img src="/img/motd.png" alt="Пример оформления описания в списке серверов" className={styles.screenshot} />
                        </div>

                        <p>
                            Представляет собой ванильный сервер с различными улучшениями,
                            дополнениями и механиками, а также имеет небольшую рп состовляющую.
                            Из основного — собственное ядро отвечающее в том числе за весь визуал
                            на сервере, начиная от motd и таба, заканчивая табом и профилем.
                        </p>

                        <hr />

                        <p>
                            Из особых фишек можно выделить различные мелкие улучшения по типу возможности
                            изменения роста, ускоренного пропуска ночи, РП механики выборов в министры
                            общественных территорий и... возможность добавить что то свое.
                        </p>

                        <div className="text--center margin-vert--lg">
                            <img src="/img/suggestion.png" alt="Одно из принятых предложений в нашем Discord'е" className={styles.screenshot} />
                        </div>

                        <p>
                            Звучит, на самом деле, не густо, хотя на самом деле таких мелочей и не мелочей
                            немало, важнее то что ты можешь предложить что то свое. От окисления меди с
                            помощью бутылочки воды, до возвращения сапрессора. Если твоя идея понравится
                            игрокам - считай, что она уже на сервере.
                        </p>

                        <hr />

                        <p>
                            Отдельно хотелось бы выделить свободу действий на нашем сервере: ты можешь делать
                            все что угодно, что не мешает либо вредит серверу или другим игрокам в каком либо виде.
                        </p>
                        <ul>
                            <li>Самолет-бомбардировщик оставляющий за собой выжженную полосу земли? Без проблем.</li>
                            <li>Адронный коллайдер основанный на разгоне предметов с помощью льда и воды? Мощь, главное сервер не убей.</li>
                        </ul>

                        <p>Главное — наш проект строится на взаимном уважении, дружеской атмосфере и желании творить вместе.</p>

                        <hr />

                        <p>
                            Более подробную информацию о фишках и особенностях MakeABuilders вы можете прочитать в{' '}
                            <Link to="/docs/feature">соответствующем разделе</Link>.
                        </p>
                    </div>
                </div>
            </main>
        </Layout>
    );
}