export default class Car {
  constructor(brand, model, color) {
    this._brand = brand;
    this._model = model;
    this._color = color;
  }

  cloneCar() {
    const clone = new this.constructor();
    const symbols = Object.getOwnPropertySymbols(this);
    symbols.forEach((symbol) => {
      clone[symbol] = this[symbol];
    });
    return clone;
  }
}
