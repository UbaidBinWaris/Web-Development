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
const get_random = (arr) =>{
  let rno = Math.floor(Math.random() * (arr.length - 1))
  return arr[rno];
}

app.get("/genetate", async (req, res) => {

  await Employee.deleteMany({}); // Clear all records before generating new ones

  let random_names = ["Haider" , "Afaq" ,"Salman" , "Jehabzeb"];
  let random_languages = ["Python", "JavaScript", "Java", "C++"];
  let random_salary = [10,20,25,4,21];
  let random_cities = ["Islamabad" , "Karachi" , "lahore" , "Quetta"];

  for (let index = 0; index < 50; index++) {
    let e = await Employee.create({
      name: get_random(random_names),
      salary: get_random(random_salary),
      language: get_random(random_languages),
      city: get_random(random_cities),
      isManager: (Math.random() > 0.5 )?true:false
    });
    console.log(e);
    await e.save();
  }

  res.render("index", { foo: "FOO" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
