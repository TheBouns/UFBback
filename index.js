const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const { MONGO_URI } = require("./config/keys");
const PORT = 3001;
app.use(cors());
app.use(express.json());
app.use("/unidad", require("./routes/unidades"));
app.use("/users", require("./routes/users"));
app.use("/actua", require("./routes/actua"));

mongoose
  .connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("conectado a mongoDB con éxito"))
  .catch((err) => console.error(err));

app.listen(PORT, console.log(`Server started on port ${PORT}`));
