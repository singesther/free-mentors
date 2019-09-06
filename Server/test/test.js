import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app";
import users from './mochaTests/mocha';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

chai.use(chaiHttp);
chai.should();


    const token = jwt.sign({
        userId: '1',
        email: 'jeannette@gmail.com',
        firstName:'jeannette',
        lastName: 'jeje',
        bio: 'bablabla',
        occupation: 'teaching',
        expertise: 'teach',
    }, process.env.secret);

    const token2 = jwt.sign({
        firstName: 'diane',
        lastName: 'kaly',
        email: 'dodo@gmail.com',
        password:  'kigali',
        address: 'kigali',
        bio: 'hbgf',
        occupation: 'nurse',
        expertise: 'doctor',
    }, process.env.secret);

    describe('signup',() => {
        it('user should signup', () => {
         chai
         .request(app)
         .post('/api/v1/auth/signup')
         .send(users[0])
         .end((err, res) => {
          res.should.have.status(201) 
          res.body.should.have.be.a('object')   
         });

        });
        it('user signup', () => {
            chai
            .request(app)
            .post('/api/v1/auth/signup')
            .send()
            .end((err, res) => {
             res.should.have.status(400) 
             res.body.should.have.be.a('object')   
            });
   
           });
    });

    describe('signin',() => {
        it('user should signin', () => {
         chai
         .request(app)
         .post('/api/v1/auth/signin')
         .send({
		
            "email": "diane@gmail.com",
              "password":"Kigali"
      })
         .end((err, res) => {
          res.should.have.status(200) 
          res.body.should.have.be.a('object')   
         });

        });

    });

    describe('get Mentors',() => {
        it('user should get all mentors', () => {
         chai
         .request(app)
         .get('/api/v1/mentors')

         .set('auth', token)
         .end((err, res) => {
          res.should.have.status(200) 
          res.body.should.have.be.a('object')   
         });

        });

    });
    describe('get specific Mentor',() => {
        it('user should get specific mentor', () => {
        const mentorId =1;
         chai.request(app)
         .get('/api/v1/mentors/1')
         .set('auth', token)
         .end((err, res) => {
          res.should.have.status(200) 
          res.body.should.have.be.a('object')   
         });

        });

    });
    describe('get sessions',() => {
        it('user should get session', () => {
         chai
         .request(app)
         .post('/api/v1/sessions')
         .send({
            "mentorId": 1,
            "questions": "what required to be a programmer?"  
    })
         .set('auth', token2)
         .end((err, res) => {
          res.should.have.status(200) 
          res.body.should.have.be.a('object')   
         });

        });

    });


