---
id: postgre
title: PostgreSQL
sidebar_label: PostgreSQL
---

### Constants
```js
const IGNORE_SCHEMAS="('information_schema', 'pg_catalog', 'pg_temp_1', 'pg_toast' ,'pg_toast_temp_1')";
```

### Dummy Test Select
```js
 select 1 as test
```

### Retrieve User's Permissions
```js
 select grantee AS username, CONCAT(table_schema, '.', table_name) AS table, 
        case when COUNT(privilege_type) = 7 then 'ALL' else ARRAY_TO_STRING(ARRAY_AGG(privilege_type), ', ') end AS grants
   from information_schema.role_table_grants
  where grantee = $1
  group by table_name, table_schema, grantee
```

### Retrieve Schema List
```js
 select s.nspname as schema_name, s.oid as schema_id, u.usename as owner
   from pg_catalog.pg_namespace s
   join pg_catalog.pg_user u on u.usesysid = s.nspowner
  where s.nspname not in ${IGNORE_SCHEMAS}
  order by schema_name
```

### Retrieve Columns BY Schema
```js
 select table_schema as schema_name,
        table_name as table_name,
        column_name as column_name,
        ordinal_position as column_id,
        data_type as data_type,
        is_nullable as is_nullable,
        column_default as column_default,
        is_identity as is_identity,
        case when character_maximum_length is not null then character_maximum_length else numeric_precision end as max_length
  from information_schema.columns
 where table_schema = $1
 order by table_schema, table_name, ordinal_position
```

### Retrieve Primary Keys BY Schema
```js
 select kcu.table_schema as schema_name,
         tco.constraint_name as pk_name,
         kcu.table_name as table_name,               
         string_agg(kcu.column_name,', ') as columns
    from information_schema.table_constraints tco
    join information_schema.key_column_usage kcu on kcu.constraint_name = tco.constraint_name
     and kcu.constraint_schema = tco.constraint_schema and kcu.constraint_name = tco.constraint_name
   where tco.constraint_type = 'PRIMARY KEY'
     and kcu.table_schema = $1
   group by tco.constraint_name, kcu.table_schema, kcu.table_name
   order by kcu.table_schema, kcu.table_name
```

### Retrieve Foreign Keys BY Schema
```js
 select kcu.constraint_name as constraint_name,
        kcu.table_name as foreign_table,
        rel_kcu.table_name as primary_table,
        kcu.ordinal_position as no,
        string_agg(kcu.column_name,', ') as fk_columns,
        string_agg(rel_kcu.column_name,', ') as pk_columns
   from information_schema.table_constraints tco
   join information_schema.key_column_usage kcu on tco.constraint_schema = kcu.constraint_schema
    and tco.constraint_name = kcu.constraint_name
   join information_schema.referential_constraints rco on tco.constraint_schema = rco.constraint_schema
    and tco.constraint_name = rco.constraint_name
   join information_schema.key_column_usage rel_kcu on rco.unique_constraint_schema = rel_kcu.constraint_schema
    and rco.unique_constraint_name = rel_kcu.constraint_name and kcu.ordinal_position = rel_kcu.ordinal_position
  where tco.constraint_type = 'FOREIGN KEY' and kcu.table_schema = $1
  group by kcu.constraint_name, kcu.table_name, rel_kcu.table_name, kcu.ordinal_position
  order by kcu.table_name, kcu.ordinal_position
```

### Sample Error Object
```js
{ 
  error: `relation "development.abc" does not exist`, 
  name: 'error', 
  length: 111, 
  severity: 'ERROR', 
  code: '42P01',
  detail: undefined,  
  hint: undefined,  
  position: '13', 
  internalPosition: undefined,
  internalQuery: undefined, 
  where: undefined,
  schema: undefined, 
  table: undefined,  
  column: undefined,  
  dataType: undefined,  
  constraint: undefined,
  line: '1159', 
  routine: 'parserOpenTable' 
}
```
