const { cleanCollections, saveDocuments } = require('./db-functions');

try {
  require('../src/config/db');
} catch (err) {
  console.log(err);
}

const main = async () => {
  await cleanCollections();
  await saveDocuments();
};

main()
  .then(() => {
    console.log('\n$Script finished');
    process.exit();
  })
  .catch((err) => {
    console.log('Error running script.', err);
    process.exit(1);
  });
