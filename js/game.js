export const dieFaces = [
  {
    label: 'heal'
  },
  {
    label: 'attack'
  },
  {
    label: 'money'
  },
  {
    label: 'one'
  },
  {
    label: 'two'
  },
  {
    label: 'three'
  }
];

export const dice = [
  {
    id: 0,
    value: '',
    keep: false,
  },
  {
    id: 1,
    value: '',
    keep: false,
  },
  {
    id: 2,
    value: '',
    keep: false,
  },
  {
    id: 3,
    value: '',
    keep: false,
  },
  {
    id: 4,
    value: '',
    keep: false,
  },
  {
    id: 5,
    value: '',
    keep: false,
  }
];

// Takes array of dice and returns a reduced count of each die face
export const reduceRollResults = (resultsArray) => {
  console.log(resultsArray);

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