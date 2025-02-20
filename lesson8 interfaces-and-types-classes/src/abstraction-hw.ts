abstract class Person {
    constructor(public name: string, public email: string) {}
    abstract getInfo(): string;
  }
  
  class Customer extends Person {
    constructor(name: string, email: string, public city: string) {
      super(name, email);
    }
    getInfo(): string {
      return `Customer: ${this.name}, Email: ${this.email}, City: ${this.city}`;
    }
  }
  
  export { Person, Customer };