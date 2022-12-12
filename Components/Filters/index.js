import { Avatar, Grid, Typography } from '@mui/material'
import CheckCircleOutline from '@mui/icons-material/CheckCircleOutline'
import SortIcon from '@mui/icons-material/Sort'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'

import { useDispatch, useSelector } from 'react-redux'
import { setFilterAll, setFilterPriority, setFilterReady } from 'redux/Actions/Filters'

import { FilterButton, StyledPaper, WhiteLine } from './StyledComponents'

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
          <Grid item xs={3.5}>
            <FilterButton onClick={() => dispatch(setFilterAll())} fullwidth>
              <Avatar sx={{ height: '45px', width: '45px', backgroundColor: '#fff' }}>
                <SortIcon sx={{ color: '#444' }} />
              </Avatar>
              <Typography variant='' color='#fff'>
                Todos
              </Typography>
            </FilterButton>
          </Grid>
          <Grid item xs={3.5}>
            <FilterButton onClick={() => dispatch(setFilterPriority())} fullwidth>
              <Avatar sx={{ height: '45px', width: '45px', backgroundColor: '#fff' }}>
                <BookmarkBorderIcon sx={{ color: '#444' }} />
              </Avatar>
              <Typography variant='' color='#fff'>
                Prioritarios
              </Typography>
            </FilterButton>
          </Grid>
          <Grid item xs={3.5}>
            <FilterButton onClick={() => dispatch(setFilterReady())} fullwidth>
              <Avatar sx={{ height: '45px', width: '45px', backgroundColor: '#fff' }}>
                <CheckCircleOutline sx={{ color: '#444' }} />
              </Avatar>
              <Typography variant='' color='#fff'>
                Listos
              </Typography>
            </FilterButton>
          </Grid>
        </Grid>
        <WhiteLine filterstate={filterState}></WhiteLine>
      </StyledPaper>
    </>
  )
}
