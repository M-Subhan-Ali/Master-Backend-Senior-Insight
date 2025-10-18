export const getUsers = (req, res) => {
  res.json([{ id: 1, name: "Subhan" }]);
};

export const createUser = (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "Name required" });
  res.status(201).json({ id: Date.now(), name });
};
