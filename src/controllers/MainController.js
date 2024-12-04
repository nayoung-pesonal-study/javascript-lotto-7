import { MissionUtils } from "@woowacourse/mission-utils";
import InputView from "../views/InputView.js";

class MainController {
  async start() {
    const inputPrice = await InputView.inputPrice();
    const inputWinnerNumbers = await InputView.inputWinnerNumbers();

    MissionUtils.Console.print(inputWinnerNumbers);
  }
}

export default MainController;
