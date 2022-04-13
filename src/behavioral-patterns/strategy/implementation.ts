abstract class Composition<T extends CompositorStrategy> {

    protected readonly strategy: T;

    public charCount: number;
    public lineWidth: number;
    protected breakCount: number;

    constructor(strategy: T, charCount: number, lineWidth: number) {
        this.strategy = strategy;
        this.charCount = charCount;
        this.lineWidth = lineWidth;
    }

    repair() {
        this.breakCount = this.strategy.compose(this);
    }
}

abstract class CompositorStrategy {
    abstract compose(composition: Composition<this>): number;
}

class TextComposition extends Composition<TextCompositorStrategy> {

    repair() {
        super.repair();

        console.log('Break lines count -> ', this.breakCount);
    }
}

class TextCompositorStrategy extends CompositorStrategy {
    compose(composition: Composition<this>): number {
        return composition.charCount / composition.lineWidth;
    }
}

function main() {
    const textComposition = new TextComposition(new TextCompositorStrategy(), 60, 30);

    textComposition.repair();
}

main();

/**
 * Context pode repassar quaisquer dados comuns para implementações Strategy,
 * através de argumentos. Porém, Context pode acabar repassando dados desnecessários
 * a Strategy
 * Em contra partida, Context pode passar a si mesmo como argumento, o que exige uma interface 
 * mais elaborada para seus dados, acoplando Context e Strategy fortemente, mas evitando que
 * dados desnecessários sejam repassados a Strategy
 * 
 * Strategy aumentam o número de objetos de uma aplicação, mantê-los como membros sem estados
 * pode ser uma alternativa viável para o sistema
 */