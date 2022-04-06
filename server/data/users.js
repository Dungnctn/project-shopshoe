import bcryptjs from 'bcryptjs'
const users = [
    {
        name: "Admin",
        email: "Admin@gmail.com",
        password: bcryptjs.hashSync("123456", 10),
        isAdmin: true
    },
    {
        name: "Member",
        email: "Member@gmail.com",
        password: "123456",
    }
  ];
  
  export default users;
  