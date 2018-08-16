/// <reference path="./Espreso.ts" />
/// <reference path="./Caramel.ts" />
namespace program {
  export class Program {
    constructor() {
      const espreso_cup = new Espreso();
      const coffee1 = new Caramel(espreso_cup);
      console.log(coffee1.Cost());
    }
  }
}
new program.Program();
