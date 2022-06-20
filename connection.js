const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
  `mongodb+srv://rubi:rubi@cluster0.264g2.mongodb.net/muruntauq`,
  () => {
    console.log("connected to mongodb");
  }
);

///mongodb+srv://rubi:rubi@cluster0.264g2.mongodb.net/muruntauq`
