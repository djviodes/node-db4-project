module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/recipes.db3'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
  },
};
