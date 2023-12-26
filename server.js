const mongoose = require("mongoose");

const app = require("./app");

mongoose
  .connect(
    "mongodb+srv://Oleksandr:JEFVX9RldbH142HF@cluster0.sbsa9va.mongodb.net/db-contacts?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(3000);
    console.log("Database connection successful");
  })
  .catch((error) => {
    process.exit(1);
  });
