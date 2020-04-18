import React from 'react';
import Popup from "reactjs-popup";
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Fade from 'react-reveal/Fade';
import window from 'global';
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
        Visualise your data objects and relationships with an interactive HTML canvas allowing you to access, discover and investigate your databases.
      </>
    ),
    demo: "img/landing/demo_visual.gif"
  },
  {
    title: "SQL Builder",
    imageUrl: 'img/landing/minhhoa2.png',
    description: (
      <>
        Quickly build Structured Query Language (SQL) using our SQL Builder covering simple to complex statements to retrieve data, visually browse data objects and discover relationships with ease.
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
        Utilising a secure centralised host access point we enable to your data and visual canvas on any device to help others in your organisation understand your data findings.
      </>
    )
  },
  {
    title: "Multiple DBMS Support",
    imageUrl: 'img/landing/dbms.png',
    description: (
      <>
        We support the most common used DBMS including MySQL, Microsoft SQL and Postgresql with an ever-increasing pipeline of development to cover IBM DB2, Oracle, SAP HANA and MongoDb.
      </>
    )
  },
  {
    title: "Custom Build",
    imageUrl: 'img/landing/minhhoa5.png',
    description: (
      <>
        We can provide specialised build to fit your organisation need, from import/export, object visualisations to protected cloud, data integration, and more. Please contact us.
      </>
    )
  },
];
const fadeProps = {delay: 650, duration: 1500};

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
      ? <Popup modal closeOnDocumentClick trigger={<button className="button button--info button--outline">Demo</button>}>
          <img className={styles.demoImage} src={useBaseUrl(demo)} alt={title} />
        </Popup>
      : null}
    </div>
  )
  return (
    <div className={classnames("section", styles.block)}>
      <div className="column">  
        <div className={classnames('row', styles.heroBanner)}> 
          {rtl ? <Fade left {...fadeProps}>{imgDiv}{txtDiv}</Fade>
              : <Fade right {...fadeProps}>{txtDiv}{imgDiv}</Fade>} 
        </div>
      </div>    
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
          {features && features.length && (
            <section className={classnames(styles.features, styles.featureText)}>
              <div className="container">    
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} rtl={window.innerWidth > 900 && idx % 2 === 1} />
                ))} 
              </div>
            </section>
          )}     
      </main>
    </Layout>
  );
}

export default Home;
