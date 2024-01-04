const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors middleware

const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const formData = [];

app.post("/api/form", (req, res) => {
  const data = req.body;
  formData.push(data);
  res.json({ message: "Data formulir berhasil disimpan" });
});

app.get("/api/form", (req, res) => {
  res.json(formData);
});
app.get("/", (req, res) => {
  res.send("This is Root Server");
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
