# Local

[README.local.md](README.local.md)

# Remote

[README.remote.md](README.remote.md)

# Troubleshooting

## SQL_REQUIRE_PRIMARY_KEY

```shell
SQLSTATE[HY000]: General error: 3750 Unable to create or change a table wit
  hout a primary key, when the system variable 'sql_require_primary_key' is s
  et. Add a primary key to the table or unset this variable to avoid this mes
  sage. Note that tables without a primary key can cause performance problems
   in row-based replication, so please consult your DBA before changing this
  setting. (Connection: mysql, SQL: create table `password_reset_tokens` (`em
  ail` varchar(255) not null, `token` varchar(255) not null, `created_at` tim
  estamp null) default character set utf8mb4 collate 'utf8mb4_unicode_ci')
```
