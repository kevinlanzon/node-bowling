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
  for (var i = 0; i < 20; i++) {
    score += this.rolls[i];
  }
  return score;
};

module.exports = Game;