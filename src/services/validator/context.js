class Context {
    constructor(strategies) {
        this.strategies = strategies;
    }

    validate() {
        this.strategies.forEach(strategy => {
            strategy.validate();
        });
    }
}

module.exports = Context;
