import { useState } from 'react'

const ToDo = () => {
    const [todoValue, setTodoValue] = useState('')
    const [todoList, setTodoList] = useState<{ value: string }[]>([])
    const handlInputChange = (event: any) => {
        setTodoValue(event.target.value)
    }

    const handleSubmit = () => {
        setTodoList(prevState => [...prevState, { value: todoValue }])
        setTodoValue('')
    }

    return (
        <div>
            <input type="text" value={todoValue} onChange={handlInputChange} />
            <button onClick={handleSubmit}>submit</button>
            {todoList.map(item => item.value && <li>{item.value}</li>)}
        </div>
    )
}
export default ToDo
