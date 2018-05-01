const mongoose = require("mongoose");
const Mockgoose = require('mockgoose').Mockgoose;
const mockgoose = new Mockgoose(mongoose);

const User = require('../models/user_model');
const helpers = require('../helpers/app_helpers');

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

chai.use(chaiHttp);

describe('Users', () => {
  before(() => {
    mockgoose.prepareStorage().then(() => {
      mongoose.connect(process.env.DB_HOST);
    });
  });
  describe('/POST User', () => {
    it('it should POST a user', (done) => {
      let user = {
        authID: "1",
        username: "username",
        email: "email",
        roles: ["role_1, role_2"],
        picture: "picture"
      }
      chai.request(server)
        .post('/api/users').send(user).end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property("message").eql("User successfully added!");
          res.body.user.should.have.property('authID').eql("1");
          res.body.user.should.have.property('username').eql("username");
          res.body.user.should.have.property('email').eql("email");
          res.body.user.should.have.property('roles').eql(["role_1, role_2"]);
          res.body.user.should.have.property('picture');
          res.body.user.should.have.property('created_date');
          res.body.user.should.have.property('updated_date');
          done(err);
        });
    });
    it('it should not POST a user without required fields', (done) => {
      let user = {
        authID: "2",
      }
      chai.request(server)
        .post('/api/users').send(user).end((err, res) => {
          res.should.have.status(422);
          err.response.body.should.be.a('object');
          err.response.body.should.have.property("error").eql("Email is required. Username is required.");
          done();
        });
    });
    it('it should not POST a user with duplicate unique fields', (done) => {
      let user = {
        authID: "3",
        email: "email_address",
        username: "username"
      }
      chai.request(server)
        .post('/api/users').send(user).end((err, res) => {
          res.should.have.status(422);
          err.response.body.should.be.a('object');
          res.body.should.have.property("error").eql("Username already exists.");
          done();
        });
    });
  });
  describe('/GET Users', () => {
    afterEach('delete existing users', () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          chai.request(server)
            .delete('/api/user/1').end((err, res) => {
              resolve(err);
            });
        }, 200);
      });
    });
    it('it should GET all users', (done) => {
      chai.request(server)
        .get('/api/users').end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property("message").eql("Users successfully retrieved!")
          res.body.users.should.be.a("array");
          res.body.users.length.should.be.eql(1);
          res.body.users[0].should.have.property("authID").eql("1");
          done(err);
        });
    });
    it('it should not GET users when none exist', (done) => {
      chai.request(server)
        .get('/api/users').end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property("message").eql("No Users found.")
          done(err);
        });
    });
  });
  describe('/GET:user User', () => {
    before('add user', (done) => {
      let user = {
        authID: "1",
        username: "username",
        email: "email"
      }
      chai.request(server)
        .post('/api/users').send(user).end((err, res) => {
          done(err);
        });
    });
    it('it should GET user by authID', (done) => {
      chai.request(server)
        .get('/api/user/1').end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property("message").eql("User successfully retrieved!")
          res.body.user.should.have.property("authID").eql("1");
          done(err);
        });
    });
    it('it should GET user by username', (done) => {
      chai.request(server)
        .get('/api/user/username').end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property("message").eql("User successfully retrieved!")
          res.body.user.should.have.property("username").eql("username");
          done(err);
        });
    });
    it('it should not GET user that does not exist', (done) => {
      chai.request(server)
        .get('/api/user/8').end((err, res) => {
          err.response.should.have.status(404);
          err.response.body.should.have.property("error").eql("User does not exist.")
          done();
        });
    });
  });
  describe('/PUT:user User', () => {
    it('it should UPDATE user by authID', (done) => {
      chai.request(server)
        .put('/api/user/1').send({ "username": "new_username" }).end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property("message").eql("User successfully updated!")
          res.body.user.should.have.property("username").eql("new_username");
          done(err);
        });
    });
    it('it should UPDATE user by username', (done) => {
      chai.request(server)
        .put('/api/user/new_username').send({ "username": "username" }).end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property("message").eql("User successfully updated!")
          res.body.user.should.have.property("username").eql("username");
          done(err);
        });
    });
    it('it should not UPDATE user that does not exist', (done) => {
      chai.request(server)
        .put('/api/user/empty').send({ "username": "username" }).end((err, res) => {
          err.response.should.have.status(404);
          err.response.body.should.have.property("error").eql("User does not exist.")
          done();
        });
    });
  });
  describe('/DELETE:user User', () => {
    before('add user', (done) => {
      let user = {
        authID: "5",
        username: "new_username",
        email: "new_email"
      }
      chai.request(server)
        .post('/api/users').send(user).end((err, res) => {
          done(err);
        });
    });
    it('it should DELETE user by authID', (done) => {
      chai.request(server)
        .delete('/api/user/1').end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property("message").eql("User successfully deleted!")
          done(err);
        });
    });
    it('it should DELETE user by username', (done) => {
      chai.request(server)
        .delete('/api/user/new_username').end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property("message").eql("User successfully deleted!")
          done(err);
        });
    });
    it('it should not DELETE user that does not exist', (done) => {
      chai.request(server)
        .delete('/api/user/empty').end((err, res) => {
          err.response.should.have.status(404);
          err.response.body.should.have.property("error").eql("User does not exist.")
          done();
        });
    });
  });
});