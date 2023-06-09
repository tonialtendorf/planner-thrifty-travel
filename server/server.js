const path = require('path');
const express = require('express');
const { authMiddleware } = require('./utils/auth');
const jwt = require('jsonwebtoken')

// Imports ApolloServer from apollo-server-express
const { ApolloServer } = require('apollo-server-express');

// Imports the database connection
const db = require('./config/connection');


// Imports GraphQL schemas and resolvers
const { typeDefs, resolvers } = require('./schemas');

// Sets up the PORT
const PORT = process.env.PORT || 3001;

// Initializes an Express application
const app = express();

// Creates a new ApolloServer
const server = new ApolloServer({

  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const startApolloServer = async () => {

  await server.start();                                           // Start the ApolloServer
  server.applyMiddleware({ app });                                // Express middleware to ApolloServer

  db.once('open', () => {                                         // Start the database and server
    console.log(`Database running`);
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    })
  })
};

// Call function to start the server
startApolloServer()


