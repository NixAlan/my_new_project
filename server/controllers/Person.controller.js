const { response, request } = require("express");
const { model } = require("mongoose");
const Person = require("../models/person.model");
// module.exports.index = (req, res) => {
//   res.json({
//     message: "hellow World",
//   });
// };

module.exports.findAllPeople = (req, res) => {
  Person.find()
    .then((allPeople) => {
      console.log(allPeople);
      // console.log(allpeople.data);
      res.json(allPeople);
    })
    .catch((err) => {
      console.log("Somthing went wrong in findall");
      res.json({ message: "something went wrong in findall", error: err });
    });
};

module.exports.createPerson = (req, res) => {
  Person.create(req.body)
    .then((person) => res.json(person))
    .catch((err) => res.json(err));
};

module.exports.getPerson = (req, res) => {
  Person.findOne({ _id: req.params.id })
    .then((person) => res.json(person))
    .catch((err) => res.json(err));
};
