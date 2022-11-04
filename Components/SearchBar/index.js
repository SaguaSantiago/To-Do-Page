import { Grid } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import SearchIcon from '@mui/icons-material/Search'

import { sharingInformationService } from 'services/sharing-information'

import { PaperContainer, SearchTextfield, StyledIconButton } from './StyledComponents'

export default function SearchBar() {
  return (
    <>
      <PaperContainer>
        <Grid sx={{ height: '100%' }} container justifyContent='space-between' alignItems='center'>
          <Grid
            sx={{ display: 'flex', justifyContent: 'start', gap: '9px' }}
            item
            xs={8}
            sm={9}
            md={10}
          >
            <div style={{ width: '280px' }}>
              <SearchTextfield placeholder='SEARCH' fullWidth={true} />
            </div>
            <StyledIconButton>
              <SearchIcon />
            </StyledIconButton>
          </Grid>
          <Grid item>
            <StyledIconButton
              onClick={() => sharingInformationService.setSubject(true)}
              sx={{ borderRadius: '50%' }}
            >
              <AddCircleOutlineIcon />
            </StyledIconButton>
          </Grid>
        </Grid>
      </PaperContainer>
    </>
  )
}
