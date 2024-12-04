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
}

export default InputView;
