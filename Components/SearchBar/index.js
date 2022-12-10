import { useState } from 'react'

import { Grid, Tooltip } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'

import { createToDoService } from 'services/sharing-information'

import { useDispatch, useSelector } from 'react-redux'
import { searcheToDos } from 'redux/Actions/toDo'

import { PaperContainer, SearchTextfield, StyledIconButton } from './StyledComponents'

export default function SearchBar() {
  const state = useSelector((state) => state.toDos)
  const dispatch = useDispatch()
  const [searchTextfield, setSearchTextfield] = useState('')
  const addToDo = () => createToDoService.setSubject(true)

  return (
    <>
      <PaperContainer>
        <Grid sx={{ height: '100%' }} container justifyContent={'space-around'} alignItems='center'>
          <Grid
            sx={{ display: 'flex', justifyContent: 'start', gap: '9px' }}
            item
            xs={8}
            sm={9}
            md={10}
          >
            <div style={{ width: '280px' }}>
              <SearchTextfield
                autoComplete='off'
                defaultValue={searchTextfield}
                onChange={(e) => {
                  dispatch(searcheToDos(e.target.value, state))
                  setSearchTextfield(e.target.value)
                }}
                placeholder='SEARCH'
                fullWidth={true}
              />
            </div>
          </Grid>
          <Grid item>
            <Tooltip title='añadir tarea'>
              <StyledIconButton onClick={addToDo} sx={{ borderRadius: '50%' }}>
                <AddCircleOutlineIcon />
              </StyledIconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </PaperContainer>
    </>
  )
}
