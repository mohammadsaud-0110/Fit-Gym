// userdata.js
const userData = [];

export const addUser = (user) => {
  userData.push(user);
};

export const getUserByEmail = (email) => {
  return userData.find((user) => user.email === email);
};

export default userData;
