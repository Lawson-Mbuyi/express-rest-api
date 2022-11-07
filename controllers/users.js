import { v4 as uuidv4 } from "uuid";

let users = [];

export const createUser = (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  res.send(`user with name ${user.firstname}added`);
};

export const getUsers = (req, res) => {
  res.send(users);
};

export const getUserById = (req, res) => {
  const { id } = req.params;
  const userData = users.find((user) => user.id == id);
  res.send(userData);
};
export const deleteUserById = (req, res) => {
  const { id } = req.params;
  const notDeletedUsers = users.filter((user) => user.id != id);
  res.send(notDeletedUsers);
};
export const updateUserById=(req, res) => {
    const { id } = req.params;
    const { firstname, email, password } = req.body;
    const user = users.find((user) => user.id === id);
    if (firstname) user.firstname = firstname;
    if (email) user.email = email;
    if (password) user.password = password;
    res.send(`user with the id ${id} has been changed`);
}