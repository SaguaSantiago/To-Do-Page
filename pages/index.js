import { useEffect } from 'react'
import useToggle from 'hooks/useToggle'
import useStartApp from 'hooks/useStartApp'

import { useSelector } from 'react-redux'

import { Grid, styled } from '@mui/material'
import { createToDoService } from 'services/sharing-information'

import { ToastContainer } from 'react-toastify'

import Filters from 'Components/Filters'
import SearchBar from 'Components/SearchBar'
import ToDo from 'Components/ToDo'
import NewToDoForm from 'Components/NewToDoForm'

const ToDosContainer = styled(Grid)(
  ({ theme }) => `
  height: 70vh;
  padding: 10px 0;
  border: solid 3px ${theme.palette.primary.main};
  border-radius: 10px;
  position:relative;
`,
)

const ToDoList = styled(Grid)`
  display: flex;
  flex-direction: column-reverse;
  gap: 15px;
  overflow: auto;
  max-height: calc(70vh - 145px);
`

export default function MainRoute() {
  const toDos = useSelector((state) => state.toDos)
  const filter = useSelector((state) => state.filter)
  const [isAdding, setIsAdding] = useToggle()
  const createToDoSuscription$ = createToDoService.getSubject()
  useStartApp()

  useEffect(() => {
    createToDoSuscription$.subscribe((data) => {
      if (!!data) {
        setIsAdding(true)
      } else setIsAdding(false)
    })
  })

  return (
    <>
      <Grid container sx={{ width: '100vw', zIndex: 2 }} justifyContent='center'>
        <Grid item xs={12}>
          <SearchBar />
        </Grid>
        <ToDosContainer item xs={12} sm={8}>
          <NewToDoForm open={isAdding} />
          <Grid container justifyContent='center' gap={2}>
            <Grid item xs={12}>
              <Filters />
            </Grid>
            <ToDoList item xs={11}>
              {toDos.searched.allTodos !== undefined
                ? toDos.searched.allTodos.map((props) => <ToDo key={props.id} {...props} />)
                : toDos.allTodos &&
                  filter === 'all' &&
                  toDos.allTodos.map((props) => <ToDo key={props.id} {...props} />)}
              {toDos.searched.allTodos !== undefined
                ? toDos.searched.priorities.map((props) => <ToDo key={props.id} {...props} />)
                : toDos.priorities &&
                  filter !== 'ready' &&
                  toDos.priorities.map((props) => <ToDo key={props.id} {...props} />)}
              {toDos.searched.allTodos !== undefined
                ? toDos.searched.ready.map((props) => <ToDo key={props.id} {...props} />)
                : toDos.priorities &&
                  filter === 'ready' &&
                  toDos.ready.map((props) => <ToDo key={props.id} {...props} />)}
            </ToDoList>
          </Grid>
        </ToDosContainer>
      </Grid>
      <ToastContainer
        position='top-right'
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme='light'
      />
    </>
  )
}
