/**
 * Create by DungTmc on 16/09/2021
 */

 const mongoose = require("mongoose");

//  async function connect() {
//    try {
//      await mongoose.connect("mongodb://localhost:27017/", {
//        useNewUrlParser: true,
//        useUnifiedTopology: true,
//      });
//      console.log("Connect successfully");
//    } catch (e) {
//      console.log(e);
//    }
//  }
 async function connect() {
  try {
    await mongoose.connect("mongodb+srv://anhnv:dung0401@sky-book.ua98syz.mongodb.net/?appName=sky-book", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect successfully");
  } catch (e) {
    console.log(e);
  }
}
 
 module.exports = { connect }