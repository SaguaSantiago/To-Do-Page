// import CustomButton from 'Components/CustomComponents/CustomButton'
// import ToDo from 'Components/ToDo'
import { useSelector } from 'react-redux'
import { Grid, styled, Paper } from '@mui/material'
import Filters from 'Components/Filters'
import SearchBar from 'Components/SearchBar'
import ToDo from 'Components/ToDo'
import NewToDoForm from 'Components/NewToDoForm'
import { sharingInformationService } from 'services/sharing-information'
import useToggle from 'hooks/useToggle'
import { useEffect } from 'react'
import useStartApp from 'hooks/useStartApp'

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
`

export default function MainRoute() {
  const toDos = useSelector((state) => state.toDos)
  const filter = useSelector((state) => state.filter)
  const [isAdding, setIsAdding] = useToggle()
  const Suscription$ = sharingInformationService.getSubject()
  useStartApp()

  useEffect(() => {
    Suscription$.subscribe((data) => {
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
            <ToDoList item xs={12}>
              {toDos.allTodos &&
                filter === 'all' &&
                toDos.allTodos.map((props) => <ToDo key={props.id} {...props} />)}
              {toDos.priorities &&
                toDos.priorities.map((props) => <ToDo key={props.id} {...props} />)}
            </ToDoList>
          </Grid>
        </ToDosContainer>
      </Grid>
    </>
  )
}
