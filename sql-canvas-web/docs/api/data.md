---
id: data
title: Route /api/data
sidebar_label: /data
---

| Type | Route               | Description                              | Auth| Request                         | Response           |
| ---- | ------------------- |----------------------------------------- |:---:| --------------------------------| ------------------ |
| POST   | /data/directories | Create a new directory on given filepath | YES | {path: string}                  | {success: boolean} |
| PUT    | /data/directories | Rename or move a directory               | YES | {path: string, newPath: string} | {success: boolean} |
| DELETE | /data/directories | Delete a directory                       | YES | {path: string}                  | {success: boolean} |
| POST   | /data/files       | Create/Save a file on given filepath     | YES | {path: string, data: any}       | {success: boolean} |
| PUT    | /data/files       | Rename or move a file                    | YES | {path: string, newPath: string} | {success: boolean} |
| DELETE | /data/files       | Delete a file                            | YES | {path: string}                  | {success: boolean} |