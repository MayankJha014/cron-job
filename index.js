const express = require("express");

const app = express();

const PORT = 3000;
app.use(express.json());

app.get("/hello", (req, res) => {
  try {
    console.log("Hellos is Working!");
    return res.status(200).json({ message: "Hello! your job is Executed" });
  } catch (error) {}
  return res
    .status(400)
    .json({ message: "Your job doesn't executed successfully!" });
});

app.listen(PORT, () => {
  console.log(`Sever is running on ${PORT}`);
});
