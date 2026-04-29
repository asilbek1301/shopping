class Person {
    static serialNumber = 34;

    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    introduce() {
      console.log(`My name is ${this.name} and I am ${this.age}`);
    }
    
    greet() {
      console.log('Hi, How do you do!');
    }

    static help() {
        console.log("I am a person class, how can I help you?");
    }
  }
  
  const person1 = new Person('Martin', 33);
  const person2 = new Person('David', 30);
  const person3 = new Person('Alan', 20);
  
  person1.greet();
  person1.introduce();
  person3.introduce();