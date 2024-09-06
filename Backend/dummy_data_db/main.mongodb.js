import express from "express";
import mongoose from "mongoose";
import Employee from "./models/Employee.js";
// const express = require('express')

const app = express();
const port = 3000;

await mongoose.connect("mongodb://127.0.0.1:27017/Company");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { foo: "FOO" });
});

app.get("/genetate", async (req, res) => {

  for (let index = 0; index < 10; index++) {
    let e = await Employee.create({
      name: "Ubaid",
      salary: 200010,
      language: "String",
      city: "Islamabad",
      isManager: "true",
    });
    // console.log(e);
    await e.save();
  }

  res.render("index", { foo: "FOO" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
