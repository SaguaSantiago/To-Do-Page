import { Grid, IconButton, Paper, styled, TextField } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import SearchIcon from '@mui/icons-material/Search'
import { sharingInformationService } from 'services/sharing-information'

const SearchTextfield = styled(TextField)`
  & .MuiOutlinedInput-root {
    height: 40px;
    border-radius: 10px;
    background-color: #fff;
    padding: 5px;
  }
`

const PaperContainer = styled(Paper)(
  ({ theme }) => `
    min-width: 320px;
    width: 30%;
    margin: 50px auto;
    padding: 0 40px;
    border-radius: 10px;
    height: 80px;
    background-color: ${theme.palette.primary.dark};
`,
)

const StyledIconButton = styled(IconButton)(
  ({ theme }) => `
    border-radius: 10px;
    background-color: #fff;
    &:hover {
    background-color: ${theme.palette.primary.main + 'ff'}
    }
`,
)

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
