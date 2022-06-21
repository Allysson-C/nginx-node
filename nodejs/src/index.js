const express = require('express');
const UserRepository = require('./repositories/UserRepository');
const app = express();

app.get('/', async (req, res) => {
  const userRepository = new UserRepository();
  const username = `Full Cycle - ${new Date().getTime()}`;

  await userRepository.create(username);

  const initialValue = '';
  let users = '';

  await userRepository.find().then(response => {
    users = response.reduce(
      (previousValue, currentValue) => 
        previousValue.concat(`<li>Id: ${currentValue.id} - Name: ${currentValue.name}</li>`),
        initialValue
    );
  }).catch(error => {
    users = '';
    throw error;
  });
  


  res.send(`
    <main>
      <h1>Full Cycle Rocks!</h1>
        ${users}
      <ul>
      </ul>
    </main>
  `)
})

app.listen(3000, () => {
  console.log('server listening on port 3000');
});