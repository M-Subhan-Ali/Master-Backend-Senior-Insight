export const getUsers = (req, res) => {
  res.json([{ id: 1, name: "Subhan" }]);
};

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  res.status(201).json({
    status: "success",
    message: "User created successfully",
    data: { name, email },
  });
};
