import { MissionUtils } from "@woowacourse/mission-utils";
import InputView from "../views/InputView.js";

class MainController {
  async start() {
    const inputPrice = await InputView.inputPrice();
  }
}

export default MainController;
