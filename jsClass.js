// class
// dziedziczenia
// consturctor
// metody
// statyczne metody
// get

//Point - constructor współrzedne + metoda pointsInfo()
//ColorPoint - Point + zmienna color


class Animal {

  constructor(name) {
     this.name = name
     if (Animal.number === undefined) {
       Animal.number = 1;
     } else {
       Animal.number++;
     }
  }
  speak() {
    console.log(this.name + " makes sound ");
  }

  static eat() {
    console.log('Eat something');
  }

  static animalNumber() {
    console.log('animalNumber: ' + Animal.number);
  }

  info() {
    return 'Info about animal.';
  }

  get age() {
    console.log('Getter age');
  }

  set age(age) {
    console.log('Setter age');
  }

}

class Cat extends Animal {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  speak() {
    console.log(this.name+ ' speaks miau');
  }
}

var cat = new Cat('Kot', 12);
cat.age = 120;
cat.speak();

console.log(cat.info());
console.log(cat.age);

// var catAnimal = new Animal('Mruczek');
// var dogAnimal = new Animal('Azor');
// catAnimal.speak();
// Animal.animalNumber();
