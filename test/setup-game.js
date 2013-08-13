var chai = require("chai");

chai.should();

// Card

function Card(name) {
  this.name = name;
}

// Player

function Player(name) {
  this.name = name;
}

// GameBuilder

function GameBuilder(player) {
  this.players = [player];
}

GameBuilder.prototype = {
  withPlayer: function(player) {
    this.players.push(player);

    return this;
  },

  create: function() {
  	return new Game(this.players);
  }
};

// Game

function Game(players) {
  var g = this;

  this.players = players;

  this.dealer = {
	player: new Player('dealer'),

	chooseTheme: function(theme) {
		g.deck = {
			theme: theme,

			cards: [new Card('card one'), new Card('card two')]
		};
	}
  };
}

Game.prototype = {
  begin: function() {
    this.dealer.player = this.players[0];
  }
};

Game.withPlayer = function(player) {
  var gb = new GameBuilder(player);

  return gb;
};

// scenarios

describe('Given a Game has a group of players', function() {

  var player1 = new Player('player one');
  var player2 = new Player('player two');

  var game = Game.withPlayer(player1).withPlayer(player2).create();

  describe('When the game is about to begin', function() {

    game.begin();

    it('Then a random player will be assigned as the dealer', function() {

      [player1, player2].should.contain(game.dealer.player);
    });
  });
});

describe('Given a player has been assigned as the dealer', function() {

  var player1 = new Player('player one');
  var player2 = new Player('player two');

  var game = Game.withPlayer(player1).withPlayer(player2).create();

  game.begin();

  describe('When the dealer chooses a theme for the game', function() {

	game.dealer.chooseTheme('test-theme');

	it('Then the deck for the chosen theme will be prepared', function() {

		game.deck.theme.should.equal('test-theme');

		game.deck.cards.length.should.equal(2);
	});
  });
});

/*

Given a dealer has prepared a deck of cards
When the dealer shuffles the deck
Then the cards in the deck will be randomly ordered

Given a dealer has shuffled a deck of cards
When the dealer has dealt out the cards to each of the players
Then each player will have the same number of cards in their pile

*/
