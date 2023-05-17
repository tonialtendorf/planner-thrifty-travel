const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    skills: [String]!
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!                                                                # Query to get profiles
    profile(profileId: ID!): Profile                                                    # Query to get single profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    # me: Profile
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Profile                # Mutation to add profile
    login(email: String!, password: String!): Profile                                    # Mutation to login

    # addTrip(profileId: ID!, trip: String!): Profile                                    # Mutation to add trip
    # removeProfile: Profile                                                             # Mutation to remove profile
    # removeTrip(trip: String!): Profile                                                 # Mutation to remove trip
  }
`;

module.exports = typeDefs;