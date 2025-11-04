export const createUser = (users) => (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const id = Math.floor(Math.random() * 100000);
  const newUser = { id, name, email, phone };
  users.push(newUser);

  res.status(201).json({ message: "User created successfully", user: newUser });
};

export const createNewUser = (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const id = Math.floor(Math.random() * 100000);
  const newUser = { id, name, email, phone };
  users.push(newUser);

  res.status(201).json({ message: "User created successfully", user: newUser });
};

export const getSingleUser = (users, someString) => (req, res) => {
  console.log("someString:", someString);
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user)
    return res
      .status(404)
      .json({ message: "User not found, please try again" });
  res.json({ data: user });
};

const normalFunction = (a, b) => {
  return a + b;
};
