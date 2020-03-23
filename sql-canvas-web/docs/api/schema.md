---
id: schema
title: Route /api/schema
sidebar_label: /schemas
---

| Type | Route         | Description                                         | AuthToken | Response |
| ---- | --------------| --------------------------------------------------- | :-----------: | -------- |
| GET  | ./schemas     | Return a list of available schemas, ignore system defaults | YES | Array(String) |
| GET  | ./schemas/:id | Return the selected schema definition in JSON format | YES | SchemaType |


### Sample SchemaType

```javascript
response = {
  party: {
    name: "party",
    columns: {
      party_id: {
        position: 1,
        name: "party_id",
        dataType: "int",
        nullable: false,
        maxLength: 10,
        precision: 0,
        default: null,
        autoIncrement: true
      },
      status: {
        position: 2,
        name: "status",
        dataType: "varchar",
        nullable: true,
        maxLength: 50,
        precision: 0,
        default: null,
        autoIncrement: false
      },
      update_user_id: {,…},
      expiry_timestamp: {,…},
      start_timestamp: {,…},
      update_timestamp: {,…},
      row_version: {,…},
    }
    primaryKeys: ["party_id"],
    foreignKeys: [],
    parentTables: [],
    childTables: ["party_system"],
  },
  party_system: {
    name: "party_system"
    columns: {,…}
    primaryKeys: ["party_system_id"]
    foreignKeys: [
      {
        name: "FK_party_system_party_id",
        primary: "party",
        foreign: "party_system",
        columns: ["party_id"],
        pkColumns: ["party_id"]
      }
    ],
    parentTables: ["party"],
    childTables: ["person_bio"]
  },
  person_bio: {
    name: "person_bio",
    columns: {,…},
    primaryKeys: ["person_bio_id"],
    foreignKeys: [,…],
    parentTables: ["party_system"],
    childTables: []
  }
}
```