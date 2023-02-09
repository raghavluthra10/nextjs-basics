import { createYoga, createSchema } from "graphql-yoga";
import data from "../../../data";

const typeDefs = /* GraphQL */ `
  type Query {
    users: [User!]!
    hello: String
    user(id: Int!): User
  }
  type User {
    userId: Int
    id: ID
    title: String
    completed: Boolean
  }
`;

const resolvers = {
  Query: {
    hello() {
      return "hello graphql!";
    },
    users() {
      return data;
    },
    user(parent, args) {
      const { id } = args;
      return data.find((user) => (user.id = id));
    },
  },
};

const schema = createSchema({
  typeDefs,
  resolvers,
});

export default createYoga({
  schema,
  graphqlEndpoint: "/api/graphql",
});
