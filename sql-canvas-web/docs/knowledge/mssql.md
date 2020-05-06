---
id: mssql
title: Microsoft SQL Server
---

### Constants
```js
const IGNORE_SCHEMAS = `('information_schema', 'db_accessadmin', 'db_backupoperator', 'db_datareader' ,'db_datawriter', 'db_ddladmin', 'db_denydatareader', 'db_denydatawriter', 'db_owner', 'db_securityadmin', 'sys')`;
const RESERVED_KEYWORDS = ['ABSOLUTE', 'IS', 'ACTION', 'ISOLATION', 'ADA', 'JOIN', 'ADD', 'KEY', 'ALL', 'LANGUAGE', 'ALLOCATE', 'LAST', 'ALTER', 'LEADING', 'AND', 'LEFT', 'ANY', 'LEVEL', 'ARE', 'LIKE', 'AS', 'LOCAL', 'ASC', 'LOWER', 'ASSERTION', 'MATCH', 'AT', 'MAX', 'AUTHORIZATION', 'MIN', 'AVG', 'MINUTE', 'BEGIN', 'MODULE', 'BETWEEN', 'MONTH', 'BIT', 'NAMES', 'BIT_LENGTH', 'NATIONAL', 'BOTH', 'NATURAL', 'BY', 'NCHAR', 'CASCADE', 'NEXT', 'CASCADED', 'NO', 'CASE', 'NONE', 'CAST', 'NOT', 'CATALOG', 'NULL', 'CHAR', 'NULLIF', 'CHAR_LENGTH', 'NUMERIC', 'CHARACTER', 'OCTET_LENGTH', 'CHARACTER_LENGTH', 'OF', 'CHECK', 'ON', 'CLOSE', 'ONLY', 'COALESCE', 'OPEN', 'COLLATE', 'OPTION', 'COLLATION', 'OR', 'COLUMN', 'ORDER', 'COMMIT', 'OUTER', 'CONNECT', 'OUTPUT', 'CONNECTION', 'OVERLAPS', 'CONSTRAINT', 'PAD', 'CONSTRAINTS', 'PARTIAL', 'CONTINUE', 'PASCAL', 'CONVERT', 'POSITION', 'CORRESPONDING', 'PRECISION', 'COUNT', 'PREPARE', 'CREATE', 'PRESERVE', 'CROSS', 'PRIMARY', 'CURRENT', 'PRIOR', 'CURRENT_DATE', 'PRIVILEGES', 'CURRENT_TIME', 'PROCEDURE', 'CURRENT_TIMESTAMP', 'PUBLIC', 'CURRENT_USER', 'READ', 'CURSOR', 'REAL', 'DATE', 'REFERENCES', 'DAY', 'RELATIVE', 'DEALLOCATE', 'RESTRICT', 'DEC', 'REVOKE', 'DECIMAL', 'RIGHT', 'DECLARE', 'ROLLBACK', 'DEFAULT', 'ROWS', 'DEFERRABLE', 'SCHEMA', 'DEFERRED', 'SCROLL', 'DELETE', 'SECOND', 'DESC', 'SECTION', 'DESCRIBE', 'SELECT', 'DESCRIPTOR', 'SESSION', 'DIAGNOSTICS', 'SESSION_USER', 'DISCONNECT', 'SET', 'DISTINCT', 'SIZE', 'DOMAIN', 'SMALLINT', 'DOUBLE', 'SOME', 'DROP', 'SPACE', 'ELSE', 'SQL', 'END', 'SQLCA', 'END-EXEC', 'SQLCODE', 'ESCAPE', 'SQLERROR', 'EXCEPT', 'SQLSTATE', 'EXCEPTION', 'SQLWARNING', 'EXEC', 'SUBSTRING', 'EXECUTE', 'SUM', 'EXISTS', 'SYSTEM_USER', 'EXTERNAL', 'TABLE', 'EXTRACT', 'TEMPORARY', 'FALSE', 'THEN', 'FETCH', 'TIME', 'FIRST', 'TIMESTAMP', 'FLOAT', 'TIMEZONE_HOUR', 'FOR', 'TIMEZONE_MINUTE', 'FOREIGN', 'TO', 'FORTRAN', 'TRAILING', 'FOUND', 'TRANSACTION', 'FROM', 'TRANSLATE', 'FULL', 'TRANSLATION', 'GET', 'TRIM', 'GLOBAL', 'TRUE', 'GO', 'UNION', 'GOTO', 'UNIQUE', 'GRANT', 'UNKNOWN', 'GROUP', 'UPDATE', 'HAVING', 'UPPER', 'HOUR', 'USAGE', 'IDENTITY', 'USER', 'IMMEDIATE', 'USING', 'IN', 'VALUE', 'INCLUDE', 'VALUES', 'INDEX', 'VARCHAR', 'INDICATOR', 'VARYING', 'INITIALLY', 'VIEW', 'INNER', 'WHEN', 'INPUT', 'WHENEVER', 'INSENSITIVE', 'WHERE', 'INSERT', 'WITH', 'INT', 'WORK', 'INTEGER', 'WRITE', 'INTERSECT', 'YEAR', 'INTERVAL', 'ZONE', 'INTO'];
```

