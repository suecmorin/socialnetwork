const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Add users to the collection and await the results
  await User.collection.insertOne({
    username: 'Aaran',
    email: 'aaran@gmail.com',
    thoughts: 'very cool', 
    thoughts: 'Happy Thanksgiving',
    friends: 'Abel', 
    friends: 'Blanca',
  });
  await User.collection.insertOne({
    username: 'Abel',
    email: 'abel@yahoo.com',
    thoughts: 'awesome', 
    friends: 'Aaran', 
    friends: 'Blanca',
  });
  await User.collection.insertOne({
    username: 'Blanca',
    email: 'blancaB@gmail.com',
    thoughts: 'great day',
    friends: 'Abel',
  });
  //add thoughts to the db
  await Thought.collection.insertOne({
    thoughtText: 'very cool',
    username: 'Aaran',
  });
  await Thought.collection.insertOne({
    thoughtText: 'Happy Thanksgiving',
    username: 'Aaran',
  });
  await Thought.collection.insertOne({
    thoughtText: 'Happy Thanksgiving',
    username: 'Aaran',
  });
    await Thought.collection.insertOne({
      thoughtText: 'awesome',
      username: 'Abel',
    });
    await Thought.collection.insertOne({
      thoughtText: 'great day',
      username: 'Blanca',
    });
  

  // Log out the seed data to indicate what should appear in the database
  console.table(user);
  console.table(thought);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
