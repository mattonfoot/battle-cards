var chai = require("chai");

chai.should();

// scenarios

describe('Given a Game has a group of players', function() {

  var player1 = new Player('player one');
  Var player2 = new Player('player two');

  var game = Game.withPlayer(player1).withPlayer(player2).create();

  describe('When the game is about to begin', function() {

    game.begin();

    it('Then a random player will be assigned as the dealer', function() {

      [player1, player2].should.contain(game.dealer.player);
    });
  });
});

/*

Given a player has been assigned as the dealer
When the dealer chooses a theme for the game
Then the deck for the chosen theme will be prepared

Given a dealer has prepared a deck of cards
When the dealer shuffles the deck
Then the cards in the deck will be randomly ordered

Given a dealer has shuffled a deck of cards
When the dealer has dealt out the cards to each of the players
Then each player will have the same number of cards in their pile

*/
