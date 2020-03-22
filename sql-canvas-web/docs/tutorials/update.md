---
id: update
title: Perform Data Update
sidebar_label: Update
---

## INSERT

To **INSERT** an object to the database, perform the following steps:

1. Right-click on Canvas and click on **Add Object**, dropdown will list all available tables within the selected _Schema_. Click on a table name to add a mockup object to the Canvas.
2. Click on the mockup object to select it and fill out its data in the Tab **Properties**. (**_*_**) marks compulsary fields.
3. Right-click on the mockup object and click on **Commit Insert/Update**. Popup **Confirm Execution Statement** will be displayed.
4. Verify the SQL statement and click **Submit and Save**.

![Demo INSERT](/img/docs/demo_insert.gif)

> The followings fields are read-only and do not need user input: **_@NEXTID_** for auto increment column, **_@AUTO_POPULATED_** for auto populated columns (e.g.row timestamp).
> Save file will be immediately save to preserve the data and avoid confusion on turn to save file.

## UPDATE

To **UPDATE** an object to the database, perform the following steps:

1. Click on an object to select it.
2. In the Tab **Properties**, change the desired values.
3. Right-click on the updated object and click on **Commit Insert/Update**. Popup **Confirm Execution Statement** will be displayed.
4. Verify the SQL statement and click **Submit and Save**.

![Demo UPDATE](/img/docs/demo_update.gif)

> Note: Primary Keys fields and certain read-only fields (e.g. row timestamp) will return error on editing.
> Save file will be immediately save to preserve the data and avoid confusion on turn to save file.

## DELETE

To **DELETE** an object to the database, perform the following steps:

1. Right-click on the selected object(s) and click **Delete From**. Popup **Confirm Execution Statement** will be displayed.
2. Verify the SQL statement and click **Submit and Save**.

![Demo DELETE](/img/docs/demo_delete.gif)

> Note: If CASCADE is allowed on **DELETE**, all child objects of selected object(s) will also be **DELETE**. Make sure you know what you are doing.