class Player {
  constructor(
    name = "",
    character = "",
    health = 10,
    victoryPoints = 0,
    energy = 0,
    cards = []
  ) {
    this.name = name
    this.character = character
    this.health = health
    this.victoryPoints = victoryPoints
    this.energy = energy
    this.cards = cards
  }
}
