import { ActionType } from '../actions/todos'

export type todoTypes = {
    id: number
    name: string
    done: boolean
}[]
const initVal: todoTypes = [{ id: 1, name: '吃饭', done: false }]
const todos = (state = initVal, action: ActionType) => {
    if (action.type === 'ADD_TODOS') {
        return [
            ...state,
            {
                id: Date.now(),
                name: action.name,
                done: false,
            },
        ]
    }
    if (action.type === 'DEL_TODOS') {
        return state.filter(item => item.id !== action.id)
    }
    if (action.type === 'CHECK_TODOS') {
        return state.map(item => {
            if (item.id === action.id) {
                return {
                    ...item,
                    done: !item.done,
                }
            } else {
                return item
            }
        })
    }
    return state
}
export default todos
