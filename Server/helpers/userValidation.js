import Joi from 'joi';


// signup
const validateUserSignup = {

  validation(newUser) {
    const newUserSchema = {
      email: Joi.string().email({ minDomainAtoms: 2 }).trim().required(),
      firstName: Joi.string().min(3).trim().required(),
      lastName: Joi.string().min(3).trim().required(),
      password: Joi.string().min(6).max(12).trim().required(),
      address: Joi.string().trim().required(),
      bio: Joi.string().required(),
      expertise: Joi.string().required(),
      occupation: Joi.string().required(),
    };
    return Joi.validate(newUser, newUserSchema);
  },
  validation(newSession) {
    const newSessionSchema = {
      mentorId: Joi.number().required(),
      questions: Joi.string().trim().required(),
      
    };
    return Joi.validate( newSession, newSessionSchema);
  },

};

export default validateUserSignup;
