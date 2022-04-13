/**
 * Declara o método fábrica e implementa funções comuns entre Creator's
 */
abstract class Creator {
  product: Product[] = [];

  abstract createProduct(): Product;

  newProduct() {
    const product = this.createProduct();
    product.execute();
  }
}

/**
 * Redefine o método fábrica para retornar uma instância apropriada de um product
 */
class ConcreteCreator extends Creator {
  createProduct(): ConcreteProduct {
    return new ConcreteProduct();
  }
}


/**
 * Define a interface de objetos que o método fábrica cria
 */
interface Product {
  execute(): void;
}

/**
 * Implementa a interface de Product
 */
class ConcreteProduct implements Product {

  execute() {
    console.log('foo - bar');
  }
}


/**
 * Métodos Fábrica Parâmetrizados
 */
enum ProductType {
  CONCRETE,
  FOO,
}

class FooProduct implements Product {
  execute() {
    console.log('baz');
  }
}

class DynamicCreator {
  create(type: ProductType): Product{
    switch(type) {
      case ProductType.FOO:
        return new FooProduct();

      case ProductType.CONCRETE:
      default:
        return new ConcreteProduct();
    }
  }
}