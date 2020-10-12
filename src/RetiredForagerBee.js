/*

RetiredForagerBee = Subclass of ForagerBee (superclass)
Implement in ES6 style (use class, extends, super keywords)

*/

class RetiredForagerBee extends ForagerBee {
  constructor() {
    // Calls the ForagerBee superclass
    super();

    this.age = 40;
    this.job = 'gamble';
    this.color = 'grey'
    this.canFly = false;
    // treasureChest property in
  }

  // Add new RetiredForagerBee methods
  forage() {
    return 'I am too old, let me play cards instead';
  }

  gamble(treasure) {
    this.treasureChest.push(treasure);
  }
};
