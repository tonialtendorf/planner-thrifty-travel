const express = require('express')

const PORT = process.env.PORT || 3001;
const app = express

app.request(express.urlencoded({extended: false}));
app.request(express.json());

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
})