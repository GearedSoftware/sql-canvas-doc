import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>SQL Builder</>,
    imageUrl: 'img/docs/demo_select_builder.gif',
    description: (
      <>
        Quickly build a SQL using our SQL Builder, from simple 
        to complex statement to retrieve data then browse through objects
        and their relationship with ease. 
      </>
    ),
  },
  {
    title: <>File Sync</>,
    imageUrl: 'img/undraw_file_sync_ot38.svg',
    description: (
      <>
        Save your Canvas, Schema View and Customizations to view on any devices
      </>
    )
  },
  {
    title: <>Collaborations</>,
    imageUrl: 'img/undraw_real_time_collaboration_c62i.svg',
    description: (
      <>
        Share your Canvas saves, customizations or custom SQLs with others. 
      </>
    )
  },
  {
    title: <>Multiple DBMS Support</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Support the most common used DBMS including MySQL, SQLServer, Postgre, and 
        more to come
      </>
    )
  },
];

function Feature({imageUrl, title, description, rtl}) {
  const imgUrl = useBaseUrl(imageUrl);
  const imgDiv = (
    <div className={classnames('col col--8', styles.feature)}>
      {imgUrl && (
        <div>
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}      
    </div>
  )
  const txtDiv = (
    <div className={classnames('col col--4', styles.feature)}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
  return (    
    <div className={classnames('row', styles.heroBanner)}> 
      {rtl ? imgDiv : txtDiv}
      {rtl ? txtDiv : imgDiv}
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Home`}
      description={siteConfig.tagline}>
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <div style={{display: "flex"}}>
            <img src={'img/sqlCanvasIcon.png'} alt={"Icon"} height="60"/>
            <h1 className="hero__title">{siteConfig.title}</h1>
          </div>          
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/installation')}>
              Try It Now
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="column">
                {features.map((props, idx) => (
                  <React.Fragment>
                    <Feature key={idx} {...props} rtl={idx % 2 === 1} />
                    <hr/>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
