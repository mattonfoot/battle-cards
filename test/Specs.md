Set Up Game
---

**As a player in a group
I want to be able to set up a game of battle cards
In order to be ready to play against other players**

Given a Game has a group of players
When the game is about to begin
Then a random player will be assigned as the dealer

Given a player has been assigned as the dealer
When the dealer chooses a theme for the game
Then the deck for the chosen theme will be prepared

Given a dealer has prepared a deck of cards
When the dealer shuffles the deck
Then the cards in the deck will be randomly ordered

Given a dealer has shuffled a deck of cards
When the dealer has dealt out the cards to each of the players
Then each player will have the same number of cards in their pile

---

Play Trick
---

**As a player in a group
I want to be able to lead a trick
In order to get a result and identify a winner**

Given a game where the dealer has dealt out all the cards
When the trick is ready to begin
Then the player to the left of the dealer leads the trick

Given a player is leading the trick
When they pick the top card from their hand
Then they will be able to read the category values

Given a leading player knows the category values of their top card
When they choose a category to battle with
Then the other players will provide the category value of their top card

Given a leading player has been given all the category values
	And one category value is better than all the others
When they compare the category values against each other
Then they will be able to identify which player is the winner of the trick

Given a leading player has been given all the category values
	And more than one category value are equally best
When they compare the category values against each other
Then they will be able to identify that the trick is a draw

---

Trick has Winner
---

**As a player in a group
I want to be able to win a Trick
In order to collect all the cards**

Given a Trick has been identified as having a winner  
When the trick has finished
Then the winner of the trick will place the cards on the bottom of their pile

Given a Trick has been identified as having a winner  
When the trick has finished
Then the winner of the trick will place the cards from the centre on the bottom of their pile

Given a Trick has been identified as having a winner  
When the trick has finished
Then the winner of the trick will be identified as the lead player for the next trick

---

Trick is Draw
---

Given a Trick has been identified as a draw
When the trick has finished
Then all the tricks cards will be placed in the centre

Given a Trick has been identified as a draw
When the trick has finished
Then the lead player will continue as the lead player for the next trick

---

Win Game
---

**As a player in a group
I want to be able to collect all the cards
In order to win the Game**

Given a player holds all the dealt cards in their pile
When the trick has finished
Then the player will be declared the Winner of a Game

Given a player has been identified as the Winner of the Game
When the trick has finished
Then the Game will be finished
