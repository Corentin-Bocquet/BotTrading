// backend/models/User.js
const db = require('../config/db');

const findUserByUsernameOrEmail = (identifier, callback) => {
  const sql = `SELECT * FROM users WHERE username = ? OR email = ?`;
  db.query(sql, [identifier, identifier], callback);
};

module.exports = {
  findUserByUsernameOrEmail,
};
