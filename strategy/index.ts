/**
 * Estratégias comuns de implementação
 */

abstract class Context<T extends Strategy> {

    protected readonly strategy: T

    constructor(strategy: T) {
        this.strategy = strategy;
    }

    /**
     * Pode (ou deve) executar algum procedimento antes ou depois da estratégia
     */
    contextInterface() {
        this.strategy.algorithInterface();
    }
}

abstract class Strategy {
    abstract algorithInterface(): void;
}


class ClientContext extends Context<ClientStrategy> {

    contextInterface() {
        super.contextInterface();
    }
}

class ClientStrategy extends Strategy {

    algorithInterface() {
        console.log('Small interface algorith...')
    }
}

/**
 * Permite a um contexto (cliente) aproveitar de diferentes estratégias de
 * uma implementação comum (formatar texto, enviar mensagem etc)
 * 
 * Com composição de objetos, é possível alterar a estratégia de um contexto em tempo de 
 * execução. Em alguns casos, um contexto pode implementar múltiplas estratégias
 */
