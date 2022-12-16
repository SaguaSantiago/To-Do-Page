export const SaveInStorage = (newState) => {
  if (localStorage.getItem('To dos')) {
    localStorage.removeItem('To dos')
    localStorage.setItem('To dos', JSON.stringify(newState))
  } else {
    localStorage.setItem('To dos', JSON.stringify(newState))
  }
}
