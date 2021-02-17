const db = require("../data/dbConfig");

async function getUserId(id) {
  const userId = await db("users")
    .where("users.id", id)
    .select("fullname", "username", "email", "profile_image_url")
    .first();
  return userId;
}

const addUser = async (user) => {
  const newUser = await db("users")
    .insert(user)
    .returning("*")
    .then((data) => data[0]);
  return newUser;
};

async function getUserBy(userValue) {
  const userData = await db("users")
    .where(userValue)
    .first();
  return userData;
}

async function findBy(filter) {
  const user = await db("users")
    .where(filter)
    .first();

  return user;
}

async function createOrFindUser(newUser) {
  let user = await findBy({ email: newUser.email });

  if (!user) {
    user = await addUser(newUser);
    return user;
  }
  if (process.env.OAUTH_DEFAULT_PWD === user.password) {
    return user;
  }
}

const confirmEmail = async (id) => {
  const user = await db("users")
    .where({ id })
    .update({ verified: true }, "id")
    .then((ids) => {
      const userId = ids[0];
      return findBy({ id: userId });
    });
  return user;
};
/**
 * User Profile Models
 *
 * @returns
 */
async function getUsers() {
  const users = await db("users as u")
    .select(
      "u.id",
      "u.email",
      "u.username",
      "u.fullname",
      "u.profile_image_url"
    )
    .returning("*");
  return users;
}
async function getSingleUser(filter) {
  const singleUser = await db("users as u")
    .select(
      "u.id",
      "u.email",
      "u.middle_name",
      "u.fullname",
      "u.profile_image_url",
      "u.last_name",
      "u.address",
      "u.phone_number",
      "u.bank_name",
      "u.account_number",
      "u.bvn",
      "u.id_type",
      "u.id_number",
      "u.mothers_maiden",
      "u.dob",
      "u.occupation",
      "u.company_name",
      "u.company_address",
      "u.nationality",
      "u.next_of_kin",
      "u.address_of_next_of_kin",
      "u.phone_number_of_next_of_kin",
      "u.relationship"
    )
    .where(filter)
    .first();
  return singleUser;
}
const updateUser = async (changes, id) => {
  const user = await db("users")
    .where({ id })
    .update(changes)
    .returning([
      "fullname",
      "email",
      "profile_image_url",
      "middle_name",
      "last_name",
      "address",
      "phone_number",
      "bank_name",
      "account_number",
      "bvn",
      "id_type",
      "id_number",
      "mothers_maiden",
      "dob",
      "occupation",
      "company_name",
      "company_address",
      "nationality",
      "next_of_kin",
      "address_of_next_of_kin",
      "phone_number_of_next_of_kin",
      "relationship",
    ])
    .then((userUpdate) => userUpdate[0]);
  return user;
};

module.exports = {
  getUserId,
  addUser,
  getUserBy,
  findBy,
  createOrFindUser,
  getUsers,
  getSingleUser,
  updateUser,
  confirmEmail,
};
