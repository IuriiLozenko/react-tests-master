import { render, screen } from '@testing-library/react'
import NavBar from './NavBar'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

test('click to the button', () => {
    render(
        <BrowserRouter>
            <NavBar />
        </BrowserRouter>,
    )
    const homeLink = screen.getByText(/home/i)
    expect(homeLink).toBeInTheDocument()

    const employeeList = screen.getByText(/employee list/i)

    userEvent.click(employeeList)
    expect(window.location.pathname).toBe('/employees-list')
})
