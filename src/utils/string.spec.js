import { string } from "./string"

test('lowerCaseTest', () => {
    const { snakeCase } = string()
    const resultSnake = snakeCase('Woda')
    expect(resultSnake).toBe('woda')
})
