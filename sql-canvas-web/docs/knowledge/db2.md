---
id: db2
title: IBM DB2
---

### Constants
```js
const IGNORE_SCHEMAS = `('SQLJ', 'NULLID')`;
```

### Dummy Test Select
```js
 select 1 from sysibm.sysdummy1
```

### Retrieve User's Permissions
```js
 select authid as username
  from sysibmadm.authorizationids a
  left join syscat.dbauth d
    on d.grantee = a.authid
  where authidtype = 'U' and authid = UPPER(?)
  order by username
```

### Retrieve Schema List
```js
 select schemaname as schema_name, owner as owner       
   from syscat.schemata    
  where schemaname not like 'SYS%'
    and schemaname not in ${IGNORE_SCHEMAS}
  order by schema_name
```

### Retrieve Columns BY Schema
```js
 select c.tabschema as schema_name,
        c.tabname as table_name, 
        c.colname as column_name,
        (c.colno + 1) as column_id,
        c.typename as data_type,
        case when c.typename = 'VARCHAR' then c.length else NULL end as max_length,
        case when c.nulls = 'Y' then 1 else 0 end as is_nullable,
        default as column_default,
        case when c.identity = 'Y' then 1 else 0 end as is_identity
   from syscat.columns c
  inner join syscat.tables t on t.tabschema = c.tabschema and t.tabname = c.tabname
  where t.type = 'T' and c.tabschema = ?
  order by schema_name, table_name, column_id
```

### Retrieve Primary Keys BY Schema
```js
 select distinct 
        tab.tabschema as schema_name,
        const.constname as pk_name,
        tab.tabname as table_name,
        (select SUBSTR(xmlserialize(xmlagg(xmltext(CONCAT( ', ',key.colname))) as VARCHAR(1024)), 3)
          from syscat.keycoluse key where key.tabname = tab.tabname and key.constname = const.constname
        ) AS columns
   from syscat.tables tab
  inner join syscat.tabconst const on const.tabschema = tab.tabschema and const.tabname = tab.tabname and const.type = 'P'
  inner join syscat.keycoluse key on const.tabschema = key.tabschema and const.tabname = key.tabname and const.constname = key.constname     
  where tab.type = 'T' and tab.tabschema = ?
  order by const.constname
```

### Retrieve Foreign Keys BY Schema
```js
 select ref.tabname as foreign_table,
        ref.reftabname as primary_table,   
        ref.constname as constraint_name,
        (select SUBSTR(xmlserialize(xmlagg(xmltext(CONCAT( ', ',key.colname))) as VARCHAR(1024)), 3)
          from syscat.keycoluse key 
          where key.tabschema = ref.tabschema and key.tabname = ref.tabname and key.constname = ref.constname
        ) AS fk_columns,
        (select SUBSTR(xmlserialize(xmlagg(xmltext(CONCAT( ', ',keypk.colname))) as VARCHAR(1024)), 3)
          from syscat.keycoluse keypk 
          where keypk.tabschema = ref.reftabschema and keypk.tabname = ref.reftabname and keypk.constname = ref.refkeyname
        ) AS pk_columns
   from syscat.references ref
  where ref.tabschema = ?
```

### Sample Error Object
```js
{ 
  [Error: [IBM][CLI Driver][DB2/NT64] SQL0204N  "CDH.ABC" is an undefined name.  SQLSTATE=42704]
  error: '[node-ibm_db] SQL_ERROR',
  sqlcode: -204,
  message:'[IBM][CLI Driver][DB2/NT64] SQL0204N  "CDH.ABC" is an undefined name.  SQLSTATE=42704\r\n',
  state: '42S02' 
}
```