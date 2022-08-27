export const cards = [

  {
    label: 'Corner Store',
    type: 'discard',
    cost: 3,
    description: '+1 [vp]'
  },
  {
    label: 'Flame Thrower',
    type: 'discard',
    cost: 3,
    description: 'All other Monsters lose 2 [health]'
  },
  {
    label: 'Evacuation Orders',
    type: 'discard',
    cost: 7,
    description: 'All other Monsters lose 5 [vp]'
  },
  {
    label: 'Evacuation Orders',
    type: 'discard',
    cost: 7,
    description: 'All other Monsters lose 5 [vp]'
  },
  {
    label: 'High Altitude Bombing',
    type: 'discard',
    cost: 4,
    description: 'All Monsters (including you) lose 3 [health]'
  },
  {
    label: 'Gas Refinery',
    type: 'discard',
    cost: 3,
    description: '+2 [vp] and all other Monsters lose 3 [health]'
  },
  {
    label: 'Nuclear Power Plant',
    type: 'discard',
    cost: 6,
    description: '+2 [vp] +3 [health]'
  },
  {
    label: 'Skyscraper',
    type: 'discard',
    cost: 6,
    description: '+4 [vp]'
  },
  {
    label: 'Tank',
    type: 'discard',
    cost: 4,
    description: '+4 [vp] -3 [health]'
  },
  {
    label: 'Energize',
    type: 'discard',
    cost: 8,
    description: '+9 [energy]'
  },
  {
    label: 'Apartment Building',
    type: 'discard',
    cost: 5,
    description: '+3 [vp]'
  },
  {
    label: 'Frenzy',
    type: 'discard',
    cost: 7,
    description: 'Take another turn after this one'
  },
  {
    label: 'Vast Storm',
    type: 'discard',
    cost: 6,
    description: '+2 [vp] and all other Monsters lose 1 [money] for every 2 [money] they have'
  },
  {
    label: 'Jet Fighters',
    type: 'discard',
    cost: 5,
    description: '+5 [vp], -4 [health]'
  },
  {
    label: 'Death from Above',
    type: 'discard',
    cost: 5,
    description: "+2 [vp] and take control of Tokyo if you don't already control it. All other Monsters must yield Tokyo."
  },
  {
    label: 'Commuter Train',
    type: 'discard',
    cost: 4,
    description: '+2 [vp]'
  },
  {
    label: 'Monster Pets',
    type: 'discard',
    cost: 0,
    description: 'All Monsters (including you) lost 3 [vp]'
  },
  {
    label: 'Poison Quills',
    type: 'keep',
    cost: 3,
    description: 'When you roll at least [2][2][2], add [attack][attack] to your roll'
  },
  {
    label: 'It Has a Child',
    type: 'keep',
    cost: 7,
    description: 'If you reach [0 health], discard all your cards and tiles, lose all your [vp] and Yield Tokyo. Gain 10 [health] and continue playing.'
  },
  {
    label: 'Zombify',
    type: 'keep',
    cost: 4,
    description: "If you reach [0 health] for the first time in this game, discard all your cards and tiles, lose all your [vp], Yield Tokyo, gain 12 [health] and continue playing. For the rest of the game, your maximum [health] is increased to 12 [health] and you can't use [heal] anymore."
  },
  {
    label: 'Wings',
    type: 'keep',
    cost: 6,
    description: 'Spend 2 [money] to not lose [health] this turn.'
  },
  {
    label: 'Acid Attack',
    type: 'keep',
    cost: 6,
    description: 'Add [attack] to your Roll.'
  },
  {
    label: 'Spiked Tail',
    type: 'keep',
    cost: 5,
    description: 'If you roll at least one [attack], add 1 [attack] to your Roll.'
  },

  /* for copy/paste */

  // {
  //   label: '',
  //   type: 'keep',
  //   cost: ,
  //   description: ''
  // },
];

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
