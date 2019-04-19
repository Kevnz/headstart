const users = require('../fixtures/users-fixture.json')

exports.seed = function(knex, Promise) {
  const dbReadyUsers = users.map(u => {
    const hashed = u.hashedPassword
    u.password = hashed
    delete u.hashedPassword
    return u
  })
  // Deletes ALL existing entries

  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert(dbReadyUsers)
    })
    .then(() => {
      return knex.schema.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1000')
    })
}
