import http from "http";

import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
  gql,
} from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import express from "express";

const startApolloServer = async () => {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs: gql(`
      type Query {
        hello: String
        getAllUsers: [User]
        }
        
        type User {
          id: ID!
          name: String!
        }`),
    resolvers: {
      Query: {
        hello: () => "Hello world!",
        getAllUsers: () => [
          { id: 1, name: "John" },
          { id: 2, name: "Jane" },
        ],
      },
    },
    csrfPrevention: true,
    cache: "bounded",
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });
  await server.start();
  server.applyMiddleware({ app });
  await new Promise<void>(resolve => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
};

startApolloServer();
