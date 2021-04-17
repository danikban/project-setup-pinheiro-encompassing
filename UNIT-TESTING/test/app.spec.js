const assert = require('assert');
const {expect} = require('chai');
const {add,sub,mul,div} = require('../src/app');

describe('the add/multiply functions', () => {
    it("should add 2+2=4",() =>{
        const result = add(2,2);
        assert.strictEqual(result,4);
    });
    it("handle only 2 as a parameter for add 2+0=2",() =>{
        const result = add(2);
        assert.strictEqual(result,2);
    });
    it("One value only for mul is always 0",() =>{
        const result = mul(2);
        assert.strictEqual(result,0);
    });
    it("should be equal to 0 for no values",() =>{
        const result = add();
        assert.strictEqual(result,0);
    });
    it("Negative numbers should be handled correctly",() =>{
        const result = mul(-1,3);
        assert.strictEqual(result,-3);
    });
});

describe('the subtract/divide functions', () => {
    it("should subtract 4-2=2",() =>{
        const result = sub(4,2);
        assert.strictEqual(result,2);
    });
    it("handle only 2 as a parameter for subtract 2-0=2",() =>{
        const result = sub(2);
        assert.strictEqual(result,2);
    });
    it("should be equal to 0 for no values",() =>{
        const result = sub();
        assert.strictEqual(result,0);
    });
    it("Negative numbers should be handled correctly (division)",() =>{
        const result = div(-3,-3);
        assert.strictEqual(result,1);
    });
    it("Negative and positive numbers (divided) should be handled correctly",() =>{
        const result = div(-3,3);
        assert.strictEqual(result,-1);
    });
    
});

