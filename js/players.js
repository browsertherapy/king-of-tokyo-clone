function Player(name, character) {
  this.name = name ? name : "player"
  this.character = character ? character : "monster"
  this.health = 10
  this.victoryPoints = 0
  this.energy = 0
  this.cards = []
}

export { Player }