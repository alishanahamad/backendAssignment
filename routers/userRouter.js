const express = require('express');
const bodyParser = require('body-parser');
const userRouter = express.Router();

const Users = require('../models/user');

userRouter.use(bodyParser.json());

//** userDetail GET API, to get the list of users */
userRouter.route('/').get((req, res, next) => {
  console.info(`user details API get call`);
  Users.find({})
    .then((userDetails) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'applications/json');
      res.json(userDetails);
      console.info(`user get details API response: ${userDetails}`);
    }, (err) => next(err))
    .catch((err) => {
      console.error(`got an error while fetching the data: ${err}`)
    })
})

//** userDetail POST API, to add user */
userRouter.route('/').post((req, res, next) => {
  console.info(`User Save API call and request body ${req.body}`);
  Users.create(req.body)
    .then((userDetail) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(userDetail);
      console.info(`User added successfully: ${userDetail}`);
    }, (err) => next(err))
    .catch((err) => {
      console.error(`got an error while saving the user detail: ${err}`)
    })
})

//** userDetail:userId POST API, to update the user */
userRouter.route('/:userId')
  .post((req, res, next) => {
    Users.findByIdAndUpdate(req.params.userId, {
      $set: req.body
    }, { new: true })
      .then((user) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(user);
      }, (err) => next(err))
      .catch((err) => {
        console.error(`got an error while update user detail: ${err}`)
      })
  })

  //** userDetail:userId POST API, to update the user */
  .delete((req, res, next) => {
    Users.findByIdAndRemove(req.params.userId)
      .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
      }, (err) => next(err))
      .catch((err) => {
        console.error(`got an error while deleting user: ${err}`)
      })
  });

module.exports = userRouter;
