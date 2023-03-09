import { render, screen } from '@testing-library/react'
import ClickCounter from './ClickCounter'
import userEvent from '@testing-library/user-event'

test('click to the button redirect', () => {
    render(<ClickCounter />)
    const button = screen.getByText(/click me/i)
    expect(button).toBeInTheDocument()

    userEvent.click(button)
    expect(screen.getByText(/click me 1/i)).toBeInTheDocument()

    userEvent.dblClick(button)
    expect(screen.getByText(/click me 3/i)).toBeInTheDocument()
})
