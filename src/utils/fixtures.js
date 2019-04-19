const fs = require('fs')
const userGenerator = require('./generators/users')

// const random = (min, max) => Math.round(Math.random() * (max - min) + min)

const users = []

for (let i = 1; i < 51; i++) {
  users.push(userGenerator(i))
}

const userContent = JSON.stringify(users, null, 2)

fs.writeFileSync('./src/fixtures/users-fixture.json', userContent)
