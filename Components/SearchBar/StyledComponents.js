import { styled, TextField, Paper, IconButton } from '@mui/material'

export const SearchTextfield = styled(TextField)`
  & .MuiOutlinedInput-root {
    height: 40px;
    border-radius: 10px;
    background-color: #fff;
    padding: 5px;
  }
`

export const PaperContainer = styled(Paper)(
  ({ theme }) => `
    min-width: 320px;
    width: 30%;
    margin: 50px auto;
    margin-bottom: 10px;
    padding: 0 40px;
    border-radius: 10px;
    height: 80px;
    background-color: ${theme.palette.primary.dark};
`,
)

export const StyledIconButton = styled(IconButton)(
  ({ theme }) => `
    border-radius: 10px;
    background-color: #fff;
    &:hover {
    background-color: ${theme.palette.primary.main + 'ff'}
    }
`,
)
