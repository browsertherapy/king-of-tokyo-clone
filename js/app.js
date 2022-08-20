import {roll} from 'https://unpkg.com/dice-rollr@1.0.0/index.js';
import {dieFaces, dice, reduceRollResults} from './game.js';
import {cards, shuffle} from './cards.js'

const init = () => {
  // Dice
  console.log(shuffle(cards));
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

    faceUp.forEach((item) => {
        faceUpListItems += `<li><button data-id="${item.label}" class="card" aria-label="${item.label}">${item.label}</button></li>`;
    })
    
    faceUpDeck.innerHTML = faceUpListItems;

  }
  const renderDiscardDeck = () => {
    let discardListItems = '';

    discard.forEach((item) => {
        discardListItems += `<li><button data-id="${item.label}" class="card" aria-label="${item.label}">${item.label}</button></li>`;
    })
    
    discardDeck.innerHTML = discardListItems;

  }

  // TODO: Move toggleKeep to game.js file?
  const toggleKeep = event => {
    const dieId = parseInt(event.target.getAttribute('data-id'));
    const die = dice.find(item => item.id === dieId);
    die.keep = !die.keep;  
    renderPiles();
  }

  // Render Discard Deck

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

  const rollBtn = document.querySelector('.roll-dice');
  const resolveBtn = document.querySelector('.resolve-dice');
  const rollPile = document.querySelector('.roll-pile');
  const keepPile = document.querySelector('.keep-pile');
  const resolvePile = document.querySelector('.resolve-pile ul');
  const faceUpDeck = document.querySelector('.face-up-deck ul');
  const discardDeck = document.querySelector('.discard-deck ul');

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

  resolveBtn.addEventListener('click', resolveDice)

  // Cards
  const faceUp = [];
  const discard = [];
  const shuffledDeck = shuffle(cards);
  const addToFaceUp = (numCards) => {
    for (let i = 0; i < numCards; i++) {
      faceUp.push(shuffledDeck.pop());
    }
  }

  addToFaceUp(3);
  console.log(faceUp);
  renderFaceUpDeck();
  renderDiscardDeck();
}

init();