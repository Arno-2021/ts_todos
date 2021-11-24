import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StoreType } from './Store'
import { addTodos, checkTodos, delTodos } from './Store/actions/todos'
export default function App() {
    const list = useSelector((state: StoreType) => state.todos)
    console.log(list)
    const [content, setContent] = useState('')
    const typeContent = (e: React.ChangeEvent<HTMLInputElement>) =>
        setContent(e.target.value)
    const dispatch = useDispatch()
    const subTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter') {
            dispatch(addTodos(content))
            setContent('')
        }
    }
    const del = (id: number) => {
        dispatch(delTodos(id))
    }
    return (
        <div>
            <input
                type='text'
                value={content}
                onChange={typeContent}
                onKeyUp={subTodo}
            />
            <br />
            <ul>
                {list.map(item => (
                    <li
                        key={item.id}
                        className={item.done ? 'complete' : ''}
                        onClick={() => dispatch(checkTodos(item.id))}
                    >
                        {item.name}
                        <button onClick={() => del(item.id)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
