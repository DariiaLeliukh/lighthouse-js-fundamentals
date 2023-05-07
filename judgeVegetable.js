const judgeVegetable = function (vegetables, metric) {
  let highestMetric = 0;
  let submitter = '';
  vegetables.forEach(function (element) {
    if (element[metric] > highestMetric) {
      highestMetric = element[metric];
      submitter = element.submitter;
    }
  });
  return submitter;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 14,
    plumpness: 3
  }
]

const metric = 'plumpness'

console.log(judgeVegetable(vegetables, metric));