---
id: select
title: Perform SELECT
sidebar_label: Select
---

export const Image = ({src, alt}) => (<img src={src} alt={alt}/>);

## SQL Select Builder

On Open Canvas, right-click and select **Import by SQL** and select clause in the **Create a Select Statement** popup:

<Image src="./images/select_builder.gif" alt="Demo Select Builder"/>

##### SELECT Clause
<Image src="./images/select_builder_SELECT.png" alt="Select Builder SELECT"/>

Type of Select to perform
* Options: OBJECTs, COUNT
* Default: OBJECTs

##### FROM Clause
<Image src="./images/select_builder_FROM.png" alt="Select Builder FROM"/>

Table to start the Select from, dropdown will list all available tables within the selected _Schema_. Notation (i.e. **A**) at the end will be the table Alias. 
* Button **+** : Add a _JOIN_ Clause
* Button **-** : Clear _FROM_ Clause

##### JOIN Clause (if has)
<Image src="./images/select_builder_JOIN.png" alt="Select Builder JOIN"/>

There are 3 parts which form a _JOIN_ Clause:

1. Type of join, for more info see [W3Schools's SQL Joins](https://www.w3schools.com/sql/sql_join.asp). Default: **LEFT JOIN**
2. Table to join with, dropdown will list all joinable tables, prefix with the _Alias_ of the table to join on. Notation (e.g. **B**) at the end will be the joined table Alias.
3. The join condition, this will be populated automatically base on the select JOIN table.
* Button +: Add another _JOIN_ Clause as next sibling
* Button -: Remove _JOIN_ Clause on the same line

##### WHERE Clause
<Image src="./images/select_builder_WHERE.png" alt="Select Builder WHERE"/>

There are 3 parts which form a _WHERE_ Clause:

1. Column to filter data on, dropdown will list all columns which available, prefix with the _Alias_ of the _FROM_ table and any _JOIN_ tables if have
2. Operator to check if value is Equal, Greater than, etc. Default **=**
3. Value to filter by

> Note: single-quote will be automatically add in for non-numeric fvalue, base on table schema.

* Button +: Add another _WHERE_ Clause as next sibling
* Button -: Remove _WHERE_ Clause on the same line

##### ORDER Clause
<Image src="./images/select_builder_ORDER.png" alt="Select Builder ORDER"/>

There are 2 parts which form an _ORDER_ Clause:

1. Column to order data on, dropdown will list all columns which available, prefix with the _Alias_ of the _FROM_ table and any _JOIN_ tables if have
2. Type or Sort to perform, either _ASC_ for ascending or _DESC_ for descending. Default **ASC**

* Button +: Add another _ORDER_ Clause as next sibling
* Button -: Remove _ORDER_ Clause on the same line

##### FETCH Clause
<Image src="./images/select_builder_FETCH.png" alt="Select Builder FETCH"/>

Number of records to return. Default: **50**

## Import Parent/Child

Right-click an object and click on "Import Parent" or "Import Child", sub context menu will show all the parents/childs link to the selected object type by foreign key. Click on one of the table name will retrieve all the object with the same type, using selected object as filter condition base on its foreign key.

<Image src="./images/select_import.gif" alt="Select Import Parent Child"/>

> Note: When multiple objects of different types are selected, the **Import Child** and **Import Parent** will be performed for all selected objects with the same type with the right-clicked object type.

> Note: **Import All Child** and **Import All Parent** will return all type of child or parent. _Caution: large number of child/parent can lead to long way time_

## Refresh

1. Right-click on selected object(s) and click on "Refresh". 
2. Right-click on _Canvas_ click on "Refresh All". 

Objects will be refreshed by perform a _SELECT_ using object's primary key(s). If object(s) is no longer exist, they will be removed from canvas.