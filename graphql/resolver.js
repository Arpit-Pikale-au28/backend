const { User } = require('../models/');

const { GraphQLObjectType, GraphQLString, GraphQLID } = require('graphql');

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString }
  })
});

// Resolver functions
const users = () => User.findAll();

const userById = (id) => User.findByPk(id);

const createUser = (name, email) => User.create({ name, email });

const updateUser = (id, name, email) => {
  return User.findByPk(id).then(user => {
    if (!user) return null;
    return user.update({ name, email });
  });
};

const deleteUser = (id) => {
  return User.findByPk(id).then(user => {
    if (!user) return null;
    return user.destroy().then(() => user);
  });
};

module.exports = {
  UserType,
  users,
  userById,
  createUser,
  updateUser,
  deleteUser
};
