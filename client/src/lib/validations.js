const validateName = (name) => name.length >= 2;
const validateVorname = (vorname) => vorname.length >= 2;
const validateEmail = (email) => email.includes('@');

const validateUser = (user) =>
  validateName(user.name) &&
  validateEmail(user.email) &&
  validateVorname(user.vorname);

export default validateUser;
