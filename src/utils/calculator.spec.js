import { calculator } from './calculator'

test('is sum function return proper value', () => {
    const { sum } = calculator()
    const a = 5
    const b = 3
    const resultSum = sum(a, b)
    expect(resultSum).toBe(a + b)
})
// Przykładowy test działań kalkulatora
test('is difference function return proper value', () => {
    const { difference } = calculator()
    const resultDifference = difference(5, 1)
    expect(resultDifference).toBe(4)
})
test('is power function return proper value', () => {
    const cal = calculator()
    const resultPower = cal.power(2, 2)
    expect(resultPower).toBe(4)
})


// TODO Add tests for all calculator utils
