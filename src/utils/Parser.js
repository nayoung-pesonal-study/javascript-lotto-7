import Validator from "./Validator.js";

class Parser {
  static inputPriceToNumber(inputPrice) {
    Validator.checkIsEmpty(inputPrice);
    const parsedInputPrice = Number(inputPrice);
    Validator.checkIsNumber(parsedInputPrice);
    Validator.checkThousandMultiple(parsedInputPrice);
    Validator.checkNaturalNumber(parsedInputPrice);
    return parsedInputPrice;
  }
}

export default Parser;
