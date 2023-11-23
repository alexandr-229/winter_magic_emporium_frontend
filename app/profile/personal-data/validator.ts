export class Validator {
  static validateName(name: string) {
    return !!name.length;
  }

  static validateLastName(lastName: string) {
    return !!lastName.length;
  }

  static validatePhone(phone: string) {
    const numbers = phone
      .replace('(', '')
      .replace(')', '')
      .replace('+', '')
      .split(' ')
      .join('');

    const result = !Number.isNaN(+numbers);

    return result;
  }

  static validateEmail(email: string) {
    const result = /^\S+@\S+\.\S+$/.test(email);

    return result;
  }
}
