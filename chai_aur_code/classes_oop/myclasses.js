class user{
  constructor(username,email,password){
    this.username = username
    this.email = email
    this.password = password
  }

  encryptPassword(){
    return `${this.password}abc`
  }

}

const shub = new user("shubham","shubhamrout90@gmail.com","shubhbhawbhaw")

console.log(shub.encryptPassword());
