const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');
const { sequelize } = require('./models'); // Ensure sequelize is imported

const app = express();
const PORT = process.env.PORT || 4000;

// Sync the database
sequelize.sync().then(() => {
  console.log('Database synced');
}).catch(err => {
  console.error('Error syncing database:', err);
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true, // Set to false in production
}));

app.listen(PORT, () => {

  
});
