const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID!
    name: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    profile: Profile!  # Updated: Ensure profile field is of type Profile and non-nullable
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Profile
    login(email: String!, password: String!): Auth  # Updated: Ensure login mutation returns Auth type

    # Other mutations...
  }
`;

module.exports = typeDefs;
