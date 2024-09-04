const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLList, GraphQLID } = require('graphql');
const { UserType, users, userById, createUser, updateUser, deleteUser } = require('./resolver');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return userById(args.id);
      }
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return users();
      }
    }
  }
});

// Define mutations
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString }
      },
      resolve(parent, args) {
        return createUser(args.name, args.email);
      }
    },
    updateUser: {
      type: UserType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString }
      },
      resolve(parent, args) {
        return updateUser(args.id, args.name, args.email);
      }
    },
    deleteUser: {
      type: UserType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        return deleteUser(args.id);
      }
    }
  }
});

// Export the schema
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
