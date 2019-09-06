import bcrypt from 'bcrypt';
const users = [
    {

        firstName: 'diane',
        lastName: 'kaly',
        email: 'dianegghhjj@gmail.com',
        password: 'wowdfghjkl',
        address: 'kigali',
        bio: 'jbfjdbg',
        occupation: 'nurse',
        expertise: 'doctor'

    },
    {
        id: 2,
        firstName: 'diane',
        lastName: 'kaly',
        email: 'sing@gmail.com',
        password:  bcrypt.hashSync('kigali', 10),
        address: 'kigali',
        bio: 'hbgf',
        occupation: 'nurse',
        expertise: 'doctor',
        isAdmin: true
    }
]
export default users;