import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const tracks = [
  {
    title: 'Marketing site operations',
    description:
      'How the New Deliverance Astro site is structured, where content lives, and how to make safe landing page updates.',
    to: '/docs/marketing-site/overview',
  },
  {
    title: 'AI-native building with Codex',
    description:
      'Staff workflow for turning ministry needs into reviewed, testable internal tools using Codex on the compute environment.',
    to: '/docs/ai-native/codex-workflows',
  },
  {
    title: 'Internal tool modules',
    description:
      'A growing library of operating guides for tools created on the private network and compute cluster.',
    to: '/docs/internal-tools/module-template',
  },
];

function HomepageHeader(): ReactNode {
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <p className={styles.eyebrow}>New Deliverance internal technology guide</p>
        <Heading as="h1" className={styles.heroTitle}>
          Build, operate, and improve the New Deliverance tech stack.
        </Heading>
        <p className={styles.heroSubtitle}>
          Practical docs for maintaining the public site, using Codex well, and training staff on the internal tools built around the compute cluster and private network.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            Start Training
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="New Deliverance Tech Docs"
      description="Internal training docs for the New Deliverance technology stack.">
      <HomepageHeader />
      <main>
        <section className={styles.trackSection}>
          <div className="container">
            <div className={styles.trackGrid}>
              {tracks.map((track) => (
                <Link className={styles.trackCard} to={track.to} key={track.title}>
                  <h2>{track.title}</h2>
                  <p>{track.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
