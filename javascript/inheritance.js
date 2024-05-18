class user {
  name;
  email;
  address;

  getUserName = () => {
    return ( this.name );
  }
}

class Studnet extends User{
  role = 'student'
}

const std = new Studnet() // {anme, email, address, role: "studnet", getUserName: () => {}}

class Admin extends User {
  phone;
  role = 'admin'
}

const admin = new Admin() //{name, email, address, role: "admin", getUserName: () => {}}
admin.getUserName() // admin.name