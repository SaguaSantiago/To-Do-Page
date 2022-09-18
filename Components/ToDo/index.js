import { Grid, IconButton, Paper, styled, Typography } from '@mui/material'
import styles from './ToDo.module.css'
import { Check } from '@mui/icons-material'
import useToggle from 'hooks/useToggle'
import ActionPaper from './ActionArea'

const CheckButton = styled(IconButton)`
  background-color: white;
  height: 22px;
  width: 22px;
  border-radius: 2px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`
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

export default function ToDo() {
  const [isSelected, setIsSelected] = useToggle()
  const [toDoOpen, setToDoOpen] = useToggle()

  return (
    <Grid container justifyContent='center' sx={{ width: '100%', height: '100vh' }}>
      <Grid item xs={12} md={7}>
        <StyledDiv>
          <StyledPaper sx={{ padding: '0 10px' }}>
            <Grid sx={{ height: '100%' }} container alignItems='center'>
              <Grid item>
                <CheckButton onClick={setIsSelected}>{isSelected && <Check />}</CheckButton>
              </Grid>
              <Grid item>
                <ToDoTitle>Esto es un To Do</ToDoTitle>
              </Grid>
              <ActionPaper isOpen={toDoOpen} openAction={setToDoOpen} />
            </Grid>
          </StyledPaper>
        </StyledDiv>
        <Grid sx={{ margin: '0 auto' }} xs={12} md={6} item>
          <Paper
            className={toDoOpen ? styles.ToDoOpen : styles.ToDoClosed}
            sx={{
              borderTopLeftRadius: '0',
              borderTopRigthRadius: '0',
              transition: 'max-height 1s',
            }}
            elevation={1}
          >
            <Typography paragraph>
              asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  )
}
