import { GraphQLServer } from 'graphql-yoga';
import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';
import prisma from './prisma';

function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
      Mutation,
      Query,
    },
    resolverValidationOptions: {
      // if you are interested what this does -> https://github.com/prisma/prisma/issues/2225
      requireResolversForResolveType: false,
    },
    context: req => ({ ...req, prisma }),
  });
}

export default createServer;
