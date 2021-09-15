#!/bin/sh
# wait-for-postgres.sh
pwd

ls 

set -e

host="$1"
shift

until PGPASSWORD=$PGPASSWORD ./psql -h "$host" -U $PGUSER -c '\q'; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done

>&2 echo "Postgres is up - executing command"
exec "$@"