class Card {
  name: string;
  value: number;

  constructor(name: string, value: number) {
    this.name = name;
    this.value = value;
  }
}

class CardCollection {
  private cards: Card[] = [];

  public addCard(card: Card): void {
    this.cards.push(card);
  }

  *[Symbol.iterator](): IterableIterator<Card> {
    yield* this.cards;
  }

  public *getCardIterator(): IterableIterator<Card> {
    for (const card of this.cards) yield card;
  }
}

function main(): void {
  const deck: CardCollection = new CardCollection();

  deck.addCard(new Card("Ace of Hearts", 1));
  deck.addCard(new Card("King of Hearts", 13));
  deck.addCard(new Card("Queen of Hearts", 12));
  deck.addCard(new Card("Jack of Hearts", 11));

  // Iterate through the collection in order using for...of
  console.debug("Iterating through the card collection:");
  for (const card of deck) {
    console.debug(`Card: ${card.name}, Value: ${card.value}`);
  }
}

main();
