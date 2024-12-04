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

  static checkLottoRange(number) {
    if (number > 45 || number < 1) {
      throw new Error(
        "[ERROR] 입력된 숫자가 로또 범위가 아닙니다. 1부터 45까지 입력해주세요."
      );
    }
  }

  static checkFiveLength(array) {
    if (array.length !== 6) {
      throw new Error("[ERROR] 숫자를 6개 입력해주세요.");
    }
  }

  static checkSameNumber(input, inputArray) {
    const inputArrayCopy = [...inputArray];
    inputArrayCopy.push(input);
    const inputArrayCopySet = [...new Set(inputArrayCopy)];
    if (inputArray.length === inputArrayCopySet.length) {
      throw new Error("[ERROR] 보너스 번호와 당첨 번호에 중복이 있습니다.");
    }
  }
}

export default Validator;
