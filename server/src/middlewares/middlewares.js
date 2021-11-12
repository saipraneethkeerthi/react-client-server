const validateEmail = (req, res, next) => {
  const emailAddress = req.body.email;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(emailAddress.match(regexEmail)){
    next()
  }
  else{
    res
       .status(415)
       .send("Email is Invalid")
    next("route")
  }
}

const checkUpperCase = (string) => /[A-Z]/.test(string);
const checkLowerCase = (string) => /[a-z]/.test(string);
const checkSymbol = (string) =>
  /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(string);
const checkNum = (string) => /\d/.test(string);


const validatePassword = (req, res, next) => {
  const password = req.body.password;
  if (
    password.length > 8 &&
    checkUpperCase(str) &&
    checkLowerCase(str) &&
    checkSymbol(str) &&
    checkNum(str)
  ) {
    next()
  } else {
    res
       .status(415)
       .send("Passowrd is not a valid password")
  }
}

module.exports ={
  validateEmail,
  validatePassword,
}