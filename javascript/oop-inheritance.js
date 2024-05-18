class User {

  name;
  constructor() {
    console.log('I am in the user class')
  }

  // setName = (_name) => {
  //   this.name = _name;
  // }
  setName(_name) {
    this.name = _name;
  }
}

class Admin extends User{
  constructor() {
    super()
    console.log('I am in the admin class')
  }
  //supercall
  setName(_name) {
    super.setName(_name)
  }
}

const adminObj = new Admin();

console.log(adminObj)