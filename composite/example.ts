 abstract class Graphic {

    add(graphic: Graphic): void {
        throw new Error("");
    }

    remove(graphic: Graphic): void {
        throw new Error("");
    }

    get(index: number): Graphic | undefined {
        throw new Error("");
    }

    isComposite(): boolean {
        return false;
    }

    abstract draw(): void
}

abstract class CompositeGraphic extends Graphic {

    protected graphics: Array<Graphic> = new Array<Graphic>();

    add(graphic: Graphic): void {
        this.graphics.push(graphic);
    }

    remove(graphic: Graphic): void {
        const index = this.graphics.indexOf(graphic);
        if (index > -1) this.graphics.slice(index, 1);
    }

    get(index: number): Graphic | undefined {
        return this.graphics[index];
    }

    isComposite(): boolean {
        return true;
    }
}

class Rectangle extends Graphic {
    draw() {
        console.log('Drawing this rectangle...')
    }
}

class Table extends CompositeGraphic {
    draw() {
        console.log("Drawing this table...")
        for (const graphic of this.graphics) {
            graphic.draw();
        }
    }
}

function main() {

    const rectangle = new Rectangle();
    const table = new Table();

    table.add(new Rectangle());

    /**
     * Simulando a implementação recebendo um componente qualquer
     */
    let component: Graphic = rectangle;

    component.draw();

    component = table;

    if (component.isComposite()) {
        component.add(new Rectangle())
    }

    component.draw();
}
main()


/**
 * Um equipamento e um conjunto dele, devem implementar uma mesma interface,
 * permitindo ao cliente, por exemplo, tratar um 
 * módulo de RAM, e os módulos totais da mesma maneira. Pra quem consome, ter uma PEÇA
 * e um conjunto de PEÇAS (um componente e uma composição de componentes), seria a mesma coisa.
 */