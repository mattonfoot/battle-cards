"use strict";

// Challenege

function Challenge(contenders) {
	this.contenders = contenders;
}

Challenge.create = function (contenders) {
	return new Challenge(contenders);
};

// Game Rules

function GameRules() {

}

GameRules.prototype = {
	setup: function (deck) {
		deck.shuffle();
	},

	challenge: function (deck) {
		var contenders = [];

		contenders.push(deck.getTopCard());
		contenders.push(deck.getTopCard());

		return Challenge.create(contenders);
	}
};

GameRules.create = function () {
	return new GameRules();
};

// Game

function Game(rules, deck) {
	this.rules = rules;
	this.deck = deck;

	this.rules.setup(this.deck);
}

Game.prototype = {
	issueChallenge: function () {
		return this.rules.challenge(this.deck);
	}
};

Game.create = function (rules, deck) {
	return new Game(rules, deck);
};

module.exports = {
	Game: Game,
	GameRules: GameRules,
	Challenge: Challenge
};