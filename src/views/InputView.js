import { MissionUtils } from "@woowacourse/mission-utils";
import MESSAGE from "../constants/Message.js";
import Validator from "../utils/Validator.js";
import Parser from "../utils/Parser.js";

class InputView {
  static async inputPrice() {
    try {
      const inputPrice = await MissionUtils.Console.readLineAsync(
        MESSAGE.INFO.PURCHASE_PRICE
      );
      const parsedInputPrice = Parser.inputPriceToNumber(inputPrice);
      return parsedInputPrice;
    } catch (error) {
      MissionUtils.Console.print(error);
      return await this.inputPrice();
    }
  }

  static async inputWinnerNumbers() {
    try {
      const inputWinnerNumbers = await MissionUtils.Console.readLineAsync(
        MESSAGE.INFO.WINNER_NUMBERS
      );
      const parsedInputArray = Parser.inputWinnerNumbers(inputWinnerNumbers);
      return parsedInputArray;
    } catch (error) {
      MissionUtils.Console.print(error);
      return await this.inputWinnerNumbers();
    }
  }

  static async inputBonusNumbers(inputWinnerNumbers) {
    try {
      const inputBonusNumber = await MissionUtils.Console.readLineAsync(
        MESSAGE.INFO.BONUS_NUMBER
      );
      const parsedInputBonusNumber = Parser.inputBonusNumber(inputBonusNumber);
      Validator.checkSameNumber(parsedInputBonusNumber, inputWinnerNumbers);
      return parsedInputBonusNumber;
    } catch (error) {
      MissionUtils.Console.print(error);
      return await this.inputBonusNumbers(inputWinnerNumbers);
    }
  }
}

export default InputView;
