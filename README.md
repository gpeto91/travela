# How to startup

1. create an .env file inside `server/` folder
2. for test purposes, copy these lines inside your created `.env`:

```
DB_HOST=cluster0.8lb97.mongodb.net
DB_USER=admin
DB_PASS=root
DB_NAME=beeleads
```

3. run `yarn setup` to install every project's dependecies (both server and front)
4. `yarn dev` to start the development server
5. access `http://localhost:3000` (Front-end)
6. access `http://localhost:4000` (GraphQL Playground)

This project was made with ApolloServer + GraphQL + MongoDB for the server and React + NextJS for the front-end.
