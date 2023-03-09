import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import OrangeLink from './OrangeLink'

test('is orange link render properly', async () => {
    render(
        <BrowserRouter>
            <OrangeLink to='/our-albums' />
        </BrowserRouter>,
    )

    const link = screen.getByLabelText('link')

    userEvent.click(link)
    expect(window.location.pathname).toBe('/our-albums')
})
