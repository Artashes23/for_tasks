class testData {
  loginData = 
  {
    invalidUsername: 'anything',
    invalidPswd: 'wrong',
    username:'standard_user',
    password:'secret_sauce',
    logineErrMsg: 'Epic sadface: Username and password do not match any user in this service',
    lockedAccountErr: 'Epic sadface: Sorry, this user has been locked out.',
    lockedUsername: 'locked_out_user'
  }

  mainData = 
  {
    baseUrl: 'https://www.saucedemo.com/v1/index.html',
    urlAfterLogin: 'saucedemo.com/v1/inventory.html'
  }
};

module.exports = new testData