import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class LottoGame {
  #lottoList;

  constructor({ inputPrice, inputWinnerNumbers, inputBonusNumber }) {
    this.#lottoList = this.#generateLottoList(inputPrice);
  }

  #generateLottoList(price) {
    const lottoAmount = price / 1000;
    const lottoList = [];
    for (let i = 0; i < lottoAmount; i++) {
      const lotto = new Lotto().copyNumbers();
      lottoList.push(lotto);
    }
    return lottoList;
  }

  getLottoList() {
    return [...this.#lottoList];
  }
}

export default LottoGame;
