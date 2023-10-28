class Key {
  constructor(private signature = Math.random()) {}

  public getSignature(this: Key): number {
    return this.signature;
  }
}

const key = new Key();

class Person {
  constructor(private key: Key) {}

  public getKey(this: Person): Key {
    return key;
  }
}

class House {
  constructor(public key: Key) {}

  public door: boolean = false;
  public tenants: Array<Person> = [];

  public comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
    }
  }

  public openDoor(key: Key): void {}
}

class MyHouse extends House {
  public openDoor(key: Key): void {
    this.key.getSignature() === key.getSignature()
      ? (this.door = true)
      : (this.door = false);
  }
}

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
