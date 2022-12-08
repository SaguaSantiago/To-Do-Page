import { Button, Paper, styled } from '@mui/material'

export const StyledPaper = styled(Paper)(
  ({ theme }) => `
    background-color: ${theme.palette.primary.main};
    max-width: 320px;
    height: 95px;
    position: relative;
    margin: 0 auto;
`,
)

export const FilterButton = styled(Button)`
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

export const WhiteLine = styled('div')(
  ({ filterstate }) => `
    width: 25%;
    height: 1px;
    background-color: white;
    position: absolute;
    bottom: 5px;
    transition: all 0.5s;
    left: ${filterstate === 'all' ? '3px' : filterstate === 'ready' ? 'calc(75% - 3px)' : '37%'};
  `,
)
