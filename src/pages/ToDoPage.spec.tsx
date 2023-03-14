import React from "react"
import ToDo from "./ToDoPage"
import { render, screen,  } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

test('is todo working properly', () => {
    render(<ToDo />)
//     const input = screen.getAllByRole(/name/i)
//     const submitBtn = screen.getAllByRole('button', {
//         name: /submit/i,
//     })
//     userEvent.type(input, 'ds1')
//     userEvent.click(submitBtn)

//     userEvent.type(input, 'ds2')
//     userEvent.click(submitBtn)

//     expect(screen.getByText(/ds1/i)).toBeInTheDocument()
//     expect(screen.getByText(/ds2/i)).toBeInTheDocument()

})