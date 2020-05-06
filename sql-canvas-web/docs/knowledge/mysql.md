---
id: mysql
title: MySQL
---

### Constants
```js
const IGNORE_SCHEMAS="('information_schema','innodb','metadata','mysql','performance_schema','sys')";
```

### Dummy Test Select
```js
 select 1 as test
```

### Retrieve User's Permissions
```js
select user, select_priv, insert_priv, update_priv, delete_priv, create_priv, alter_priv, drop_priv 
  from mysql.user 
 where user = ?
```

### Retrieve Schema List
```js
 select schema_name 
   from information_schema.schemata
  where schema_name not in ${IGNORE_SCHEMAS}
  order by schema_name
```

### Retrieve Columns BY Schema
```js
 select t.table_name as table_name,
        c.ordinal_position as column_id,
        c.column_name as column_name,
        c.data_type as data_type,
        c.is_nullable as is_nullable,
        c.column_default as column_default,
        case when c.extra = 'auto_increment' then 1 else 0 end as is_identity,
        case when c.numeric_precision is not null then c.numeric_precision else c.character_maximum_length end as max_length,
        case when c.datetime_precision is not null then c.datetime_precision when c.numeric_scale is not null then c.numeric_scale else 0 end as 'precision'
        from information_schema.tables as t 
  inner join information_schema.columns as c on c.table_schema = t.table_schema and c.table_name = t.table_name
  where t.table_type = 'BASE TABLE' 
    and t.table_schema = ? 
  order by t.table_name, c.ordinal_position
```

### Retrieve Primary Keys BY Schema
```js
 select tab.table_name,  
        group_concat(kcu.column_name order by kcu.ordinal_position separator ', ') as columns
   from information_schema.tables tab
   left join information_schema.table_constraints tco on tab.table_schema = tco.table_schema and tab.table_name = tco.table_name and tco.constraint_type = 'PRIMARY KEY'
   left join information_schema.key_column_usage kcu on tco.constraint_schema = kcu.constraint_schema and tco.constraint_name = kcu.constraint_name and tco.table_name = kcu.table_name
  where tab.table_schema = ?
  group by tab.table_schema, tab.table_name, tco.constraint_name
  order by tab.table_schema, tab.table_name
```

### Retrieve Foreign Keys BY Schema
```js
 select fks.constraint_name, 
        fks.table_name foreign_table, 
        fks.referenced_table_name as primary_table,
        group_concat(kcu.column_name order by position_in_unique_constraint separator ', ') as fk_columns,
        group_concat(kcu.referenced_column_name order by position_in_unique_constraint separator ', ') as pk_columns
   from information_schema.referential_constraints fks
   join information_schema.key_column_usage kcu on fks.constraint_schema = kcu.table_schema and fks.table_name = kcu.table_name and fks.constraint_name = kcu.constraint_name
  where fks.constraint_schema = ?
  group by fks.table_name, fks.unique_constraint_schema, fks.referenced_table_name, fks.constraint_name
  order by fks.table_name
```

### Sample Error Object
```js
{ 
  message: 'Table \'development.abc\' doesn\'t exist', 
  code: 'ER_NO_SUCH_TABLE', 
  errno: 1146, 
  sqlState: '42S02', 
  sqlMessage: 'Table \'development.abc\' doesn\'t exist' 
}
```