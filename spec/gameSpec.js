var Game = require('../js/game');

describe('10 Pin Bowling', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('should score 0 for a gutter game', function() {
    game.gameRolls(0, 20);
    expect(game.currentScore()).toEqual(0);
  });

  it('should score 20 when all ones are rolled', function() {
    game.gameRolls(1, 20);
    expect(game.currentScore()).toEqual(20);
  });

  it('should roll a spare', function() {
    game.roll(3);
    game.roll(3);
    game.roll(3);
    game.roll(4);
    game.gameRolls(0, 16);
    expect(game.currentScore()).toEqual(13);
  });

  it('should roll a strike', function() {
    game.roll(10);
    game.roll(4);
    game.roll(3);
    game.gameRolls(0, 16);
    expect(game.currentScore()).toEqual(24);
  });
});
