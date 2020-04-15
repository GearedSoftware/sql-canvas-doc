import React from 'react';
import Popup from "reactjs-popup";
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Fade from 'react-reveal/Fade';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import './modal.css';

const features = [  
  {
    title: <>Visualise Data</>,
    imageUrl: 'img/landing/minhhoa1.png',
    description: (
      <>
        Visualise your data objects and relationships with an interactive HTML canvas allowing you to access, discover and investigate your databases.
      </>
    ),
    demo: "img/docs/demo_select_import.gif"
  },
  {
    title: <>SQL Builder</>,
    imageUrl: 'img/landing/minhhoa2.png',
    description: (
      <>
        Quickly build Structured Query Language (SQL) using our SQL Builder covering simple to complex statements to retrieve data, visually browse data objects and discover relationships with ease.
      </>
    ),
    demo: "img/docs/demo_select_builder.gif"
  },
  {
    title: <>Data Integration</>,
    imageUrl: 'img/landing/minhhoa4.png',
    description: (
      <>
        Integrate your findings with existing business processes by exporting your data and relationships in various formats including xml, csv, json and xlsx.
      </>
    )
  },
  {
    title: <>Centralised Data</>,
    imageUrl: 'img/landing/minhhoa3.png',
    description: (
      <>
        Utilising a secure centralised host access point we enable to your data and visual canvas on any device to help others in your organisation understand your data findings.
      </>
    )
  },
  {
    title: <>Multiple DBMS Support</>,
    imageUrl: 'img/landing/minhhoa5.png',
    description: (
      <div>
        We support the most common used DBMS including MySQL, Microsoft SQL and Postgresql with an ever-increasing pipeline of development to cover IBM DB2, Oracle, SAP HANA and MongoDb.
        <img src={'img/landing/dbms.png'} alt={"Logo"} width="320px"/>
      </div>
    )
  },
];

function Feature({imageUrl, title, description, demo, rtl}) {
  const imgUrl = useBaseUrl(imageUrl);
  const imgDiv = (
    <div className={classnames('col col--8', styles.featureImage)}>
      {imgUrl && (
        <div>
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}      
    </div>
  )
  const txtDiv = (
    <div className={classnames('col col--4', styles.feature)}>
      <h2>{title}</h2>
      <p>{description}</p>
      {demo 
      ? <Popup modal closeOnDocumentClick 
          trigger={
            <button class="button button--info button--lg">Demo</button>
          }
          style={{width: "100%"}}
        >
          <img className={styles.featureImage} src={useBaseUrl(demo)} alt={title} />
        </Popup>
      : null}
    </div>
  )
  return (
    <div className={classnames(styles.block)}>
      <Fade>
        <div className={classnames('row', styles.heroBanner)}> 
          {rtl ? imgDiv : txtDiv}
          {rtl ? txtDiv : imgDiv}      
        </div>
      </Fade>
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
      <header className={classnames(styles.heroBanner, styles.header)}>      
        <div className={styles.bgImage}>        
          <img src={'img/landing/nen1.png'} alt={"Background"} height="700px" width="100%"/>
        </div>           
        <div className={classnames(styles.bgImage, styles.bgImageLogo)}>        
          <img src={'img/landing/logobot.svg'} alt={"Logo"} width="320px"/>  
          <p className={styles.tagline}>{siteConfig.tagline}</p>
          <Link
            className={classnames(
              'button button--primary button--lg',
              styles.getStarted,
            )}
            to={useBaseUrl('docs/installation')}>
            Try It Now
          </Link>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={classnames(styles.features, styles.featureText)}>
            <div className="container">
              <div className="column">
                {features.map((props, idx) => (
                  <div className="section">
                    <Feature key={idx} {...props} rtl={idx % 2 === 1} />
                  </div>
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
