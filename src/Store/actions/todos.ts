import { ThunkType } from '..'

export type ActionType =
    | {
          type: 'ADD_TODOS'
          name: string
      }
    | {
          type: 'DEL_TODOS'
          id: number
      }
    | {
          type: 'CHECK_TODOS'
          id: number
      }
export const addTodos = (name: string): ThunkType => {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: 'ADD_TODOS',
                name,
            })
        }, 1000)
    }
}
export const delTodos = (id: number): ActionType => {
    return {
        type: 'DEL_TODOS',
        id,
    }
}
export const checkTodos = (id: number): ActionType => {
    return {
        type: 'CHECK_TODOS',
        id,
    }
}
