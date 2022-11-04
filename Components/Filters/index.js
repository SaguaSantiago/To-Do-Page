import { Avatar, Grid, Paper, Typography, styled, Button } from '@mui/material'
import SortIcon from '@mui/icons-material/Sort'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import { useDispatch, useSelector } from 'react-redux'
import { setFilterAll, setFilterPriority } from 'redux/Actions/Filters'

const StyledPaper = styled(Paper)(
  ({ theme }) => `
    background-color: ${theme.palette.primary.main};
    max-width: 320px;
    height: 95px;
    position: relative;
    margin: 0 auto;
`,
)

const FilterButton = styled(Button)`
  height: 60px;
  border: none;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
  margin: 0 auto;
  padding: 0;
`

const WhiteLine = styled('div')(
  ({ filterstate }) => `
  width: 40%;
  height: 1px;
  background-color: white;
  position: absolute;
  bottom: 5px;
  transition: all 0.5s;
  left: ${filterstate === 'all' ? '3px' : 'calc(60% - 3px)'};
`,
)

export default function Filters() {
  const dispatch = useDispatch()
  const filterState = useSelector((state) => state.filter)
  return (
    <>
      <StyledPaper>
        <Grid
          sx={{ width: '100%', height: '100%' }}
          container
          justifyContent='space-between'
          alignItems='center'
        >
          <Grid item xs={5}>
            <FilterButton onClick={() => dispatch(setFilterAll())} fullwidth>
              <Avatar sx={{ height: '45px', width: '45px', backgroundColor: '#fff' }}>
                <SortIcon sx={{ color: '#444' }} />
              </Avatar>
              <Typography variant='' color='#fff'>
                Todos
              </Typography>
            </FilterButton>
          </Grid>
          <Grid item xs={5}>
            <FilterButton onClick={() => dispatch(setFilterPriority())} fullwidth>
              <Avatar sx={{ height: '45px', width: '45px', backgroundColor: '#fff' }}>
                <BookmarkBorderIcon sx={{ color: '#444' }} />
              </Avatar>
              <Typography variant='' color='#fff'>
                Prioritarios
              </Typography>
            </FilterButton>
          </Grid>
        </Grid>
        <WhiteLine filterstate={filterState}></WhiteLine>
      </StyledPaper>
    </>
  )
}
