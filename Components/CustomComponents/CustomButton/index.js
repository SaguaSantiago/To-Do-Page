import { Button, styled } from '@mui/material'

const StyledButton = styled(Button)(
  ({ theme }) => `
      color:${theme.palette.primary.dark};
      border-color: ${theme.palette.primary.dark};
      border-radius: 2px
    `,
)

export default function CustomButton({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>
}
