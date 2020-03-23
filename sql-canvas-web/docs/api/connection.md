---
id: connection
title: Route /api/connections
sidebar_label: /connections
---


| Type | Route         | Description                                                            | Auth| Request | Response |
| ---- | --------------| ---------------------------------------------------------------------- |:---:| ------- | -------- |
| POST | ./connections/connect    | Connect and return the Auth Token for the connection request| NO  | ConnObjectType | {success: boolean, token: string} |
| POST | ./connections/disconnect | Disconnect and remove cache for a connection                | YES | | {success: boolean} |
| POST | ./connections/test       | Test connection                                             | YES | | {success: boolean} |
| GET  | ./connections/me         | Return Connection object describe in the Auth Token         | YES | | ConnObjectType |
| GET  | ./connections/grant      | Return user grant                                           | YES | | Array(String) |
| GET  | ./connections/filepaths  | Return user data's filepaths                                | YES | | Array(FilePathType) |


### Sample ConnObjectType

```javascript
connObject = {
  dbType: "mysql"
  host: "localhost"
  port: "3306"
  database: ""
  username: "admin"
  password: password
  passwordSave: false
  alias: "MySQL"
}
```

### Sample FilePathType

```javascript
response = [  
  {
    name: "saves"
    path: "saves"
    isDirectory: true
  },
  {
    name: "new1.json"
    path: "saves/new1.json"
    isDirectory: false
  }
]
```