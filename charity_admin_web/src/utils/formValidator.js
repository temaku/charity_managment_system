/* eslint-disable no-useless-escape */
const formValidator = {
  validatePhoneNumber(phone) {
    let pattern = new RegExp(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g);
    var digits = phone.replace(/\D/g, "");
    return pattern.test(digits);
  },
  validateName(name) {
    let pattern = new RegExp(/^[a-zA-Z\-]+$/);
    return pattern.test(name);
  },
  validateEmail(email) {
    let pattern = new RegExp(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    return pattern.test(email.trim());
  },
  validateAccountNumber(number) {
    // let pattern = new RegExp(/^ [0 - 9]{ 7, 14}$/g)
    // return pattern.test(number)
    return !isNaN(number);
  },
  validateBirthdate(date) {
    let pattern = new RegExp(
      /^([0]?[1-9]|[1][0-2])[./-]([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0-9]{4})$/
    );
    return pattern.test(date);
  },
  validateAmount(amount) {
    let pattern = new RegExp(/^-?\d+\.?\d*$/);
    return pattern.test(amount);
  },
  validatePassword(password) {
    let pattern = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\\\$%\\\\^&\\\\*])(?=.{8,})"
    );
    return pattern.test(password);
    // return password.length < 8 ? false : true;
  },
  validateCity(city) {
    return city.length < 2 ? false : true;
  },
  validateState(state) {
    return state.length < 2 ? false : true;
  },
  validateStreet(street) {
    let pattern = new RegExp(/(^[a-zA-Z ]*)?(^[0-9 ]+[ a-zA-Z]+)*$/);
    return pattern.test(street);
  },
  validateZipcode(zipcode) {
    let pattern = new RegExp(/(^\d{5}$)|(^\d{5}-\d{4}$)/);
    return pattern.test(zipcode);
  },
  validateSSN(ssn) {
    // let pattern = new RegExp(/^\d{3}-?\d{2}-?\d{4}$/)
    let pattern = new RegExp(
      /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/
    );
    return pattern.test(ssn);
  } ,
  validateNameWithSpaces(name) {
    let pattern = new RegExp(/^[a-zA-Z].*[\s\.]*$/g);
    return pattern.test(name);
  }
};
export default formValidator;
