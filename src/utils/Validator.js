import MESSAGE from "../constants/Message.js";

class Validator {
  static checkIsEmpty(input) {
    if (input === null || input.trim().length === 0 || input === undefined) {
      throw new Error(MESSAGE.ERROR.IS_EMPTY);
    }
  }

  static checkThousandMultiple(number) {
    if (number % 1000 !== 0) {
      throw new Error(MESSAGE.ERROR.NOT_THOUSAND);
    }
  }

  static checkIsNumber(string) {
    if (isNaN(Number(string))) {
      throw new Error(MESSAGE.ERROR.NOT_NUMBER);
    }
  }

  static checkNaturalNumber(number) {
    if (number <= 0 || !Number.isInteger(number)) {
      throw new Error(MESSAGE.ERROR.NOT_NATURAL_NUMBER);
    }
  }
}

export default Validator;
