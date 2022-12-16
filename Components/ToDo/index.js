import styles from './ToDo.module.css'

import { Grid, Paper, Tooltip, Typography } from '@mui/material'

import { StyledDiv, StyledPaper, ToDoTitle, ToDoTitleInDescription } from './styledComponents'
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
              <Grid item xs={5} sm={6}>
                <Tooltip title={title}>
                  <ToDoTitle fullwidth>{title}</ToDoTitle>
                </Tooltip>
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
              maxWidth: '100%',
            }}
            elevation={1}
          >
            <ToDoTitleInDescription>{title}</ToDoTitleInDescription>
            <p style={{ textAlign: 'center' }}>{desc}</p>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  )
}
