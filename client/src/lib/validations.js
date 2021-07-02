const validateName = (name) => name.length >= 2;
const validateVorname = (vorname) => vorname.length >= 2;
const validateEmail = (email) =>
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    email
  );

const validateUser = (user) =>
  validateName(user.name) &&
  validateEmail(user.email) &&
  validateVorname(user.vorname);

export default validateUser;
