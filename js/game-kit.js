const isFairDie = faces => {
  const validFaces = [2, 4, 6, 8, 10, 12, 20];
  return validFaces.includes(faces);
}

export const roll = die => {
  if (Number.isInteger(die) && isFairDie(die)) return Math.ceil(Math.random() * die);
  if (Array.isArray(die) && isFairDie(die.length)) return die[Math.floor(Math.random() * die.length)];
  return 'Not a valid die';
}

// Takes array of dice and returns a reduced count of each die face
export const reduceRollResults = (resultsArray) => {
  
  const rollResults = resultsArray.reduce((acc, curr) => {

    if (typeof acc[curr.value] == 'undefined') {
        acc[curr.value] = 1;
      } else {
        acc[curr.value] += 1;
      }
      return acc;
    }, {});

  return rollResults;
}

// Shuffles an array using Fisher–Yates algorithm
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
