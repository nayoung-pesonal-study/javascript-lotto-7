import { MissionUtils } from "@woowacourse/mission-utils";
import InputView from "../views/InputView.js";
import Validator from "../utils/Validator.js";
import LottoGame from "../models/LottoGame.js";

class MainController {
  async start() {
    const inputPurchaseData = await this.inputPurchase();

    MissionUtils.Console.print(inputPurchaseData);

    const lottoGame = new LottoGame(inputPurchaseData);

    MissionUtils.Console.print(lottoGame.getLottoList());
  }

  async inputPurchase() {
    const inputPrice = await InputView.inputPrice();
    const inputWinnerNumbers = await InputView.inputWinnerNumbers();
    const inputBonusNumber = await InputView.inputBonusNumbers(
      inputWinnerNumbers
    );
    return { inputPrice, inputWinnerNumbers, inputBonusNumber };
  }
}

export default MainController;
