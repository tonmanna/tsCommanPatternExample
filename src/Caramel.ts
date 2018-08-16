/// <reference path="./AddonDecorator.ts" />
/// <reference path="./Beverage.ts" />
namespace program {
  export class Caramel implements AddonBeverage {
    beverage: Beverage;
    constructor(b: Beverage) {
      this.beverage = b;
    }

    Cost(): number {
      return this.beverage.Cost() + 2;
    }
  }
}
