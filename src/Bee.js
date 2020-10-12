/*

Bee = Subclass of Grub (superclass)
Implement in ES6 style (use class, extends, super keywords)

*/

class Bee extends Grub {
  constructor() {
    // Override the constructor, pass args that base class needs
    super ();

    this.age = 5;
    this.color = 'yellow';

    // Add new Bee properties
    this.job = 'Keep on growing';
  }
};
