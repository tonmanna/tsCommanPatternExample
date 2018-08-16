/// <reference path="./Beverage.ts" />
namespace program {
  export abstract class AddonBeverage implements Beverage {
    abstract Cost(): number;
  }
}
