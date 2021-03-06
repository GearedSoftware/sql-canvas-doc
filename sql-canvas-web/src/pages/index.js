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
    title: "Visualise Data",
    imageUrl: 'img/landing/minhhoa1.png',
    description: (
      <>
        Visualise your data objects and relationships with an interactive HTML canvas allowing you to access, discover and investigate your data relationships with ease.
      </>
    ),
    demo: "img/landing/demo_visual.gif"
  },
  {
    title: "SQL Builder",
    imageUrl: 'img/landing/minhhoa2.png',
    description: (
      <>
        Quickly build Structured Query Language (SQL) using our SQL Builder covering simple to complex statements to retrieve data.
      </>
    ),
    demo: "img/landing/demo_select_builder.gif"
  },
  {
    title: "Data Integration",
    imageUrl: 'img/landing/minhhoa4.png',
    description: (
      <>
        Integrate your findings with existing business processes by exporting your data and relationships in various formats including xml, csv, json and xlsx.
      </>
    ),
    demo: "img/docs/demo_export.gif"
  },
  {
    title: "Centralised Data",
    imageUrl: 'img/landing/minhhoa3.png',
    description: (
      <>
        Utilising a secure centralised host access point we can visualise your data on any device to help others in your organisation understand your data findings.
      </>
    )
  },
  {
    title: "Multiple DBMS Support",
    imageUrl: 'img/landing/dbms.png',
    description: (
      <>
        We support the most 5 commonly used DBMS including IBM Db2, MySQL, Microsoft SQL Server, Oracle and Postgresql with an ever-increasing pipeline of development to cover MongoDb, SAP HANA, Teradata, etc.
      </>
    )
  },
  {
    title: "Custom Build",
    imageUrl: 'img/landing/minhhoa5.png',
    description: (
      <>
        Specialised build can be provided to fit your organisation need, from import/export, object visualisations to protected cloud, data integration, and more. Please contact us with your requirements.
      </>
    )
  },
];

const fadeProps = {delay: 650, duration: 1500};

function Feature({imageUrl, title, description, demo, rtl}) {  
  const imgUrl = useBaseUrl(imageUrl);
  const txtDiv = (
    <div className={classnames("col col--4", styles.featureText)} style={{direction: 'ltr'}}>
      <h2>{title}</h2>
      <p>{description}</p>
      {demo 
      ? <Popup modal closeOnDocumentClick closeOnEscape lockScroll trigger={<button className="button button--info button--outline">Demo</button>}>
          <img className={styles.demoImage} src={useBaseUrl(demo)} alt={title} />
        </Popup>
      : null}
    </div>
  );
  const imgDiv = (
    <div className="col col--8" style={{textAlign: "center", zIndex: -1}}>
      <div >
        {imgUrl ? <img class={styles.featureImage} src={imgUrl} alt={title} /> : null} 
      </div>
    </div>
  );
  const rowClass = classnames({
    ['row']: true,
    [styles.heroBanner]: true,
    [styles.rtl]: rtl
  });
  return (    
    <div className={classnames('section', styles.block)}>  
      <div className={rowClass}>   
        <Fade left={rtl ? true : false} right={rtl ? false : true} {...fadeProps}>{txtDiv}{imgDiv}</Fade>
      </div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  // DO NOT USE global or window.innerWidth, debug work but build scew up all classnames
  // const w = global.innerWidth;
  return (
    <Layout
      title={`Home`}
      description={siteConfig.tagline}>
      <header className={classnames(styles.heroBanner, styles.header)}>      
        <div className={styles.bgImage}>        
          <img src={'img/landing/background.png'} alt={"Background"} height="100%" width="100%"/>
        </div>           
        <div className={classnames(styles.bgImage, styles.bgImageLogo)}>        
          <img src={'img/logobot.svg'} alt={"Logo"} width="320px"/>  
          <p className={styles.tagline}>{siteConfig.tagline}</p>
          <Link className={classnames('button button--primary button--outline button--lg', styles.getStarted)} to={useBaseUrl('docs/installation')}>
            Get Started
          </Link>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container">   
            {features.map((props, idx) => (
              <Feature key={idx} {...props} rtl={idx % 2 === 1} />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
