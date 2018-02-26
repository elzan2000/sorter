class sorter {
  constructor() {
    this.sorter = [];
  }

  add(element) {
    this.sorter.push(element);
  }

  at(index) {
    return this.sorter[index];
  }

  get length() {
    return this.sorter.length;
  }

  toArray() {
    return this.sorter;
  }

  sort(indices) {
    var array1 = this.sorter.slice(indices[0], indices.length+indices[0]);
array1.sort();
this.sorter.splice(indices[0],indices.length, ...array1);

  }

  setComparator(compareFunction) {
 this.sorter.sort((function(a,b){return a - b;}));
  }
}

module.exports = sorter;