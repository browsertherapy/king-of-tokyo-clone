export const cards = [

  {
    label: 'Corner Store',
    type: 'discard',
    cost: 3,
    description: '+1 [victory-point]'
  },
  {
    label: 'Flame Thrower',
    type: 'discard',
    cost: 3,
    description: 'All other Monsters lose 2 [hearts].'
  },
  {
    label: 'Evacuation Orders',
    type: 'discard',
    cost: 7,
    description: 'All other Monsters lose 5 [victory-points]'
  },
  {
    label: 'High Altitude Bombing',
    type: 'discard',
    cost: 4,
    description: 'All Monsters (including you) lose 3 [hearts].'
  },
  {
    label: 'Gas Refinery',
    type: 'discard',
    cost: 3,
    description: '+2 [victory-points] and all other Monsters lose 3 [hearts].'
  },
  {
    label: 'Nuclear Power Plant',
    type: 'discard',
    cost: 6,
    description: '+2 [VP] +3 [hearts].'
  },
  {
    label: 'Skyscraper',
    type: 'discard',
    cost: 6,
    description: '+4 [VP].'
  },
  {
    label: 'Tank',
    type: 'discard',
    cost: 4,
    description: '+4 [VP] -3 [hearts].'
  },
  {
    label: 'Energize',
    type: 'discard',
    cost: 8,
    description: '+9 [energy].'
  },
  {
    label: 'Apartment Building',
    type: 'discard',
    cost: 5,
    description: '+3 [VP].'
  },
]
export const shuffle = (array) => {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}