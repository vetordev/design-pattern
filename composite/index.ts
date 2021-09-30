/**
 * Não implementa o gerenciamento de filhos
 * Por padrão, tentar gerenciá-los deve retornar uma exceção
 */
abstract class Component {

    add(component: Component): void {
        throw new Error("");
    }

    remove(component: Component): void {
        throw new Error("");
    }

    get(index: number): Component | undefined {
        throw new Error("");
    }

    isComposite(): boolean {
        return false;
    }

    abstract operation(): void
}

/**
 * Implementa o gerenciamento de filhos
 * Permite a composição de componentes
 */
abstract class Composite extends Component {

    protected components: Array<Component> = new Array<Component>();

    add(component: Component): void {
        this.components.push(component);
    }

    remove(component: Component): void {
        const index = this.components.indexOf(component);
        if (index > -1) this.components.slice(index, 1);
    }

    get(index: number): Component | undefined {
        return this.components[index];
    }

    isComposite(): boolean {
        return true;
    }
}
