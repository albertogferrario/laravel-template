```shell
cp example.env .env
```

```shell
docker secret create apps_env ../../../.env
```

```shell
export $(grep -v '^#' .env | xargs) && \
docker \
  stack deploy \
      -c app.yml \
      -c maria.yml \
      -c pma.remote.yml \
      -c queue.yml \
      -c schedule.yml \
      -c webserver.remote.yml \
    apps
```

# (optional) DB

## Maria

```shell
export $(grep -v '^#' .env | xargs) && \
docker stack deploy -c maria.yml apps
```

## (optional) PMA

```shell
export $(grep -v '^#' .env | xargs) && \
docker stack deploy -c pma.remote.yml apps
```

# App

```shell
export $(grep -v '^#' .env | xargs) && \
docker stack deploy -c app.yml apps
```

# (optional) Queue worker

```shell
export $(grep -v '^#' .env | xargs) && \
docker stack deploy -c queue.yml apps
```

# (optional) Schedule runner

```shell
export $(grep -v '^#' .env | xargs) && \
docker stack deploy -c schedule.yml apps
```

# Webserver

```shell
export $(grep -v '^#' .env | xargs) && \
docker stack deploy -c webserver.remote.yml apps
```

```shell
docker secret rm apps_env && \
docker secret create apps_env ../../../.env
```

```shell
docker stack rm apps
```
