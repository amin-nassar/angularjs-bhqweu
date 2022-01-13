export default function () {
  this.history = [];
  this.add = function (stateName) {
    this.history.push(stateName);
  };
  this.clear = function () {
    this.history = [];
  };
}
