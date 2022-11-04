import styles from '../ToDo.module.css'
import { Grid, IconButton } from '@mui/material'
import {
  DeleteOutline,
  EditOutlined,
  ExpandMore,
  CheckCircleOutline,
  ExpandLess,
} from '@mui/icons-material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import { addPriority, removePriority, removeToDo } from 'redux/Actions/toDo'
import { useDispatch, useSelector } from 'react-redux'

function ActionArea({ children, ...rest }) {
  return (
    <Grid className={styles.ActionArea} {...rest}>
      {children}
    </Grid>
  )
}

function ActionButton({ children, ...rest }) {
  return (
    <IconButton {...rest} className={styles.ActionButton}>
      {children}
    </IconButton>
  )
}

export default function ActionPaper({ openAction, isOpen, priority, toDo }) {
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

      <ActionButton onClick={null}>
        <CheckCircleOutline />
      </ActionButton>

      <ActionButton onClick={openAction}>{isOpen ? <ExpandLess /> : <ExpandMore />}</ActionButton>

      <ActionButton onClick={() => dispatch(removeToDo(state, toDo))}>
        <DeleteOutline />
      </ActionButton>

      {/* <ActionButton onClick={onClick} >
        {icon}
      </ActionButton> */}
    </ActionArea>
  )
}
