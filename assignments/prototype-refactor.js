/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

// function GameObject () {
//     this.createdAt = Date();
//     this.dimensions = ['length = 2','width = 1','height = 1'];  
    // this.destroy = function () {
    //   return(`${this.name} was removed from the game.`)
    // }
    //  }
     
    // GameObject.prototype.destroy = function () {
    //   return(`${this.name} was removed from the game.`)
    // }
  
    // GameObject.prototype.takeDamage = function () {
    //   return(`${this.name} took damage.`);
    // }
  
    // function CharacterStats (CharacterStats) {
    //  GameObject.call(this, CharacterStats);
    //  this.healthPoints = CharacterStats.healthPoints;
    //  this.name = CharacterStats.name;
  
    // }
    // GameObject.call(this, CharacterStats);
    // CharacterStats.prototype = Object.create(GameObject.prototype);
    // CharacterStats.prototype.takeDamage = function () {
    //   return(`${this.name} took damage.`);
    // }
  
    // function Humanoid (Humanoid) {
    //  CharacterStats.call(this, Humanoid);
    //  this.team = Humanoid.team;
    //  this.weapons = Humanoid.weapons;
    //  this.language = Humanoid.language;
  
    // }
   
    // Humanoid.prototype = Object.create(CharacterStats.prototype);
    // Humanoid.prototype.greet = function () {
    //   return(`${this.name} offers a greeting in ${this.language}.`) }
      
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  //teset
class GameObject {
    constructor(GameData) {
        this.createdAt = Date();
        this.dimensions = ['length = 2', 'width = 1', 'height = 1'];
    }
    destroy () {
        return(`${this.name} was removed from the game.`)
      }
}

class CharacterStats extends GameObject {
    constructor(CharacterStats) {
        super(CharacterStats);
        this.healthPoints = CharacterStats.healthPoints;
        this.name = CharacterStats.name;
    }
    takeDamage () {
        return(`${this.name} took damage.`);
}
}

class Humanoid extends CharacterStats {
    constructor(Humanoid) {
        super(Humanoid);
        this.team = Humanoid.team;
        this.weapons = Humanoid.weapons;
        this.language = Humanoid.language;   
    }
    greet () {
        return(`${this.name} offers a greeting in ${this.language}.`) }
}
  
//=======================================//
//=======================================//
//=======================================//

    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
   
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
     console.log(mage.createdAt); // Today's date
     console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
     console.log(swordsman.healthPoints); // 15
     console.log(mage.name); // Bruce
     console.log(swordsman.team); // The Round Table
     console.log(mage.weapons); // Staff of Shamalama
     console.log(archer.language); // Elvish
     console.log(archer.greet()); // Lilith offers a greeting in Elvish.
     console.log(mage.takeDamage()); // Bruce took damage.
     console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with 
    //
  