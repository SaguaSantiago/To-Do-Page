import { Grid, IconButton, Paper, styled, Typography } from '@mui/material'
import styles from './ToDo.module.css'
import useToggle from 'hooks/useToggle'
import ActionPaper from './ActionArea'
function StyledDiv({ children, ...rest }) {
  return (
    <div {...rest} className={styles.StyledDiv}>
      {children}
    </div>
  )
}

function StyledPaper({ children, className, ...rest }) {
  return (
    <Paper className={className + ' ' + styles.StyledPaper} {...rest}>
      {children}
    </Paper>
  )
}

function ToDoTitle({ children, ...rest }) {
  return (
    <Typography className={styles.ToDoTitle} {...rest}>
      {children}
    </Typography>
  )
}

export default function ToDo(props) {
  const { title, desc, priority, id } = props
  const [toDoOpen, setToDoOpen] = useToggle()
  return (
    <Grid container justifyContent='center' sx={{ width: '100%' }}>
      <Grid item xs={12} md={7}>
        <StyledDiv>
          <StyledPaper sx={{ padding: '0 10px' }}>
            <Grid sx={{ height: '100%' }} container alignItems='center'>
              <Grid item>
                <ToDoTitle>{title}</ToDoTitle>
              </Grid>
              <ActionPaper
                priority={priority}
                toDo={props}
                isOpen={toDoOpen}
                openAction={setToDoOpen}
              />
            </Grid>
          </StyledPaper>
        </StyledDiv>
        <Grid sx={{ margin: '0 auto', width: '100%' }} item>
          <Paper
            className={toDoOpen ? styles.ToDoOpen : styles.ToDoClosed}
            sx={{
              borderTopLeftRadius: '0',
              borderTopRigthRadius: '0',
              transition: 'max-height 1s',
            }}
            elevation={1}
          >
            <Typography paragraph>{desc}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  )
}
