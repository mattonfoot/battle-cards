"use strict";

// Card

function Card(name) {
	this.name = name;
}

Card.create = function (name) {
	return new Card(name);
};

// Deck

function Deck(cards) {
	this.cards = cards || [];
	this.numCards = this.cards.length;
}

Deck.prototype = {
	shuffle: function () {
		var currentIndex  = this.numCards, temporaryValue, randomIndex;

		// Fisher-Yates shuffle

		while (0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			temporaryValue = this.cards[currentIndex];
			this.cards[currentIndex] = this.cards[randomIndex];
			this.cards[randomIndex] = temporaryValue;
		}

		return this;
	},

	getTopCard: function () {
		return this.cards.pop();
	}
};

Deck.create = function () {
	return new Deck();
};

Deck.createFromCards = function (cards) {
	return new Deck(cards);
};

Deck.createFromData = function (data) {
	var cards = [];
	var i = data.length - 1;

	while (i >= 0) {

		cards.unshift(new Card(data[i].name));
		i--;
	}

	return Deck.createFromCards(cards);
};

module.exports = {
	Deck: Deck,
	Card: Card
};