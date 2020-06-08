class User {
  static canSendMessage = true;
  name = 'Unknown';
  password = 'Password';

  constructor (name, password) {
    this.name = name;
    this.password = password;
  }

  sendMessage(msg) {
    console.log(msg);
  }
}

class SuperUser extends User {

  name;
  password;
  static createdUsers = [];
  createUsers;

  constructor (createUsers, createdUsers) {
    super(name, password);
    this.createUsers = createUsers;
    this.createdUsers = createdUsers;
  }

  getCreatedUsers() {
    return new SuperUser();
  }

  createUser(name, pass){
    createdUsers.push(createUsers);
    return new User();
  }
}


class Admin extends SuperUser {
  deleteUser() {
    delete createdUsers;
  }
}