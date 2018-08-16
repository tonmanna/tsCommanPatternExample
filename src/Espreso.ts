/// <reference path="./Beverage.ts" />
namespace program {
  export class Espreso implements Beverage {
    Cost(): number {
      return 1;
    }
  }
}
