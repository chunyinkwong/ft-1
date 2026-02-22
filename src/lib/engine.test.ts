import { describe, it, expect } from 'vitest';
import { evaluate } from './engine';

describe('evaluate', () => {
    it('adds', () => {
        expect(evaluate('2+3')).toBe(5);
    });
    it('subtracts', () => {
        expect(evaluate('5-3')).toBe(2);
    });
    it('multiplies', () => {
        expect(evaluate('4*5')).toBe(20);
    });
    it('divides', () => {
        expect(evaluate('10/2')).toBe(5);
    });
    it('handles complex expressions', () => {
        expect(evaluate('1+2*3')).toBe(7);
    });
    it('handles parentheses', () => {
        expect(evaluate('(1+2)*3')).toBe(9);
    });
    it('handles decimals', () => {
        expect(evaluate('0.1+0.2')).toBeCloseTo(0.3);
    });
    it('handles negative numbers', () => {
        expect(evaluate('-1+2')).toBe(1);
    });
    it('throws on attempted code injection', () => {
        expect(() => evaluate('alert(1)')).toThrow();
    });
    it('throws on invalid expressions', () => {
        expect(() => evaluate('a+1')).toThrow();
    });
});
