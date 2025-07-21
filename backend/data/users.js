import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Jhon Doe",
    email: "jhoedoe@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Alicia olivia",
    email: "oli@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;