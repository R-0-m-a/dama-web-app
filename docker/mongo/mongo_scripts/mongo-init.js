print('Start ###############################################################');

const dbUser = _getEnv('DB_USERNAME');
const dbPassword = _getEnv('DB_PASSWORD');
const dbName = _getEnv('DB_NAME');

db = db.getSiblingDB(dbName);
db.createUser(
    {
      user: dbUser,
      pwd: dbPassword,
      roles: [{ role: 'readWrite', db: dbName }],
    },
);

print('END #################################################################');