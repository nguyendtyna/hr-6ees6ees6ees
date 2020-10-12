/*

HoneyMakerBee = Subclass of Bee (superclass)
Implement in ES6 style (use class, extends, super keywords)

*/

class HoneyMakerBee extends Bee {
  constructor() {
    // Override the constructor, pass args for base class
    super();

    this.age = 10;
    this.job = 'make honey';
    this.color = 'yellow';

    // Add new HoneyMakerBee properties
    this.honeyPot = 0;
  }

  // Add new HoneyMakerBee methods
  makeHoney() {
    // Increment honeyPot value by 1
    this.honeyPot++;
  }

  giveHoney() {
    // Decreemnt honeyPot value by 1
    this.honeyPot--;
  }
};
