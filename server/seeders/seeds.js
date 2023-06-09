const db = require('../config/connection');
const { Profile } = require('../models/Profile');
const profileSeeds = require('./profileSeeds.json');

db.once('open', async () => {
  try {
    await Profile.deleteMany({});
    await Profile.create(profileSeeds);

    console.log('done.');
    process.exit(0);
  }catch (err) {
    throw err;
  }
});