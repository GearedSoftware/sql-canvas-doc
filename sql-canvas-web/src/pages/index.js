import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [  
  {
    title: <>Visualise Data</>,
    imageUrl: 'img/docs/demo_canvas_select.gif',
    description: (
      <>
        Visualise your data objects and relationships with an interactive HTML canvas allowing you to access, discover and investigate your databases.
      </>
    ),
  },
  {
    title: <>SQL Builder</>,
    imageUrl: 'img/docs/demo_select_builder.gif',
    description: (
      <>
        Quickly build Structured Query Language (SQL) using our SQL Builder covering simple to complex statements to retrieve data, visually browse data objects and discover relationships with ease.
      </>
    ),
  },
  {
    title: <>Data Integration</>,
    imageUrl: 'img/undraw_file_sync_ot38.svg',
    description: (
      <>
        Integrate your findings with existing business processes by exporting your data and relationships in various formats including xml, csv, json and xlsx.
      </>
    )
  },
  {
    title: <>Centralised Data</>,
    imageUrl: 'img/undraw_real_time_collaboration_c62i.svg',
    description: (
      <>
        Utilising a secure centralised host access point we enable to your data and visual canvas on any device to help others in your organisation understand your data findings.
      </>
    )
  },
  {
    title: <>Multiple DBMS Support</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        We support the most common used DBMS including MySQL, Microsoft SQL and Postgresql with an ever-increasing pipeline of development to cover IBM DB2, Oracle, SAP HANA and MongoDb.
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
