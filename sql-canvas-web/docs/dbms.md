---
id: dbms
title: DBMS Supports
sidebar_label: DBMS Supports
---

Below is the list of Database Management System which are currently supported by SQL Canvas. For Database Version Supports, please see its plugin's documentations


## MySQL <img height="25" alt="MySQL Logo" src="/img/icons/mysql.svg"/>

MySQL is an open-source relational database management system. Its name is a combination of "My", the name of co-founder Michael Widenius's daughter, and "SQL", the abbreviation for Structured Query Language. [Wikipedia](https://en.wikipedia.org/wiki/MySQL)

* Plugin: [Node MySQL 2](https://www.npmjs.com/package/mysql2)

* Plugin Version: 1.6.5

## Microsoft SQL Server <img height="25" alt="MS SQL Logo" src="/img/icons/mssql.png"/>

Microsoft SQL Server is a relational database management system developed by Microsoft. As a database server, it is a software product with the primary function of storing and retrieving data as requested by other software applications—which may run either on the same computer or on another computer across a network. [Wikipedia](https://en.wikipedia.org/wiki/Microsoft_SQL_Server)

* Plugin: [node-mssql](https://www.npmjs.com/package/mssql)

* Plugin Version: 6.1.0

## PostgreSQL <img height="25" alt="Postgre Logo" src="/img/icons/postgre.png"/>

PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and technical standards compliance. It is designed to handle a range of workloads, from single machines to data warehouses or Web services with many concurrent users. [Wikipedia](https://en.wikipedia.org/wiki/PostgreSQL)

* Plugin: [node-postgres](https://www.npmjs.com/package/pg)

* Plugin Version: 7.18.2

## IBM DB2 <img height="25" alt="Db2 Logo" src="/img/icons/db2.png"/>

Db2 is a family of data management products, including database servers, developed by IBM. They initially supported the relational model, but were extended to support object-relational features and non-relational structures like JSON and XML. The brand name was originally styled as DB/2[2], then DB2[3][4][5] until 2017[6] and finally changed to its present form.  [Wikipedia](https://en.wikipedia.org/wiki/IBM_Db2_Family)

* Plugin: [node-ibm_db](https://www.npmjs.com/package/ibm_db)

* Plugin Version: 2.6.4

## Oracle <img height="25" alt="Oracle Logo" src="/img/icons/oracle.png"/>

It is a database commonly used for running online transaction processing (OLTP), data warehousing (DW) and mixed (OLTP & DW) database workloads. The latest generation, Oracle Database 19c, is available on-prem, on-cloud, or in a hybrid-Cloud environment. 19c may also be deployed on Oracle Engineered Systems (e.g. Exadata) on-prem, on Oracle (public) cloud or (private) cloud at customer. [Wikipedia](https://en.wikipedia.org/wiki/Oracle_Database)

* Plugin: [node-oracledb](https://www.npmjs.com/package/oracledb)

* Pre-requirements:

> Node-oracledb installation instructions: https://oracle.github.io/node-oracledb/INSTALL.html
You must have 64-bit Oracle client libraries in your PATH environment variable.
If you do not have Oracle Database on this computer, then install the Instant Client Basic or Basic Light package from     
http://www.oracle.com/technetwork/topics/winx64soft-089540.html
A Microsoft Visual Studio Redistributable suitable for your Oracle client library version must be available.

> Oracle 19, 18, 12.2, 12.1 or 11.2 client libraries on the machine Node.js is installed on.

> Run node -p "process.arch" and make sure to use 64-bit or 32-bit Oracle client libraries to match the Node.js architecture.

> Oracle client libraries are included in Oracle Instant Client RPMs or ZIPs, a full Oracle Client, or a database on the same machine. You only need one of these installations.

> Oracle’s standard client-server network interoperability allows connections between different versions of Oracle Client and Oracle Database. For certified configurations see Oracle Support’s Doc ID 207303.1. In summary, Oracle Client 19, 18 and 12.2 can connect to Oracle Database 11.2 or greater. Oracle Client 12.1 can connect to Oracle Database 10.2 or greater. Oracle Client 11.2 can connect to Oracle Database 9.2 or greater. The technical restrictions on creating connections may be more flexible. For example Oracle Client 12.2 can successfully connect to Oracle Database 10.2.

## MongoDB

Coming Soon.

* Plugin: [mongodb](https://www.npmjs.com/package/mongodb)

## SAP HANA

Coming Soon.

* Plugin: [@sap/hana-client](https://www.npmjs.com/package/@sap/hana-client)