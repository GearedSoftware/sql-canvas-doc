---
id: installation
title: Installation
---
## Linux

1. Download the [app file](https://docusaurus.io).

2. Put the app file in the location of your choice.

3. Create an .env file in the same directory with the followings:

| Variables      |      Description      | Compulsary |
| -------------- | ----------------------| :--------: |
| LOG_LEVEL      | Log level for the app, DEBUG log can be turned on to log statements being execute and their results (default "INFO")|NO|
| PORT           | Port number where the app will be listening on |YES|
| JWT_SECRET     | A secret of your choosing, which used to signed JWT (JSON Web Token) to enable secure communication from client to server side|YES|
| USER_DATA_PATH | Location where you want the users' saves and preferences files to be store (default "./data")|NO |

Sample: 

```
LOG_LEVEL=debug
PORT=3001

JWT_SECRET=sqlcanvasapi
USER_DATA_PATH=./data
```
4. Configure Nginx or a web server of your choice to host the PORT number above

## Windows

1. Download the [installation file](https://docusaurus.io).

2. Follow the installation wizard.