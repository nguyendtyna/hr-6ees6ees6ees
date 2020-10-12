/*

ForagerBee = Subclass of Bee (superclass)
Implement in ES6 style (use class, extends, super keywords)

*/

class ForagerBee extends Bee {
  constructor() {
    // Calls the Bee superclass
    super();

    this.age = 10;
    this.color = 'yellow';
    this.job = 'find pollen';

    // Add new ForagerBee properties
    this.canFly = true;
    this.treasureChest = [];
  }

  // Add new ForagerBee methods
  forage(treasure) {
    this.treasureChest.push(treasure);
  }
};
