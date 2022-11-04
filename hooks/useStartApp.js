import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { StartApp } from 'redux/Actions/toDo'

export default function useStartApp() {
  const dispatch = useDispatch()
  useEffect(() => {
    let storageToDos = localStorage.getItem('To dos')
    if (storageToDos) {
      dispatch(StartApp(JSON.parse(storageToDos)))
    }
  }, [])
}
