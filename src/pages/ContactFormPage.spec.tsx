import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import ContactFormPage from './ContactFormPage'
import userEvent from '@testing-library/user-event'

test('renders learn react link', async () => {
    window.alert = jest.fn()

    render(
            <ContactFormPage />
    )
    const firstNameInput = screen.getByText(/first name/i)
    userEvent.type(firstNameInput, 'Paweł')

    const surnameInput = screen.getByText(/surname/i)
    userEvent.type(surnameInput, 'Kowalski')

    const btnButton = screen.getByRole('button', {
        name: /submit/i,
    })
    userEvent.click(btnButton)

    await waitFor(() => {
        expect(window.alert).toHaveBeenCalledTimes(1)
    })
})
