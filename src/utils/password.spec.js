import { isStrongPassword } from './password'

// test spradwdzający siłę hasła
test('is isStrongPassword return false', () => {
    const password = isStrongPassword('123')
    expect(password).toBeFalsy()
})
// test sprawdzający ilość znaków
test('is isStrongPassword has to be minimum 6 characters', () => {
    expect(isStrongPassword('A@!SAfs1')).toBe(true)
})
// test sprawdzający czy haslo jest mocne
test('is isStrongPassword return true', () => {
    const password = isStrongPassword('Probl#m1')
    expect(password).toBeTruthy()
})
// czy hasło jest wystarczjąco mocne
describe('isStrongPassword check is allow strong passwords', () => {
    const allowedPasswords = [
        'Probl#m1',
        'A@!SAfs1',
        'A@!SAfs134',
        'A!@#@SAfs1',
    ]
    allowedPasswords.forEach(pass => {
        it(`${pass} should be allow`, () => {
            expect(isStrongPassword(pass)).toBeTruthy()
        })
    })
})
// czy haslo jest słabe
describe('isStrongPassword disallow weak password', () => {
    const allowedPasswords = [
        '#m1',
        'Afs1',
        'fs134',
        'fs1',
    ]
    allowedPasswords.forEach(pass => {
        it(`${pass} should be allow`, () => {
            expect(isStrongPassword(pass)).toBeFalsy()
        })
    })
})

