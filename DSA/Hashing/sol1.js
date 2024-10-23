const mapFrequencies = (nums) => {
  const frequencyMap = new Map();
  nums.forEach((num) => {
    frequencyMap.set(
      num,
      frequencyMap.has(num) ? frequencyMap.get(num) + 1 : 1
    );
  });
  return frequencyMap;
};

const findFrequency = (nums, queries) => {
  const frequencies = [];
  const freqMap = mapFrequencies(nums);
  queries.forEach((query) => {
    frequencies.push(freqMap.has(query) ? freqMap.get(query) : 0);
  });
  return frequencies;
};

let res = findFrequency(
  [1, 2, 1, 12, 11, 10, 1, 1, 2, 1, 3, 21, -1, 2],
  [1, 1, 2, 91, 0, 10]
);
console.log(res);
