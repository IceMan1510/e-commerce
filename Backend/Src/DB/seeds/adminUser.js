const UserModel = require("../../Models/users");
  const adminUser = new UserModel({
    firstname: 'John',
    middlename: 'Doe',
    lastname: 'Smith',
    username: 'johnsmith',
    email: 'bankit1510@gmail.com',
    password: 'Ankit@123',
    primary_contact_number: '+123456789012',
    del: '0',
    role: 'Admin',
    avatar: 'https://cdn.britannica.com/97/1597-050-008F30FA/Flag-India.jpg?w=400&h=235&c=crop',
    created_by: 'Admin',
    last_updated_by: 'Admin',
    addresses: [
      {
        recipientName: 'John Doe',
        contact_Number: '+123456789012',
        flatOrHouseNumber: '123',
        areaOrColony: 'Example Colony',
        streetOrLane: 'Example Street',
        city: 'Example City',
        state: 'Example State',
        pin: '123456'
      },
      {
        recipientName: 'Jane Doe',
        contact_Number: '+123456789012',
        flatOrHouseNumber: '456',
        areaOrColony: 'Another Colony',
        streetOrLane: 'Another Street',
        city: 'Another City',
        state: 'Another State',
        pin: '654321'
      }
    ]
  });

  adminUser.save()
    .then((newUser) => {
      console.log('Sample user created:', newUser);
    })
    .catch((error) => {
      console.error('Error creating sample user:', error);
    })

    module.exports = adminUser;