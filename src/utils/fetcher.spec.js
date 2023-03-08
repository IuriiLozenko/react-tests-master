import { fetcher } from './fetcher'

beforeEach(() => {
    fetch.resetMocks()
})

test('conerts correctly', async () => {
    fetch.mockResponseOnce(
        JSON.stringify({
            name: 'Luke Skywalker',
            height: '172',
            mass: '77',
            hair_color: 'blonde',
        }),
    )
    const data = await fetcher()

    expect(data).toEqual(
        expect.objectContaining({
            name: 'Luke Skywalker',
        }),
    )
})
