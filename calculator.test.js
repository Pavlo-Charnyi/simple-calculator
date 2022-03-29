import { describe, it, expect } from 'vitest'
import { SimpleCalc } from './SimpleCalc.js';

describe('calculator', () => {
    it('should add numbers', () => {
        let calculator = new SimpleCalc()
        let result = calculator.add(5, 10)
        expect(result).toBe(15)
    })
    it('should subtract numbers', () => {
        let calculator = new SimpleCalc()
        let result = calculator.subtract(20, 10)
        expect(result).toBe(10)
    })
    it('should multiply numbers', () => {
        let calculator = new SimpleCalc()
        let result = calculator.multiply(5, 10)
        expect(result).toBe(50)
    })
    it('should divide numbers', () => {
        let calculator = new SimpleCalc()
        let result = calculator.divide(10, 5)
        expect(result).toBe(2)
    })

})

/* let calculator = new SimpleCalc()

console.log (calculator.add(16, 4))
console.log (calculator.subtract(20, 10))
console.log (calculator.multiply(5, 5))
console.log (calculator.divide(8, 2)) */