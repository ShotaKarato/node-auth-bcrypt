const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());
// routes
app.use("/signup", require("./routes/signup"));
app.use("/login", require("./routes/login"));

app.listen(port, () => {
  console.log(`🚀 Server is running on ${port}`);
});
