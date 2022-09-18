import styles from '../ToDo.module.css'
import { Grid, IconButton } from '@mui/material'
import {
  DeleteOutline,
  EditOutlined,
  ExpandMore,
  CheckCircleOutline,
  ExpandLess,
} from '@mui/icons-material'

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

export default function ActionPaper({ openAction, isOpen }) {
  return (
    <ActionArea item sm={4}>
      <ActionButton onClick={null}>
        <EditOutlined />
      </ActionButton>

      <ActionButton onClick={null}>
        <CheckCircleOutline />
      </ActionButton>

      <ActionButton onClick={openAction}>{isOpen ? <ExpandLess /> : <ExpandMore />}</ActionButton>

      <ActionButton onClick={null}>
        <DeleteOutline />
      </ActionButton>

      {/* <ActionButton onClick={onClick} >
        {icon}
      </ActionButton> */}
    </ActionArea>
  )
}
