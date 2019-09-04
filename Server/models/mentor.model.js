import bcrypt from 'bcrypt';
const mentors = [
    {
      mentorId: 1,
      firstName: 'didy',
      lastName: 'Nadidi',
      email: 'kami@gmail.com',
      password: bcrypt.hashSync('Nadia', 10),
      address: 'Kigali',
      bio: 'Am techleader',
      occupation: 'web developer',
      expertise: 'developing web'
    },
    {
      mentorId: 2,
      firstName: 'Kamikazi',
      lastName: 'Nadia',
      email: 'wowe@gmail.com',
      password: bcrypt.hashSync('wowe', 10),
      address: 'Kigali',
      bio: 'Am teacher',
      occupation: 'teach',
      expertise: 'teach'
    }
  ];
  export default mentors;