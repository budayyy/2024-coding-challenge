// 2024-CODING-CHALLENGE
// 360/366
// https://www.codewars.com/kata/547274e24481cfc469000416

class Human {
  constructor(name) {
    this.name = name;
  }
}

class Man extends Human {
  constructor(name) {
    super(name);
  }
}

class Woman extends Human {
  constructor(name) {
    super(name);
  }
}

class God {
  /**
   * @returns Human[]
   */
  static create() {
    return [new Man("Adam"), new Woman("Eve")];
  }
}

console.log(God.create());
