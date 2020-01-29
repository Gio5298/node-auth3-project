const db = require('../data/db-config')

module.exports = {
    add, 
    find,
    findBy,
    findById
}

function add(user) {
    const [id] = await db('users').insert(user);

    return findById(id)
}

function find() {
    return db('users').where(filter)
}

function findBy() {
    return db('users').where(filter);
}

function findById() {
    return db('users')
    .where({ id })
    .first();
}
