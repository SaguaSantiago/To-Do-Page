import { Grid, IconButton, Paper, styled, Typography, useTheme } from '@mui/material'
import styles from './ToDo.module.css'
import {
  DeleteOutline,
  Check,
  EditOutlined,
  ExpandMore,
  CheckCircleOutline,
} from '@mui/icons-material'
import useToggle from 'hooks/useToggle'

const StyledDiv = styled('div')`
  display: flex;
  justify-content: center;
  margin: 250px auto 0 auto;
  gap: 1%;
`
const StyledPaper = styled(Paper)(
  ({ fullWidth }) => `
  background-color: #a8dadc;
  position: relative;
  height: 50px;
  min-width: 288px;
  transition: width 1s;
  width: 50%;
  left: auto;
  right: auto;
`,
)

const CheckButton = styled(IconButton)`
  background-color: white;
  height: 22px;
  width: 22px;
  border-radius: 2px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`

const ToDoTitle = styled(Typography)`
  margin-left: 10px;
  font-weight: 600;
`

const ActionArea = styled(Grid)`
  margin-left: auto;
  display: flex;
  justify-content: end;
  gap: 2px;
`

const ActionButton = styled(IconButton)`
  height: 30px;
  width: 30px;
  background-color: var(--white-fondo);
  margin-left: 5px;
`

export default function ToDo() {
  const [isSelected, setIsSelected] = useToggle()
  const [toDoOpen, setToDoOpen] = useToggle()
  const theme = useTheme()
  const ButtonsObjects = [
    {
      id: 1,
      icon: <EditOutlined />,
      onClick: null,
    },
    {
      id: 2,
      icon: <CheckCircleOutline />,
      onClick: null,
    },
    {
      id: 4,
      icon: <ExpandMore />,
      onClick: setToDoOpen,
    },
    {
      id: 5,
      icon: <DeleteOutline />,
      onClick: null,
    },
  ]

  return (
    <Grid container justifyContent='center' sx={{ width: '100%', height: '100vh' }}>
      <Grid item xs={12} md={7}>
        <StyledDiv>
          <StyledPaper className={toDoOpen ? styles.ToDoOpen : ''} sx={{ padding: '0 10px' }}>
            <Grid sx={{ height: '100%' }} container alignItems='center'>
              <Grid item>
                <CheckButton onClick={setIsSelected}>{isSelected && <Check />}</CheckButton>
              </Grid>
              <Grid item>
                <ToDoTitle>Esto es un To Do</ToDoTitle>
              </Grid>
              <ActionArea item sm={4}>
                {ButtonsObjects.map(({ id, icon, onClick }) => (
                  <ActionButton onClick={onClick} key={id}>
                    {icon}
                  </ActionButton>
                ))}
              </ActionArea>
            </Grid>
          </StyledPaper>
        </StyledDiv>
        <Grid sx={{ margin: '0 auto' }} xs={12} md={6} item>
          <Paper sx={{ borderTopLeftRadius: '0', borderTopRigthRadius: '0' }} elevation={1}>
            asdasd
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  )
}
