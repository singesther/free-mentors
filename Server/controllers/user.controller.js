import users from '../models/user.model';
import mentors from '../models/mentor.model';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

dotenv.config();

class UserController {
    static signup(req, res) {
        const isUserExist = users.find(s => s.email === req.body.email);

        if (isUserExist) {
            return res.status(409).json({
                status: 409,
                message: "user already exist"
            });
        }
        else {
            const password = bcrypt.hashSync(req.body.password, 10);
            // console.log(req.body.password);
            const newUser = {
                id: users.length + 1,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: password,
                address: req.body.address,
                bio: req.body.bio,
                occupation: req.body.occupation,
                expertise: req.body.expertise,
            };

            users.push(newUser);

            const token = jwt.sign({
                userId: newUser.userId,
                email: newUser.email,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                bio: newUser.bio,
                occupation: newUser.occupation,
                expertise: newUser.expertise,
            }, process.env.secret);
            res.status(201).json({
                status: 201,
                message: "User created successfully",

                data: {
                    token: token,
                    message: "User created successfully",
                    firstName: newUser.firstName,
                    lastName: newUser.lastName,
                    email: newUser.email,
                    address: newUser.address,
                    bio: newUser.bio,
                    occupation: newUser.occupation,
                    expertise: newUser.expertise,



                }
            });

            static signin(req, res) {
                const isUserExist = users.find(u => user.email === req.body.email);
                const isMentor = mentors.find(u => u.email === req.body.email);
            
                if (!isUserExist && !isMentor) {
                  return res.status(401).json({
                    status: 401,
                    message: "Email not exists"
                  });
                }
                if (isUserExist) {
                  const password = bcrypt.compareSync(req.body.password, isUserExist.password);
                  if (!password) {
                    return res.status(401).json({
                      status: 401,
                      message: "Password not exists"
                    });
                  }
                  let token = jwt.sign({
                    userId: isUserExist.userId,
                    email: isUserExist.email,
                    isAdmin: isUserExist.isAdmin
                  }, process.env.secretKey, { expiresIn: '28d' });
                  res.status(200).json({
                    status: 200,
                    message: "User is succefully logged in",
                    data: { token }
                  });
                } else {
                  const password = bcrypt.compareSync(req.body.password, isMentor.password);
                  if (!password) {
                    return res.status(401).json({
                      status: 401,
                      message: "Password not exists"
                    });
                  }
                  let token = jwt.sign({
                    userId: isMentor.userId,
                    email: isMentor.email,
                    isAdmin: isMentor.isAdmin
                  }, process.env.secretKey, { expiresIn: '28d' });
                  res.status(200).json({
                    status: 200,
                    message: "User is succefully logged in",
                    data: { token }
                  });
                }
            
              }
            }
            
//            

export default UserController;