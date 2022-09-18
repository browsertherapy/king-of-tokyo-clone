export const cards = [

  {
    label: 'Corner Store',
    status: 'active',
    type: 'discard',
    cost: 3,
    description: '+1[vp]'
  },
  {
    label: 'Flame Thrower',
    status: 'active',
    type: 'discard',
    cost: 3,
    description: 'All other Monsters lose 2[health]'
  },
  {
    label: 'Evacuation Orders',
    status: 'active',
    type: 'discard',
    cost: 7,
    description: 'All other Monsters lose 5[vp]'
  },
  {
    label: 'Evacuation Orders',
    status: 'active',
    type: 'discard',
    cost: 7,
    description: 'All other Monsters lose 5[vp]'
  },
  {
    label: 'High Altitude Bombing',
    status: 'active',
    type: 'discard',
    cost: 4,
    description: 'All Monsters (including you) lose 3[health]'
  },
  {
    label: 'Gas Refinery',
    status: 'active',
    type: 'discard',
    cost: 3,
    description: '+2[vp] and all other Monsters lose 3[health]'
  },
  {
    label: 'Nuclear Power Plant',
    status: 'active',
    type: 'discard',
    cost: 6,
    description: '+2[vp] +3[health]'
  },
  {
    label: 'Skyscraper',
    status: 'active',
    type: 'discard',
    cost: 6,
    description: '+4[vp]'
  },
  {
    label: 'Tank',
    status: 'active',
    type: 'discard',
    cost: 4,
    description: '+4[vp] -3[health]'
  },
  {
    label: 'Energize',
    status: 'active',
    type: 'discard',
    cost: 8,
    description: '+9[energy]'
  },
  {
    label: 'Apartment Building',
    status: 'active',
    type: 'discard',
    cost: 5,
    description: '+3[vp]'
  },
  {
    label: 'Frenzy',
    status: 'active',
    type: 'discard',
    cost: 7,
    description: 'Take another turn after this one.'
  },
  {
    label: 'Vast Storm',
    status: 'active',
    type: 'discard',
    cost: 6,
    description: '+2[vp] and all other Monsters lose 1[money] for every 2[money] they have.'
  },
  {
    label: 'Jet Fighters',
    status: 'active',
    type: 'discard',
    cost: 5,
    description: '+5[vp], -4[health]'
  },
  {
    label: 'Death from Above',
    status: 'active',
    type: 'discard',
    cost: 5,
    description: "+2[vp] and take control of Tokyo if you don't already control it. All other Monsters must yield Tokyo."
  },
  {
    label: 'Commuter Train',
    status: 'active',
    type: 'discard',
    cost: 4,
    description: '+2[vp]'
  },
  {
    label: 'Monster Pets',
    status: 'active',
    type: 'discard',
    cost: 0,
    description: 'All Monsters (including you) lost 3[vp]'
  },
  {
    label: 'Poison Quills',
    status: 'active',
    type: 'keep',
    cost: 3,
    description: 'When you roll at least [2][2][2], add [attack][attack] to your roll'
  },
  {
    label: 'It Has a Child',
    status: 'inactive',
    type: 'keep',
    cost: 7,
    description: 'If you reach [0 health], discard all your cards and tiles, lose all your [vp] and Yield Tokyo. Gain 10[health] and continue playing.'
  },
  {
    label: 'Zombify',
    status: 'inactive',
    type: 'keep',
    cost: 4,
    description: "If you reach [0 health] for the first time in this game, discard all your cards and tiles, lose all your [vp], Yield Tokyo, gain 12[health] and continue playing. For the rest of the game, your maximum [health] is increased to 12[health] and you can't use [hearts] anymore."
  },
  {
    label: 'Wings',
    status: 'active',
    type: 'keep',
    cost: 6,
    description: 'Spend 2[money] to not lose [health] this turn.'
  },
  {
    label: 'Acid Attack',
    status: 'active',
    type: 'keep',
    cost: 6,
    description: 'Add [attack] to your Roll.'
  },
  {
    label: 'Spiked Tail',
    status: 'active',
    type: 'keep',
    cost: 5,
    description: 'If you roll at least one [attack], add [attack] to your Roll.'
  },
  {
    label: 'Burrowing',
    status: 'active',
    type: 'keep',
    cost: 5,
    description: 'Add [attack] to your Roll while you are in Tokyo. When you yield Tokyo, the Monster taking control of it loses 1[health].'
  },
  {
    label: 'Herbivore',
    status: 'active',
    type: 'keep',
    cost: 5,
    description: "Gain 1[vp] at the end of your turn if you don't make anyone lose [health]."
  },
  {
    label: 'Plot Twist',
    status: 'active',
    type: 'keep',
    cost: 3,
    description: 'Before resolving your dice, you may change one die to any result. Discard when used.'
  },
  {
    label: 'Media-Friendly',
    status: 'active',
    type: 'keep',
    cost: 3,
    description: 'Gain 1[vp] whenever you buy a Power Card.'
  },
  {
    label: 'Detritivore',
    status: 'active',
    type: 'keep',
    cost: 4,
    description: 'If you roll at least [1][2][3], gain 2[vp], in addition to the regular effects.'
  },
  {
    label: 'Stretchy',
    status: 'active',
    type: 'keep',
    cost: 3,
    description: 'Before resolving your dice, you can spend 2[money] to change one of your dice to any result.'
  },
  {
    label: 'Friend of Children',
    status: 'active',
    type: 'keep',
    cost: 3,
    description: 'When you gain any [money] gain 1 extra [money].'
  },
  {
    label: "We're Only Making It Stronger",
    status: 'active',
    type: 'keep',
    cost: 3,
    description: 'Each time you lose at least 2[health], you gain 1[money].'
  },
  {
    label: 'Made in a Lab',
    status: 'inactive',
    type: 'keep',
    cost: 2,
    description: 'During the Buy Power Cards step, you may peak at the top card and buy it or put it back on the top of the deck.'
  },
  {
    label: 'Jets',
    status: 'active',
    type: 'keep',
    cost: 5,
    description: "You don't lose [health] if you decide to yield Tokyo."
  },
  {
    label: 'Lunar Powered',
    status: 'active',
    type: 'keep',
    cost: 3,
    description: 'At the end of your turn gain 2[money] if you have no [money].'
  },
  {
    label: 'Fire Breathing',
    status: 'active',
    type: 'keep',
    cost: 4,
    description: 'When you roll at least one [attack], your neighbours(s) at the table lose 1 extra [health].'
  },
  {
    label: 'Opportunist',
    status: 'active',
    type: 'keep',
    cost: 3,
    description: 'Whenever a Power Card is revealed, you may buy it immediately.'
  },
  {
    label: 'Energy Drink',
    status: 'inactive',
    type: 'keep',
    cost: 4,
    description: 'Spend 1[money] to get 1 extra die roll.'
  },
  {
    label: 'Urbavore',
    status: 'active',
    type: 'keep',
    cost: 4,
    description: 'Gain 1 extra [vp] when beginning your turn in Tokyo. If you are in Tokyo and you roll at least [attack], add [attack] to your Roll.'
  },
  {
    label: 'Even Bigger',
    status: 'active',
    type: 'keep',
    cost: 4,
    description: '+2[health] when you buy this card. Your maximum [health] is increased to 12[health] as long as you own this card.'
  },
  {
    label: 'Regeneration',
    status: 'active',
    type: 'keep',
    cost: 4,
    description: 'Each time you gain [health] you gain 1 extra [health].'
  },
  {
    label: 'Gourmet',
    status: 'active',
    type: 'keep',
    cost: 6,
    description: 'When you roll at least [1][1][1], gain 2 extra [vp] in addition to the regular effects.'
  },
  {
    label: 'Reflective Hide',
    status: 'active',
    type: 'keep',
    cost: 6,
    description: 'Any Monster that makes you lose [health] loses 1[health] as well.'
  },
  {
    label: 'Backgroud Dweller',
    status: 'inactive',
    type: 'keep',
    cost: 4,
    description: 'You can always reroll any [3] you have.'
  },
  {
    label: 'Metamorph',
    status: 'inactive',
    type: 'keep',
    cost: 3,
    description: 'At the end of your turn you can discard any [keep] cards you have to gain their full cost in [money].'
  },
  {
    label: 'Giant Brain',
    status: 'inactive',
    type: 'keep',
    cost: 5,
    description: 'You have one extra die roll each turn.'
  },
  {
    label: 'Natural Selection',
    status: 'inactive',
    type: 'keep',
    cost: 2,
    description: '+4[money] +4[health] Use an extra die. If you ever end your turn with at least [3], you lose all your [health].'
  },
  {
    label: 'Nanobots',
    status: 'active',
    type: 'keep',
    cost: 3,
    description: 'At the start of your turn, if you have fewer than 3[health], gain 2[health].'
  },
  {
    label: 'Alpha Monster',
    status: 'active',
    type: 'keep',
    cost: 5,
    description: 'Gain 1[vp] when you you roll at least [attack].'
  },
  {
    label: 'Energy Hoarder',
    status: 'active',
    type: 'keep',
    cost: 3,
    description: 'You gain 1[vp] for every 6[money] you have at the end of your turn.'
  },
  {
    label: 'Alien Origin',
    status: 'active',
    type: 'keep',
    cost: 3,
    description: 'Buying Power Cards costs you 1 less [money] per card.'
  },
  {
    label: 'Hibernation',
    status: 'active',
    type: 'keep',
    cost: 4,
    description: 'You CANNOT buy this card while in Tokyo. You no longer take damage. You cannot move, even if Tokyo is empty. You can no longer buy cards. The only results you can use are [heart] and [energy]. Discard this card to end its effects and restrictions immediately.'
  },
  {
    label: 'Parasitic Tentacles',
    status: 'inactive',
    type: 'keep',
    cost: 4,
    description: 'You may buy [keep] cards from other Monsters. Pay them the [money] cost.'
  },
  {
    label: 'Eater of the Dead',
    status: 'active',
    type: 'keep',
    cost: 4,
    description: "Gain 3[vp] every time a Monster's [health] goes to [0 health]."
  },
  {
    label: 'Nova Breath',
    status: 'active',
    type: 'keep',
    cost: 7,
    description: 'All of your [attack] Smash all other Mosnters.'
  },
  {
    label: 'Smoke Cloud',
    status: 'inactive',
    type: 'keep',
    cost: 4,
    description: 'Place 3 Smoke tokens on this card. Spend 1 Smoke token for an extra die roll. Discard this card when all Smoke tokens are spent.'
  },
  {
    label: 'Extra Head',
    status: 'inactive',
    type: 'keep',
    cost: 7,
    description: 'Get 1 extra die.'
  },
  {
    label: 'Complete Destruction',
    status: 'active',
    type: 'keep',
    cost: 3,
    description: 'If you roll [1][2][3][heart][attack][energy], gain 9[vp] in addition to the regular effects.'
  },
  {
    label: 'Unstable DNA',
    status: 'inactive',
    type: 'keep',
    cost: 3,
    description: 'When you Yield Tokyo, you may exchange this card with a card of your choice from the Monster who Smashed you.'
  },
  {
    label: 'Psychic Probe',
    status: 'inactive',
    type: 'keep',
    cost: 3,
    description: 'You can Reroll a die of your choice after the last Roll of each other Monster. If the result of your reroll is [heart], discard this card.'
  },
  {
    label: 'Super Jump',
    status: 'active',
    type: 'keep',
    cost: 4,
    description: "Once each player's turn, you may spend 1[money] to negate the loss of 1[health]."
  },
  {
    label: 'Rapid Healing',
    status: 'active',
    type: 'keep',
    cost: 3,
    description: 'Spend 2[money] at any time to gain 1[health]. This may be used to prevent your health from being reduced to [0 health].'
  },
  {
    label: 'Armour Plating',
    status: 'active',
    type: 'keep',
    cost: 4,
    description: 'Do not lose [health] when you lose exactly 1[health].'
  },
  {
    label: 'Freeze Time',
    status: 'active',
    type: 'keep',
    cost: 6,
    description: 'When you roll at least [1][1][1], you can take another turn with one less die.'
  },
  {
    label: 'Shrink Ray',
    status: 'active',
    type: 'keep',
    cost: 6,
    description: 'Give 1 Shrink Ray token to each Monster you Smash with your [attack]. At the beginning of their turn, Monsters roll 1 less die for each Shrink Ray token they have on them. A Shrink Ray token can be discarded by using [heart] instead of gaining 1[health].'
  },
  {
    label: 'Herd Culler',
    status: 'active',
    type: 'keep',
    cost: 5,
    description: 'You can change one of your dice to [1] each turn.'
  },
  {
    label: 'Camouflage',
    status: 'inactive',
    type: 'keep',
    cost: 3,
    description: 'If you lose [health], roll a die for each [health] you lost. Each [heart] reduces the loss by 1[health].'
  }
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
