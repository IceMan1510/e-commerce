const UserModel = require("../../Models/users");

const seedAdminUser = new UserModel({
    firstname: 'Admin',
    middlename: '',
    lastname: 'User',
    username: 'Admin',
    email: 'Admin@indx.ai',
    password: 'Indx@123', 
    contact_number: '+123456789012',
    del: '0',
    role: 'Admin',
    avatar: 'https://cdn.britannica.com/97/1597-050-008F30FA/Flag-India.jpg?w=400&h=235&c=crop',
    created_by: 'admin',
  });
  
  adminUser.save()
    .then((savedUser) => {
      console.log('Sample user created:', savedUser);
    })
    .catch((error) => {
      console.error('Error creating sample user:', error);
    })

    module.exports = seedAdminUser;