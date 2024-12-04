import { MissionUtils } from "@woowacourse/mission-utils";
import InputView from "../views/InputView.js";
import Validator from "../utils/Validator.js";

class MainController {
  async start() {
    const inputPrice = await InputView.inputPrice();
    const inputWinnerNumbers = await InputView.inputWinnerNumbers();
    const inputBonusNumber = await InputView.inputBonusNumbers(
      inputWinnerNumbers
    );

    MissionUtils.Console.print(inputWinnerNumbers);
    MissionUtils.Console.print(inputBonusNumber);
  }
}

export default MainController;
