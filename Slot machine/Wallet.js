class Wallet {
  constructor(money) {
    let _money = money;

    // Download the current content of the wallet
    this.getWalletValue = () => _money;

    // Checking if the user has enough funds to play
    this.checkCanPlay = (value) => {
      if (_money >= value) return true;
      return false;
    };

    this.changeWallet = (value, type = "+") => {
      if (typeof value === "number" && !isNaN(value)) {
        if (type === "+") {
          return (_money += value);
        } else if (type === "-") {
          return (_money -= value);
        } else {
          throw new Error("Invalid action type");
        }
      } else {
        console.log(typeof value);
        throw new Error("Invalid number");
      }
    };
  }
}

const wallet = new Wallet(200);
