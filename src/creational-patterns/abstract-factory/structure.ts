abstract class Factory {
  abstract createProduct(): Product;
}

class ConcreteFooFactory extends Factory {
  createProduct(): FooProduct {
    const product = new FooProduct('bar', 'bar');

    return product;
  }
}

class ConcreteBazFactory extends Factory {
  createProduct(): BazProduct {
    const product = new BazProduct('bar', 'bar');

    return product;
  }
}

abstract class Product {
  constructor(name: string) {
    this.name = name;
  }

  name: string;
}

class FooProduct extends Product {
  constructor (name: string, foo: string) {
    super(name);
    this.foo = foo;
  }

  foo: string;
}

class BazProduct extends Product {
  constructor(name: string, baz: string) {
    super(name);
    this.baz = baz;
  }

  baz: string;
}

