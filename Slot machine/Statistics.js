class Statistics {
  constructor() {
    this.gameResults = [
      { win: true, bind: 2 },
      { win: false, bind: -4 },
      { win: true, bind: 2 },
      { win: false, bind: -4 },
      { win: true, bind: 8 },
    ];
  }

  addGameToStatistics(win, bid) {
    let gameResult = {
      win,
      bid,
    };
    this.gameResults.push(gameResult);
  }

  showGameStatistics() {
    let games = this.gameResults.length;
    let wins = this.gameResults.filter((result) => result.win).length;
    let losses = this.gameResults.filter((result) => !result.win).length;

    return [games, wins, losses];
  }
}

const stats = new Statistics();
