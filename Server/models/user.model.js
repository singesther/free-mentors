import bcrypt from 'bcrypt';
const users = [
    {
        id: 1,
        firstName: 'diane',
        lastName: 'kaly',
        email: 'diane@gmail.com',
        password: bcrypt.hashSync('Kigali', 10),
        address: 'kigali',
        bio: 'jbfjdbg',
        occupation: 'nurse',
        expertise: 'doctor',
        isAdmin: false

    },
    {
        id: 2,
        firstName: 'diane',
        lastName: 'kaly',
        email: 'dodo@gmail.com',
        password:  bcrypt.hashSync('kigali', 10),
        address: 'kigali',
        bio: 'hbgf',
        occupation: 'nurse',
        expertise: 'doctor',
        isAdmin: true
    }
]
export default users;