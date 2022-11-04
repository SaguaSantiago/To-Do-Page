export const SaveInStorage = (state, newToDo) => {
    if (localStorage.getItem('To dos')) {
        localStorage.removeItem('To dos')
        localStorage.setItem(
          'To dos',
          JSON.stringify({ ...state, allTodos: [...state.allTodos, newToDo] }),
        )
      } else {
        localStorage.setItem(
          'To dos',
          JSON.stringify({ ...state, allTodos: [...state.allTodos, newToDo] }),
        )
      }
}