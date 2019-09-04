import users from '../models/user.model';
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
                token: token,
                data: {
                    firstName: newUser.firstName,
                    lastName: newUser.lastName,
                    email: newUser.email,
                    address: newUser.address,
                    bio: newUser.bio,
                    occupation: newUser.occupation,
                    expertise: newUser.expertise,



                }
            });
            }
          }
        }
//            

export default UserController;