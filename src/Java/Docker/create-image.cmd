docker build --no-cache -f SQL\Dockerfile.PostgreSql -t jjcuk-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t jjcuk-java/app ../../..
