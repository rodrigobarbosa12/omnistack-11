const generateUniqueId = require('../../src/utils/generateUniqueId');

/**
 * Primeiro parametro é o nome da categoria do teste
 */
describe('Primeiro teste', () => {
    it('Soma dois valores', () => {
        expect(2 + 2).toBe(4)
    })
});

describe('Generate Unique ID', () => {
    it('Deve gerar um Id com 8 caracteres', () => {
        const id = generateUniqueId();
        expect(id).toHaveLength(8);
    })
});