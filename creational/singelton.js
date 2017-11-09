//a simeple scoped singelton using es2015 class syntax.
let instance;

class MySingelton {
  constructor() {
    if (!instance) instance = this;

    this._num = Math.random();
    return instance;
  }

  getNum() {
    return this._num;
  }
}

let singeltonA = new MySingelton();
let singeltonB = new MySingelton();

console.log(singeltonA.getNum() === singeltonB._num);

