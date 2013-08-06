var chai = require("chai");

chai.should();

var Card = require('../lib/deck.js').Card;
var Deck = require('../lib/deck.js').Deck;

// scenarios

describe('Given a new Deck with two Cards', function() {

	var deck = Deck.createFromData([
		{ name: 'card one' },
		{ name: 'card two' }
	]);

	describe('when a Deck is shuffled ten times', function() {

		var cardSlotOne = [];

		for (var numshuffles = 0; numshuffles < 10; numshuffles++) {
			cardSlotOne.push( deck.cards[0] );

			deck.shuffle();
		}

		it('Then the top card of each shuffle should not favour one card over another', function() {

			var cardSlotOneLen = cardSlotOne.length;
			var countCardOne = 0;

			for (var slot = 0; slot < cardSlotOneLen; slot++) {
				if (cardSlotOne[slot].name === 'card one') {
					countCardOne++;
				}
			}

			countCardOne.should.be.within(1, 9);
		});
	});
});