### Dummy Test Select
```js
 select 1 as test
```

### Retrieve User's Permissions
```js
 select dbname=db_name(db_id()), 
        p.name as username, 
        p.type_desc as typeOfLogin, 
        pp.name as permissionLevel, 
        pp.type_desc as typeOfRole 
   from sys.database_role_members roles 
   join sys.database_principals p ON roles.member_principal_id = p.principal_id
   join sys.database_principals pp ON roles.role_principal_id = pp.principal_id WHERE p.name = @p0
```

### Retrieve Schema List
```js
 select name as schema_name 
   from sys.schemas 
  where name not in ${IGNORE_SCHEMAS}
  order by name
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
        COLUMNPROPERTY(object_id(CONCAT(table_schema, '.', table_name)), COLUMN_NAME, 'IsIdentity') as is_identity,
        case when numeric_precision is not null then numeric_precision else character_maximum_length end as max_length,
        case when datetime_precision is not null then datetime_precision when numeric_scale is not null then numeric_scale else 0 end as 'precision'
   from information_schema.columns
  where table_schema = @p0
  order by schema_name, table_name, column_id
```

### Retrieve Primary Keys BY Schema
```js
 select schema_name(t.schema_id) as [schema_name],
        pk.[name] as pk_name,  
        t.[name] as table_name,
        STUFF((select ', ' + col.[name]
                 from sys.index_columns ic
                inner join sys.columns col on ic.object_id = col.object_id and ic.column_id = col.column_id
                where ic.object_id = t.object_id and ic.index_id = pk.index_id FOR XML PATH(''), TYPE
              ).value('.', 'NVARCHAR(MAX)'), 1, 2, '') as columns
   from sys.tables t 
  inner join sys.indexes pk on t.object_id = pk.object_id and pk.is_primary_key = 1
  where schema_name(t.schema_id) = @p0
```

### Retrieve Foreign Keys BY Schema
```js
 select schema_name(pk_tab.schema_id) schema_name,
        fk.name as constraint_name,
        fk_tab.name as foreign_table,       
        pk_tab.name as primary_table,
        fk_cols.constraint_column_id as no,
        STUFF((select ', ' + fk_col.[name]
                 from sys.columns fk_col
                where fk_col.column_id = fk_cols.parent_column_id and fk_col.object_id = fk_tab.object_id FOR XML PATH(''), TYPE
              ).value('.', 'NVARCHAR(MAX)'), 1, 2, '') as fk_columns,
        STUFF((select ', ' + pk_col.[name]
                 from sys.columns pk_col
                where pk_col.column_id = fk_cols.referenced_column_id and pk_col.object_id = pk_tab.object_id FOR XML PATH(''), TYPE
              ).value('.', 'NVARCHAR(MAX)'), 1, 2, '') as pk_columns
   from sys.foreign_keys fk
  inner join sys.tables fk_tab on fk_tab.object_id = fk.parent_object_id
  inner join sys.tables pk_tab on pk_tab.object_id = fk.referenced_object_id
  inner join sys.foreign_key_columns fk_cols on fk_cols.constraint_object_id = fk.object_id   
  where schema_name(pk_tab.schema_id) = @p0
  order by fk_tab.name, pk_tab.name, fk_cols.constraint_column_id
```

### Sample Error Object
```js
{ 
  code: 'EREQUEST',
  message: 'Invalid object name \'dbo.abc\'.', 
  name: 'RequestError', 
  number: 208, 
  lineNumber: 1, 
  state: 1, 
  class: 16, 
  serverName: 'default',
  procName: '', 
  precedingErrors: [] 
}
```