import { createYoga, createSchema } from "graphql-yoga";
import data from "../../../data";

const typeDefs = /* GraphQL */ `
  type Query {
    users: [User!]!
    hello: String
    user(id: Int!): User
  }

  type Mutation {
    addUser(input: AddUserInput): User
  }

  input AddUserInput {
    title: String
    completed: Boolean
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
    user(parent, args, context) {
      console.log("context =>", context);
      const { id } = args;
      return data.find((user) => (user.id = id));
    },
  },
  Mutation: {
    addUser(parent, args) {
      const { input } = args;
      const id = new Date().getTime();
      const userToBeAdded = new Object();

      userToBeAdded.id = new Date().getUTCMilliseconds();
      userToBeAdded.title = input.title;
      userToBeAdded.completed = input.completed;
      userToBeAdded.userId = new Date().getUTCMilliseconds() + 1;

      data.push(userToBeAdded);
      return userToBeAdded;
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
