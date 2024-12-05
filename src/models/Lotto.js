import { MissionUtils } from "@woowacourse/mission-utils";
import Validator from "../utils/Validator.js";

class Lotto {
  #numbers;

  constructor(numbers = this.generateRandomNumber()) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validator.checkFiveLength(numbers);
    Validator.checkSameNumberInArray(numbers);
    numbers.forEach((cur) => {
      Validator.checkNaturalNumber(cur);
      Validator.checkLottoRange(cur);
    });
  }

  generateRandomNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  copyNumbers() {
    return [...this.#numbers];
  }
}

export default Lotto;
