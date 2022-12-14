import {roll, shuffle, reduceRollResults} from './game-kit.js';
import {dieFaces, dice, cards} from './game.js';
import { Player } from "./players.js";

const rollBtn = document.querySelector('.roll-dice');
const resolveBtn = document.querySelector('.resolve-dice');
const resetBtn = document.querySelector('.reset-dice');

const rollPile = document.querySelector('.roll-pile');
const keepPile = document.querySelector('.keep-pile');
const resolvePile = document.querySelector('.resolve-pile ul');

const faceUpDeck = document.querySelector('.face-up-deck ul');
const sweepBtn = document.querySelector('.sweep-cards');
const discardDeck = document.querySelector('.discard-deck ul');
const playerDecks = document.querySelector('.player-decks');


const init = () => {
  // Player Setup
  // Prompt for players
  const numPlayers = prompt("How many players?");
  const players = [];

  for (let i = 1; i <= numPlayers; i++) {
    players.push(new Player(`Player ${i}`));
  };

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

    faceUp.forEach((item, index) => {
        faceUpListItems += `<li><article data-id="${index}" class="card" aria-label="${item.label}">
          <header>
            <h3>${item.label}</h3>
            <p class="price">${item.cost}</p>
          </header>
          <p class="description">${item.description}</p>
          <p class="card-type">${item.type}</p>
        </article></li>`;
    })
    
    faceUpDeck.innerHTML = faceUpListItems;

    faceUpDeck.querySelectorAll('article').forEach(function(item){
      item.addEventListener('click', buyFaceUpCard);
    });
  }

  const renderDiscardDeck = () => {
    let discardListItems = '';
    console.log(discard);

    if(discard.length > 0) {
      discardListItems = `<li><article data-id="${discard[discard.length-1].label}" class="card" aria-label="${discard[discard.length-1].label}">
        <header>
          <h3>${discard[discard.length-1].label}</h3>
          <p class="price">${discard[discard.length-1].cost}</p>
        </header>
        <p class="description">${discard[discard.length-1].description}</p>
        <p class="card-type">${discard[discard.length-1].type}</p>
      </article></li>`;
    }
    
    discardDeck.innerHTML = discardListItems;

  }

  const renderPlayerDecks = () => {
    let playerDeckList = '';
    players.forEach((player) => {
      let playerDeckItemList = '';
      player.cards.forEach((card) => {
        playerDeckItemList += `<li><article data-id="${card.label}" class="card" aria-label="${card.label}">
            <header>
              <h3>${card.label}</h3>
              <p class="price">${card.cost}</p>
            </header>
            <p class="description">${card.description}</p>
            <p class="card-type">${card.type}</p>
          </article></li>`;
        console.log(card)
      })
      playerDeckList += `<div><h4>${player.name}</h4><ul>${playerDeckItemList}</ul></div>`;
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

  const buyFaceUpCard = event => {

    const activeCard = faceUp[parseInt(event.currentTarget.getAttribute('data-id'))];

    if (activeCard.type === 'keep') {
      let toPlayer = parseInt(prompt("Which player?"));
      toPlayer--;
      players[toPlayer].cards.push(faceUp.splice(parseInt(event.currentTarget.getAttribute('data-id')), 1)[0]);
      addToFaceUp(1);
      console.log(players);
    } else if (activeCard.type === 'discard') {
      discard.push(faceUp.splice(parseInt(event.currentTarget.getAttribute('data-id')), 1)[0]);
      addToFaceUp(1);
    }

    renderDiscardDeck();
    renderFaceUpDeck();
    renderPlayerDecks();
  }
  
  const sweepFaceUpCards = () => {
    discard = discard.concat(faceUp);
    faceUp = [];
    console.log(discard);

    addToFaceUp(3);
    renderDiscardDeck();
    renderFaceUpDeck();

  }

  const resolveDice = () => {

    // Remove click handlers from pile Dice
    const pileDice = document.querySelectorAll('button.die');

    pileDice.forEach((item) => {
      item.removeEventListener('click', toggleKeep);
      item.setAttribute('disabled', '');
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
  let faceUp = [];
  let discard = [];
  const shuffledDeck = shuffle(cards.filter((item) => item.status === 'active'));

  const addToFaceUp = (numCards) => {
    // TODO: Check for the end of the deck; reshuffle discards? Check rules
    for (let i = 0; i < numCards; i++) {
      faceUp.push(shuffledDeck.pop());
    }
  }

  sweepBtn.addEventListener('click', sweepFaceUpCards);
  
  addToFaceUp(3);
  console.log(faceUp);
  renderFaceUpDeck();
  renderDiscardDeck();
  renderPlayerDecks();
}

init();