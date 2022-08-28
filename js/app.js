import {roll} from 'https://unpkg.com/dice-rollr@1.0.0/index.js';
import {dieFaces, dice, reduceRollResults} from './game.js';
import {cards, shuffle} from './cards.js';
import { Player } from "./players.js";

const init = () => {
  // Player Setup
  // Prompt for players
  const numPlayers = prompt("How many players?");
  const players = [];

  for (let i = 1; i <= numPlayers; i++) {
    players.push(new Player(`Player ${i}`));
  };

  console.log(players);

  // Dice
  // TODO: Move renderPiles to game.js file?
  const renderPiles = () => {
    let keepListItems = '';
    let rollListItems = '';

    // TODO: Remove repetition in the next 15 lines or so 
    dice.forEach((item) => {
      if (item.keep) {
        keepListItems += `<li><button data-id="${item.id}" class="die ${item.value}" aria-label="${item.value}"></button></li>`;
      } else {
        rollListItems += `<li><button data-id="${item.id}" class="die ${item.value}" aria-label="${item.value}"></button></li>`;      
      }
    })
    
    // TODO: De-couple the rollPile and keepPile DOM objects -> move to toggleKeep?
    rollPile.innerHTML = rollListItems;
    keepPile.innerHTML = keepListItems;
    rollPile.querySelectorAll('button').forEach(function(item){
      item.addEventListener('click', toggleKeep);
    });

    keepPile.querySelectorAll('button').forEach(function(item){
      item.addEventListener('click', toggleKeep);
    });
  }

  // Render Deck Function
  const renderFaceUpDeck = () => {
    let faceUpListItems = '';

    // TODO: Add all card information to button
    // TODO: Make cards more pretteh
    faceUp.forEach((item, index) => {
        faceUpListItems += `<li><button data-id="${index}" class="card" aria-label="${item.label}">
          <strong>${item.label}</strong><br>
          ${item.description}<br>
          ${item.type}<br>
          ${item.cost}
        </button></li>`;
    })
    
    faceUpDeck.innerHTML = faceUpListItems;

    faceUpDeck.querySelectorAll('button').forEach(function(item){
      item.addEventListener('click', buyFaceUpCard);
    });
  }

  const renderDiscardDeck = () => {
    let discardListItems = '';

    // TODO: Render top card only
    discard.forEach((item) => {
        discardListItems += `<li><button data-id="${item.label}" class="card" aria-label="${item.label}">
          <strong>${item.label}</strong><br>
          ${item.description}<br>
          ${item.type}<br>
          ${item.cost}
          </button></li>`;
    })
    
    discardDeck.innerHTML = discardListItems;

  }

  const renderPlayerDecks = () => {
    let playerDeckList = '';
    players.forEach((player) => {
      let playerDeckItemList = '';
      player.cards.forEach((card) => {
        playerDeckItemList += `<li><button>
            <strong>${card.label}</strong><br>
            ${card.description}<br>
            ${card.type}<br>
            ${card.cost}
          </button></li>`;
        console.log(card)
      })
      playerDeckList += `<h4>${player.name}</h4><ul>${playerDeckItemList}</ul>`;
    })
    playerDecks.innerHTML = playerDeckList;

  }

  // TODO: Move toggleKeep to game.js file?
  const toggleKeep = event => {
    const dieId = parseInt(event.target.getAttribute('data-id'));
    const die = dice.find(item => item.id === dieId);
    die.keep = !die.keep;  
    renderPiles();
  }

  // Buy Discard card
  const buyFaceUpCard = event => {

    const activeCard = faceUp[parseInt(event.target.getAttribute('data-id'))];

    if (activeCard.type === 'keep') {
      let toPlayer = parseInt(prompt("Which player?"));
      toPlayer--;
      players[toPlayer].cards.push(faceUp.splice(parseInt(event.target.getAttribute('data-id')), 1)[0]);
      addToFaceUp(1);
      console.log(players);
    } else if (activeCard.type === 'discard') {
      discard.push(faceUp.splice(parseInt(event.target.getAttribute('data-id')), 1)[0]);
      addToFaceUp(1);
    }

    renderDiscardDeck();
    renderFaceUpDeck();
    renderPlayerDecks();
  }

  const resolveDice = () => {

    // Remove click handlers from pile Dice
    const pileDice = document.querySelectorAll('button.die');

    pileDice.forEach((item) => {
      item.removeEventListener('click', toggleKeep);
    })

    // Disable rolling
    rollBtn.disabled = true;

    // Reduce the results of the dice
    const rollResults = reduceRollResults(dice);
    console.log(rollResults);

    // Take reduced dice results and output to the page
    let keptValuesDisplay = '';
    for(let faceValue in rollResults){
        keptValuesDisplay += `<li><button data-keep="">${faceValue} ${rollResults[faceValue]}</button></li>` 
    }
    resolvePile.innerHTML = keptValuesDisplay; 

    resolveBtn.disabled = true;

  }

  const resetDice = () => {
    dice.forEach((die) => {
      die.value = '';
      die.keep = false;
    });

    rollCount = 0;
    
    resolveBtn.disabled = true;
    rollBtn.disabled = false;
    rollPile.innerHTML = '';
    keepPile.innerHTML = '';
    resolvePile.innerHTML = '';
  }

  const rollBtn = document.querySelector('.roll-dice');
  const resolveBtn = document.querySelector('.resolve-dice');
  const resetBtn = document.querySelector('.reset-dice');

  const rollPile = document.querySelector('.roll-pile');
  const keepPile = document.querySelector('.keep-pile');
  const resolvePile = document.querySelector('.resolve-pile ul');

  const faceUpDeck = document.querySelector('.face-up-deck ul');
  const discardDeck = document.querySelector('.discard-deck ul');
  const playerDecks = document.querySelector('.player-decks div');

  let rollCount = 0;

  resolveBtn.disabled = true; // disable by default


  rollBtn.addEventListener('click', () => {
    resolveBtn.disabled = false; // enable resolve after first roll

    if (rollCount < 3) {
      dice.forEach((die) => {
        if (!die.keep) {
          die.value = roll(dieFaces).label;
        }
      })
  
      rollCount++;

      renderPiles();

      if (rollCount === 3) {
        resolveDice();
      }

    } else {
      resolveDice();
    }

  })

  resetBtn.addEventListener('click', resetDice);
  resolveBtn.addEventListener('click', resolveDice);

  // Cards
  const faceUp = [];
  const discard = [];
  const shuffledDeck = shuffle(cards);
  const addToFaceUp = (numCards) => {
    // TODO: Check for the end of the deck; reshuffle discards? Check rules
    for (let i = 0; i < numCards; i++) {
      faceUp.push(shuffledDeck.pop());
    }
  }

  addToFaceUp(3);
  console.log(faceUp);
  renderFaceUpDeck();
  renderDiscardDeck();
  renderPlayerDecks();
}

init();