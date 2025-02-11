const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    email: String!
    name: String
    password: String!
    role: String
    key: String
  }

  type Query {
    users: [User]
    findUserByName(name: String!): User
    findUser(email: String!, password: String!): User!
    userByID(id: ID!): User!


   }

  type Mutation {
    addAdmin(
      name: String!
      email: String!
      password: String!
      role: String
      key: String
    ): User!

    signUp (
      name: String!
      email: String!
      password: String!
      role: String ="member"
      key: String
    ): User!

    deleteUser (email: String!, password: String!): Boolean!
  }
`;

/*
type Mutation {

*/
module.exports = typeDefs;
