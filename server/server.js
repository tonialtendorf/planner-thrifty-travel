const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

const { typeDefs, resolvers } = require('./schemas');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
})