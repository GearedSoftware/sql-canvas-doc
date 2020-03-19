---
id: connection
title: Connections
sidebar_label: Connections
---

export const Image = ({src, alt}) => (<img src={src} alt={alt}/>);

## Add New
In the Browser tab, right-click **Connections** and select **Add New Connection**, or click the __+__ button. A popup will appear for you to select the database type and enter the connection details:

Alternatively, click the __+__ card on the Welcome page.

<Image src="./images/connection_add.png" alt="Add Connection Popup"/>


Click **Test Connection** to perform a test or click **Submit** to add Connection to Browser list

> Note: The followings make up a unique **_connectionId_** (different connections can have the same Alias name): **dbType::host::port::database::username**

> Note: Some Database type does not require to enter a Database name (e.g. MySQL), **database** will be set to **default**


## Connect

In the Browser tab, right-click the connection you want to connect and select **Connect**, or simply **double-click** the connection name. A popup similar to **Add New Connection** will appear and prompt you for a password. Enter the password and click **Submit** to connect.

> Note: Changing the connection details as this point might result in a brand new connection or connecting to another connection if the **_connectionId_** is matched

## Disconnect

In the Browser tab, right-click the connection you want to disconnect and select **Disconnect**, then click **Ok** on the confirm popup to disconnect.

Alternatively, click on the user icon on the top right-hand corner and select **Disconnect All** to disconnect from all current connections.

> Note: All unsaved file link to this connection will be lost.

## Delete

In the Browser tab, right-click the connection you want to delete and select **Delete**, then click **Ok** on the confirm popup to delete the connection.

> Note: All unsaved file link to this connection will be lost. However, if you re-add the same connection, previous saves file and preference will be restored. These files can be deleted permanently within the server's USER_DATA_PATH

## Refresh

In the Browser tab, click the **Refresh** button to refresh connection list and check for new/updated file or schema.