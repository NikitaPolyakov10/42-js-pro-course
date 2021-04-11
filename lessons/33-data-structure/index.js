const quickSort = (array) => {
  const newArray = [...array];
  if (newArray.length <= 1) {
    return newArray;
  }

  let index = Math.floor(newArray.length / 2);
  let element = newArray[index];
  let less = [];
  let greater = [];

  for (let i = 0; i < newArray.length; i++) {
    if (i === index) {
      continue;
    }

    if (newArray[i].order < element.order) {
      less.push(newArray[i]);
    } else {
      greater.push(newArray[i]);
    }
  }

  return [...quickSort(less), element, ...quickSort(greater)];
};

const toFlat = (array) => {
  let queue = [...array];
  let result = [];
  while (queue.length) {
    let curr = queue.pop();
    if (Array.isArray(curr)) {
      queue.push(...curr);
    } else {
      result.push(curr);
    }
  }
  return result.reverse();
};

const binarySearch = (array, searchValue) => {
  let start = 0;
  let end = array.length;
  let mid;
  let found = false;

  while (found === false && start <= end) {
    mid = Math.floor((start + end) / 2);

    if (array[mid].amount === searchValue) {
      found = true;
      return array[mid];
    }

    if (searchValue < array[mid].amount) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return array[mid];
};

class HashTable {
  static getKeyByName(name) {
    return name.charCodeAt(0);
  }
  constructor() {
    this.map = new Map();
  }
  add(value) {
    const key = HashTable.getKeyByName(value.name);
    if (!this.map.has(key)) {
      this.map.set(key, new Map());
    }
    this.map.get(key).set(key, value);
    return key;
  }
  find(name) {
    const key = HashTable.getKeyByName(name);
    const employeesMap = this.map.get(key);
    if (!employeesMap) {
      return;
    }

    return Array.from(employeesMap.values()).find((item) => item.name === name);
  }
  removeByName(name) {
    const key = HashTable.getKeyByName(name);
    let employeesMap = this.map.get(key);
    if (!employeesMap) {
      return;
    }
    return this.map.set(
      key,
      Array.from(employeesMap).filter((item) => item.name !== name)
    );
  }
}

module.exports = {
  quickSort,
  toFlat,
  binarySearch,
  HashTable,
};
