---
id: select
title: Perform SELECT
sidebar_label: Select
---

## SQL SELECT Builder

Right-click on a canvas and select **Import by SQL** and select clause in the **Create a Select Statement** popup:

![Demo SELECT Builder](/img/docs/demo_select_builder.gif)

##### SELECT Clause
![SELECT Clause](/img/docs/select_builder_SELECT.png)

Type of Select to perform
* Options: OBJECTs, COUNT
* Default: OBJECTs

##### FROM Clause
![FROM Clause](/img/docs/select_builder_FROM.png)

Table to start the Select from, dropdown will list all available tables within the selected _Schema_. Notation (i.e. **A**) at the end will be the table Alias. 
* Button **+** : Add a _JOIN_ Clause
* Button **-** : Clear _FROM_ Clause

##### JOIN Clause (if has)
![JOIN Clause](/img/docs/select_builder_JOIN.png)

There are 3 parts which form a _JOIN_ Clause:

1. Type of join, for more info see [W3Schools's SQL Joins](https://www.w3schools.com/sql/sql_join.asp). Default: **LEFT JOIN**
2. Table to join with, dropdown will list all joinable tables, prefix with the _Alias_ of the table to join on. Notation (e.g. **B**) at the end will be the joined table Alias.
3. The join condition, this will be populated automatically base on the select JOIN table.
* Button +: Add another _JOIN_ Clause as next sibling
* Button -: Remove _JOIN_ Clause on the same line

##### WHERE Clause
![WHERE Clause](/img/docs/select_builder_WHERE.png)

There are 3 parts which form a _WHERE_ Clause:

1. Column to filter data on, dropdown will list all columns which available, prefix with the _Alias_ of the _FROM_ table and any _JOIN_ tables if have
2. Operator to check if value is Equal, Greater than, etc. Default **=**
3. Value to filter by

> Note: single-quote will be automatically add in for non-numeric fvalue, base on table schema.

* Button +: Add another _WHERE_ Clause as next sibling
* Button -: Remove _WHERE_ Clause on the same line

##### ORDER Clause
![ORDER Clause](/img/docs/select_builder_ORDER.png)

There are 2 parts which form an _ORDER_ Clause:

1. Column to order data on, dropdown will list all columns which available, prefix with the _Alias_ of the _FROM_ table and any _JOIN_ tables if have
2. Type or Sort to perform, either _ASC_ for ascending or _DESC_ for descending. Default **ASC**

* Button +: Add another _ORDER_ Clause as next sibling
* Button -: Remove _ORDER_ Clause on the same line

##### FETCH Clause
![FETCH Clause](/img/docs/select_builder_FETCH.png)

Number of records to return. Default: **50**

## Import Parent/Child

Right-click an object and click on "Import Parent" or "Import Child", sub context menu will show all the parents/childs link to the selected object type by foreign key. Click on one of the table name will retrieve all the object with the same type, using selected object as filter condition base on its foreign key.

![Demo Select Import Parent/Child](/img/docs/demo_select_import.gif)

> Note: When multiple objects of different types are selected, the **Import Child** and **Import Parent** will be performed for all selected objects with the same type with the right-clicked object type.

> Note: **Import All Child** and **Import All Parent** will return all type of child or parent. **Caution**: _large number of child/parent can lead to long wait time_.

When multiple objects of different types are selected, the **Import Child** and **Import Parent** will be performed for all selected objects with the same type of the right-clicked object.

![ Clause](/img/docs/demo_select_import_multiple.gif)Select Import Multiple"/>

> Note: When large number of childs return, they can be overlapped each other. Right-click the parent object, and click **Select Child** to help move all the child as once.  

## Refresh

1. Right-click on selected object(s) and click on **Refresh**. 
2. Right-click on _Canvas_ click on **Refresh All**.

Objects will be refreshed by perform a _SELECT_ using object's primary key(s). If object(s) is no longer exist, they will be removed from canvas.