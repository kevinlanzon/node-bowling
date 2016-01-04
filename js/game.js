function Game() {
  this.rolls = [];
}

Game.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

Game.prototype.gameRolls = function(pins, number) {
  for (var i = 0; i < number; i++) {
    this.roll(pins);
  }
};

Game.prototype.currentScore  = function() {
  var score = 0;
  var rollNumber = 0;
  var game = this;

  for (var i = 0; i < 10; i++) {
    if (rollStrike()) {
      score += strikeScore();
      rollNumber++
    } else if (rollSpare()) {
      score += spareScore();
      rollNumber += 2;
    } else {
      score += normalScore();
      rollNumber += 2;
    }
  }

  return score;

  function rollStrike() {
    return game.rolls[rollNumber] === 10;
  }

  function rollSpare() {
    return game.rolls[rollNumber] + game.rolls[rollNumber + 1] === 10;
  }

  function strikeScore() {
    return game.rolls[rollNumber] + game.rolls[rollNumber + 1] + game.rolls[rollNumber + 2];
  }

  function spareScore() {
    return strikeScore();
  }

  function normalScore() {
    return game.rolls[rollNumber] + game.rolls[rollNumber + 1];
  }
};

module.exports = Game;