import React from 'react'
import {
    render,
    screen,
    waitForElementToBeRemoved,
} from '@testing-library/react'
import OurAlbums from './OurAlbums'

test('album data has been fetched properly', async () => {
    render(<OurAlbums></OurAlbums>)

    const loader = screen.getByLabelText('loading...')
    expect(loader).toBeInTheDocument()

    await waitForElementToBeRemoved(loader)
    // expect(await screen.findByText(/The greatest hits/i)).toBeInTheDocument()
    expect(screen.getByText('The greatest hits')).toBeInTheDocument()
})
