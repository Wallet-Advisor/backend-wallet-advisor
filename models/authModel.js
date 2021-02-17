const db = require("../data/dbConfig");

async function getSingleUser(filter) {
  const singleUser = await db('users as u')
    .select(
      'u.id',
      'u.email',
      'u.username',
      'u.fullname',
      'u.profile_image_url'
    )
    .where(filter)
    .first();
  return singleUser;
}

async function findBy(filter) {
  const user = await db("users")
    .where(filter)
    .first();

  return user;
}

const confirmEmail = async id => {
  const user = await db("users")
    .where({ id })
    .update({ verified: true }, "id")
    .then(ids => {
      const userId = ids[0];
      return findBy({ id: userId });
    });
  return user;
};

const createUser = async user => {
  const userCreated = await db("users")
    .insert(user)
    .returning("*")
    .then(data => data[0]);
  return userCreated;
};

const findUSer = async email => {
  const foundUser = await db("users")
    .where({ email })
    .first();
  return foundUser;
};

const updateUser = async (changes, id) => {
  const user = await db('users')
    .where({ id })
    .update(changes)
    .returning(['fullname', 'username', 'email', 'profile_image_url'])
    .then(userUpdate => userUpdate[0]);
  return user;
};


async function getUserBy(userValue) {
  const userData = await db("users")
    .where(userValue)
    .first();
  return userData;
}

module.exports = {
  createUser,
  findUSer,
  getSingleUser,
  updateUser,
  getUserBy,
  confirmEmail
};
