function _getEnv(variable) {
  if (typeof getenv === "function") {
    return getenv(variable);
  }
  return process.env[variable];
}

var rootUser = _getEnv("MONGO_INITDB_ROOT_USERNAME");
var rootPwd = _getEnv("MONGO_INITDB_ROOT_PASSWORD");
var rootDb = db.getSiblingDB('admin');

if (db.system.users.find({ user: rootUser }).count() === 0) {
  db.createUser({
    user: rootUser,
    pwd: rootPwd,
    roles: [{ role: "root", db: rootDb }]
  });
}