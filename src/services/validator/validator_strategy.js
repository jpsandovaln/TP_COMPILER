class ValidatorStrategy {
    constructor() {
        if (this.constructor === ValidatorStrategy) {
          throw new Error('Abstract class connot be instantiated');
        }
    }
    
    validate() {
        throw new Error('Method validate must be implemented');
    }
}
    
module.exports = ValidatorStrategy;
