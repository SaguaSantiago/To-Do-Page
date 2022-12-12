import styles from './ToDo.module.css'

import { Grid, Paper, Typography } from '@mui/material'

import { StyledDiv, StyledPaper, ToDoTitle } from './styledComponents'
import ActionPaper from './ActionArea'

import useToggle from 'hooks/useToggle'

export default function ToDo(props) {
  const { title, desc, priority, id, deleteAction } = props
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
                deleteAction={deleteAction}
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
              transition: 'all 1s',
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
