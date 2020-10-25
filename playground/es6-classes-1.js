class Person {
  constructor(name = 'Anonymous', age = 'unknown'){
    this.name=name;
    this.age=age;
  } 

  getGreeting() {
    return `Hi. I am ${this.name}!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }

}

class Traveler extends Person {
  constructor(age, name, homeLocation) {
    super(age, name);
    this.homeLocation = homeLocation;
  }

  hasLocation() {
    return !!this.homeLocation + ` and it is called ${this.homeLocation}`;
  }

  getGr() {
    let greet = super.getGreeting();
    greet = `Hi. I am the new greeting and this is hello from ${this.name}!`;
    return greet
  } 

  };

const me = new Traveler('Wissam AJ', 26, 'Palestine');
console.log(me.hasLocation());
console.log(me.getGr());

const others=new Traveler();
console.log(others.hasLocation());
console.log(others.getGr());

