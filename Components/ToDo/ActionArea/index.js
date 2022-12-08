import {
  DeleteOutline,
  ExpandMore,
  CheckCircleOutline,
  ExpandLess,
} from '@mui/icons-material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import { addPriority, removePriority, removeToDo, setReady } from 'redux/Actions/toDo'
import { ActionButton, ActionArea } from '../styledComponents'

import { useDispatch, useSelector } from 'react-redux'

export default function ActionPaper({ openAction, isOpen, priority, toDo, deleteAction }) {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.toDos)
  const priorityToggle = () => {
    if (!priority) dispatch(addPriority(state, toDo))
    else dispatch(removePriority(state, toDo))
  }

  return (
    <ActionArea item sm={4}>
      <ActionButton onClick={priorityToggle}>
        {priority ? <BookmarkIcon /> : <BookmarkBorderIcon />}
      </ActionButton>

      <ActionButton onClick={() => dispatch(setReady(state, toDo))}>
        <CheckCircleOutline />
      </ActionButton>

      <ActionButton onClick={openAction}>{isOpen ? <ExpandLess /> : <ExpandMore />}</ActionButton>

      <ActionButton onClick={deleteAction ? deleteAction : () => dispatch(removeToDo(state, toDo))}>
        <DeleteOutline />
      </ActionButton>
    </ActionArea>
  )
}
