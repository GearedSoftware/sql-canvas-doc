---
id: sql
title: Route /api/sql
sidebar_label: /sql
---


| Type | Route              | Description                                         | AuthToken | Request Body | Response |
| ---- | ------------------ | --------------------------------------------------- | :-----------: | ------- | -------- |
| POST | ./createStatement  | Create SQL Statement base on request(s)             | YES | Array(RequestType) | Array(StatementType) |
| POST | ./executeStatement | Create and Execute SQL Statement base on request(s) | YES | Array(RequestType) | Array(SqlResultType) |

## Sample RequestType

```javascript
request = { 
  schema: "cdh",
  selectType: "objects",
  type: "SELECT",
  fromTable: "party",
  joinClauses: [
    {
      type: "left",
      id: "0.party_system.1.FK_party_system_party_id",
      table: "party_system",
      fromIdx: "0",
      constraint: "FK_party_system_party_id",
      on: "ON B.PARTY_ID = A.PARTY_ID",
      isChild: "1"
    }
  ],
  whereClauses: [
    {
      logic: "and",
      column: "0.party_id",
      operator: "=",
      value: "1"
    }
  ],
  orderClauses: [    
    {
      column: "0.party_id",
      type: "asc",
      fetchFirst: 100
    }
  ]
}
```
## Sample Response with StatementType
```javascript
response = {  
  statements: [
    {
      dbType: "mssql",
      sql: "SELECT TOP 100 a.party_id a_1, a.status a_2, a.update_user_id a_3, a.expiry_timestamp a_4,↵       a.start_timestamp a_5, a.update_timestamp a_6, a.row_version a_7, b.party_system_id b_1, b.party_id b_2,↵       b.source_system b_3, b.update_user_id b_4, b.expiry_timestamp b_5, b.start_timestamp b_6, b.update_timestamp b_7,↵       b.row_version b_8 ↵  FROM cdh.party a↵  LEFT JOIN cdh.party_system b↵    ON b.party_id = a.party_id↵ WHERE a.party_id = @p0↵ ORDER BY a.party_id asc↵",
      params: ["2"],
      request: request
    }
  ]
}
```

## Sample Response with SqlResultType

```javascript
response = {
  sqlResults: [
    {
      statement: {
        dbType: "mssql",
        sql: "SELECT TOP 100 a.party_id a_1, a.status a_2, a.update_user_id a_3, a.expiry_timestamp a_4,↵       a.start_timestamp a_5, a.update_timestamp a_6, a.row_version a_7, b.party_system_id b_1, b.party_id b_2,↵       b.source_system b_3, b.update_user_id b_4, b.expiry_timestamp b_5, b.start_timestamp b_6, b.update_timestamp b_7,↵       b.row_version b_8 ↵  FROM cdh.party a↵  LEFT JOIN cdh.party_system b↵    ON b.party_id = a.party_id↵ WHERE a.party_id = @p0↵ ORDER BY a.party_id asc↵",
        params: ["2"],
        request: request
      },
      result: {
        party: [
          {          
            party_id: 2,
            status: "active",
            update_user_id: "sql_canvas",
            expiry_timestamp: null,
            start_timestamp: null,
            update_timestamp: "2020-01-01T01:01:00.000Z",
            row_version: "<BINARY>",
          }
        ],
        party_system: [
          {
            party_system_id: 2,
            party_id: 2,
            source_system: "SAS",
            update_user_id: "sql_canvas",
            expiry_timestamp: null,
            start_timestamp: null,
            update_timestamp: "2020-01-01T00:00:00.000Z",
            row_version: "<BINARY>"
          }
        ]
      }
    }
  ]
}
```