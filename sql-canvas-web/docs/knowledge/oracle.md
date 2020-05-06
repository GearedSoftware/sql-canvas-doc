---
id: oracle
title: Oracle Database
---

### Constants
```js
const IGNORE_SCHEMAS = `('APPQOSSYS','CTXSYS','DBSNMP','DIP','OUTLN','RDSADMIN','SYS','SYSTEM')`;
```

### Dummy Test Select
```js
 select 1 from dual
```

### Retrieve User's Permissions
```js
select * from user_sys_privs where username = UPPER(:username)
```

### Retrieve Schema List
```js
 select username as schema_name
   from sys.all_users where username not in ${IGNORE_SCHEMAS}
  order by username
```

### Retrieve Columns BY Schema
```js
select col.owner as schema_name,
        col.table_name, 
        col.column_name, 
        col.column_id, 
        col.data_type, 
        col.nullable is_nullable, 
        col.data_default column_default, 
        case when col.data_type in('VARCHAR', 'VARCHAR2') then col.data_length else NULL end as max_length,
        col.data_precision precision,
        case when d.name is not null then 1 else 0 end as is_identity
   from sys.all_tab_columns col
  inner join sys.all_tables t on col.owner = t.owner and col.table_name = t.table_name
   left join sys.all_trigger_cols tr on tr.table_owner = col.owner and tr.table_name = col.table_name and tr.column_name = col.column_name
   left join sys.all_dependencies d on d.name = tr.trigger_name and d.referenced_type = 'SEQUENCE' and d.type = 'TRIGGER'
  where t.owner = :schema                       
  order by col.owner, col.table_name, col.column_id
```

### Retrieve Primary Keys BY Schema
```js
 select all_constraints.constraint_name,
        all_cons_columns.table_name, 
        LISTAGG(all_cons_columns.column_name, ', ') WITHIN GROUP (ORDER BY all_cons_columns.position) columns
   from all_constraints, all_cons_columns 
  where all_constraints.constraint_type = 'P'
    and all_constraints.constraint_name = all_cons_columns.constraint_name
    and all_constraints.owner = all_cons_columns.owner
    and all_cons_columns.owner = :schema
  group by all_constraints.constraint_name, all_cons_columns.table_name
  order by all_cons_columns.table_name
```

### Retrieve Foreign Keys BY Schema
```js
 select a_col.constraint_name constraint_name,
        a_col.table_name foreign_table,       
        c_col.table_name primary_table,
        LISTAGG(a_col.column_name, ', ') WITHIN GROUP (ORDER BY a_col.position) fk_columns,
        LISTAGG(c_col.column_name, ', ') WITHIN GROUP (ORDER BY c_col.position) pk_columns
   from all_cons_columns a_col
   join all_constraints c ON a_col.owner = c.owner AND a_col.constraint_name = c.constraint_name
   join all_cons_columns c_col ON c_col.owner = c.owner AND c_col.constraint_name = c.r_constraint_name and a_col.position = c_col.position
  where c.constraint_type = 'R' and c.owner = :schema
  group by a_col.constraint_name, c_col.constraint_name, a_col.table_name, c_col.table_name
```

### Sample Error Object
```js
{ 
  [Error: ORA-00942: table or view does not exist],
  errorNum: 942, 
  offset: 18
}
```