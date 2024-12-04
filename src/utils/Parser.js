import Validator from "./Validator.js";

class Parser {
  static inputPriceToNumber(input) {
    Validator.checkIsEmpty(input);
    const parsedInputNumber = Number(input);
    Validator.checkIsNumber(parsedInputNumber);
    Validator.checkThousandMultiple(parsedInputNumber);
    Validator.checkNaturalNumber(parsedInputNumber);
    return parsedInputNumber;
  }

  static inputWinnerNumbers(input) {
    Validator.checkIsEmpty(input);
    const parsedInputArray = input.split(",");
    const parsedInputNumberArray = parsedInputArray.map((cur) => {
      const inputCheck = Number(cur.trim());
      Validator.checkNaturalNumber(inputCheck);
      Validator.checkLottoRange(inputCheck);
      return inputCheck;
    });
    Validator.checkFiveLength(parsedInputNumberArray);
    return parsedInputNumberArray;
  }

  static inputBonusNumber(input) {
    Validator.checkIsEmpty(input);
    const parsedInputNumber = Number(input);
    Validator.checkIsNumber(parsedInputNumber);
    Validator.checkNaturalNumber(parsedInputNumber);
    Validator.checkLottoRange(parsedInputNumber);

    return parsedInputNumber;
  }
}

export default Parser;
