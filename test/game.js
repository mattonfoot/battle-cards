var chai = require("chai");

chai.should();

var Card = require('../lib/deck.js').Card;
var Deck = require('../lib/deck.js').Deck;
var Game = require('../lib/game.js').Game;
var GameRules = require('../lib/game.js').GameRules;

// scenarios

describe('Given a new Game', function() {

	var deck = Deck.createFromData([
		{ name: 'card one' },
		{ name: 'card two' }
	]);

	var rules = GameRules.create();
	var game = Game.create(rules, deck);

	var cardOne = deck.cards[0];
	var cardTwo = deck.cards[1];

	describe('when a Challenge is issued', function() {

		var challenge = game.issueChallenge();

		it('Then it should provide two different contenders', function() {

			challenge.contenders[0].should.not.equal(challenge.contenders[1]);
		});
	});
});