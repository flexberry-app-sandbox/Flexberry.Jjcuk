docker build --no-cache -f SQL\Dockerfile.PostgreSql -t jjcuk/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t jjcuk/app ../..
