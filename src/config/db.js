const mongoose = require('mongoose');

mongoose.set('strict', false);
mongoose.set('strictQuery', false);
mongoose.set('strictPopulate', false);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('$ Connected to DB.\n');
  })
  .catch((err) => {
    console.error('$ Error connecting to DB.', err);
    process.exit(1);
  });
