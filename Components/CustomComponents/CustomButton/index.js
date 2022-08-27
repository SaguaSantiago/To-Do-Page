import { Button, styled } from '@mui/material'

const StyledButton = styled(Button)(
  ({ theme, spacing }) => `
      color:${theme.palette.primary.dark};
      border-color: ${theme.palette.primary.dark};
      border-radius: 2px;
      letter-spacing: ${spacing ? spacing : ''}
    `,
)

export default function CustomButton({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>
}
