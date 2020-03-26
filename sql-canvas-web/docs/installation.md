---
id: installation
title: Installation
---
## Linux

1. Download the latest [tar file](https://packages.sqlcanvas.app/linux).

2. Unzip the file in the location of your choice.
```
tar -zxvf sql-canvas-xx-xx-linux.tar.gz /etc/sqlcanvas
```
3. Edit the .env file in the same directory if need:

| Variables      |      Description      | Default |
| -------------- | ----------------------| :--------: |
| LOG_LEVEL      | Log level for the app, DEBUG log can be turned on to log statements being execute and their results|INFO|
| PORT           | Port number where the app will be listening on |3011|
| JWT_SECRET     | JWT Secret, which used to signed JWT (JSON Web Token) to enable secure communication from client to server side|sqlcanvasapi|
| USER_DATA_PATH | Location where you want the users' saves and preferences files to be store|./data|

Sample: 
```
LOG_LEVEL=info
PORT=3011
JWT_SECRET=sqlcanvasapi
USER_DATA_PATH=./data
```

4. Use [pm2](https://www.npmjs.com/package/pm2), [forever](https://www.npmjs.com/package/forever) or similar to start the app

```
sudo pm2 start /etc/sqlcanvas/sql-canvas-api-linux
```

5. Configure Nginx or a web server of your choice to host the PORT number above

## Windows

1. Download the latest [zip file](https://packages.sqlcanvas.app/win).

2. Unzip in a location of your choice.

3. Run install.bat and follow the prompt.

